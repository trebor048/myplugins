/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { React, useState } from "@webpack/common";

const cl = classNameFactory("auto-click-");
let lastClickedButtonIndex = -1;

const settings = definePluginSettings({
    hotkey: {
        type: OptionType.COMPONENT,
        description: "Hotkey to trigger AutoClick",
        default: ["insert"],
        component: () => {
            const [recording, setRecording] = useState(false);
            const [keys, setKeys] = useState(new Set());

            const recordKeybind = () => {
                if (recording) return;
                setRecording(true);

                const capturedKeys = new Set();
                const handleKeyDown = event => {
                    capturedKeys.add(event.key);
                };

                const handleKeyUp = () => {
                    document.removeEventListener("keydown", handleKeyDown);
                    document.removeEventListener("keyup", handleKeyUp);
                    setRecording(false);
                    setKeys(capturedKeys);
                };

                document.addEventListener("keydown", handleKeyDown);
                document.addEventListener("keyup", handleKeyUp);
            };

            return (
                <div className={cl("hotkey-recorder-container")} onClick={recordKeybind}>
                    <div className={cl("hotkey-recorder")}>
                        <span>{keys.size > 0 ? Array.from(keys).join(" + ") : "Click to record keybind"}</span>
                        <button className={cl("hotkey-recorder-button")}>
                            {recording ? "Recording..." : "Record Keybind"}
                        </button>
                    </div>
                </div>
            );
        }
    }
});

export default definePlugin({
    name: "AutoClick",
    description: "Automatically clicks a designated button when a specific keybind is pressed.",
    authors: [Devs.LuckyCanucky],
    settings,

    start() {
        const { hotkey } = settings.store;
        const handler = e => {
            if (hotkey.includes(e.key)) {
                this.clickNextButton(".container_d09a0b .Button__button", "845022164134789191", "🔁");
            }
        };

        window.addEventListener("keydown", handler);
    },

    stop() {
        window.removeEventListener("keydown", this.keydownHandler);
    },

    clickNextButton(selector, authorId, imgName) {
        const buttons = document.querySelectorAll(selector);

        if (buttons.length === 0) {
            console.error(`Failed to find the button with the selector "${selector}".`);
            return;
        }

        lastClickedButtonIndex++;
        if (lastClickedButtonIndex >= buttons.length) {
            lastClickedButtonIndex = 0; // Reset index if reached the end
        }

        const button = buttons[lastClickedButtonIndex];
        const parentContainer = button.closest(`[data-author-id="${authorId}"]`);

        if (!parentContainer) {
            console.error(`Failed to find the parent container with the matching author ID "${authorId}".`);
            return;
        }

        const imgSelector = `img[data-name="${imgName}"]`;
        const imgButton = parentContainer.querySelector(imgSelector);

        if (!imgButton) {
            console.error("Failed to find the button with");
            return;
        }

        // Click the button here
        button.click();
    }
});
