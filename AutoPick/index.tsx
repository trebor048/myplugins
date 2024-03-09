/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { React, SelectedChannelStore, useState } from "@webpack/common";

import { sendMessage } from "../../../utils/discord";

const cl = classNameFactory("vc-command-palette-");
let recording = false;
let canSendPick = true;
const sendDelay = 5000; // 5 seconds delay

function getCurrentChannelId(): string {
    return SelectedChannelStore.getChannelId();
}

function customSendMessage(channelId: string, content: string) {
    if (!canSendPick) return;

    sendMessage(channelId, { content }); // Pass content as part of the data object

    canSendPick = false;

    setTimeout(() => {
        canSendPick = true;
    }, sendDelay);
}

const settings = definePluginSettings({
    hotkey: {
        description: "The hotkey to send '.pick' into the current channel.",
        type: OptionType.COMPONENT,
        default: ["F23"], // Default hotkey setup
        component: function (props: any) {
            const [recording, setRecording] = useState(false);

            return (
                <div className={cl("key-recorder-container")} onClick={recordKeybind}>
                    <div className={`${cl("key-recorder")} ${recording ? cl("recording") : ""}`}>
                        {props.value.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" + ")}
                        <button className={`${cl("key-recorder-button")} ${recording ? cl("recording-button") : ""}`} disabled={recording}>
                            {recording ? "Recording..." : "Record keybind"}
                        </button>
                    </div>
                </div>
            );
        }
    }
});

function recordKeybind() {
    const keys = new Set<string>();
    const keyLists: Array<Array<string>> = [];

    const updateComponentText = () => {
        const button = document.querySelector(`.${cl("key-recorder-button")}`) as HTMLButtonElement;
        const div = document.querySelector(`.${cl("key-recorder")}`);

        if (button) {
            button.textContent = recording ? "Recording..." : "Record keybind";
            button.classList.toggle(cl("recording-button"), recording);
        }

        if (div) {
            div.classList.toggle(cl("recording"), recording);
        }
    };

    recording = true;
    updateComponentText();

    const updateKeys = () => {
        if (keys.size === 0 || !document.querySelector(`.${cl("key-recorder-button")}`)) {
            const longestArray = keyLists.reduce((a, b) => a.length > b.length ? a : b, []);

            if (longestArray.length > 0) {
                settings.store.hotkey = longestArray.map(key => key.toLowerCase());
            }

            recording = false;
            updateComponentText();

            document.removeEventListener("keydown", keydownListener);
            document.removeEventListener("keyup", keyupListener);
        }

        keyLists.push(Array.from(keys));
    };

    const keydownListener = (e: KeyboardEvent) => {
        const { key } = e;

        if (!keys.has(key)) {
            keys.add(key);
        }

        updateKeys();
    };

    const keyupListener = (e: KeyboardEvent) => {
        keys.delete(e.key);
        updateKeys();
    };

    document.addEventListener("keydown", keydownListener);
    document.addEventListener("keyup", keyupListener);
}

function handler(e: KeyboardEvent) {
    if (recording) return;

    const { hotkey } = settings.store;
    const pressedKeys = [e.key.toLowerCase(), ...(e.ctrlKey ? ["control"] : []), ...(e.shiftKey ? ["shift"] : []), ...(e.altKey ? ["alt"] : []), ...(e.metaKey ? ["meta"] : [])];

    const hotkeyMatch = hotkey.every(key => pressedKeys.includes(key.toLowerCase()));

    if (hotkeyMatch) {
        const channelId = getCurrentChannelId();
        if (channelId) {
            customSendMessage(channelId, ".pick");
            e.preventDefault(); // Prevent default action to avoid interfering with other shortcuts
        }
    }
}

export default definePlugin({
    name: "AutoPick",
    description: "Sends '.pick' into the current channel when the specified hotkey is pressed, and allows navigating the UI with a keyboard.",
    authors: [Devs.lucky],
    settings,

    start() {
        document.addEventListener("keydown", handler);
    },

    stop() {
        document.removeEventListener("keydown", handler);
    },
});
