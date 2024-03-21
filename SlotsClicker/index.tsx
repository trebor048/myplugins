/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import HotKeyRecorder from '@components/PluginSettings/'; // Ensure the path is correct
import { definePluginSettings, OptionType } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types"; // This might need adjustment based on your actual import


const settings = definePluginSettings({
    hotkey: {
        type: OptionType.COMPONENT,
        description: "Hotkey to trigger AutoClick",
        default: ["F22"], // Assuming this gets properly passed down to your component
        component: HotKeyRecorder // Ensure HotKeyRecorder can handle these props
    },
    buttonSelector: {
        type: OptionType.STRING,
        description: "CSS Selector for the button to auto-click",
        default: "div.container_dbadf5 > div > div > div > button",
    },
    authorId: {
        type: OptionType.STRING,
        description: "Author ID for targeted clicking",
        default: "",
    },
    imgName: {
        type: OptionType.STRING,
        description: "Image name for additional click targeting",
        default: "",
    },
});

const AutoClickPlugin = definePlugin({
    name: "AutoClick",
    description: "Automatically clicks a designated button when a specific keybind is pressed.",
    authors: [Devs.lucky], // Assuming Devs.lucky is correctly defined
    settings,

    start() {
        // Ensure 'this' is correctly bound or use arrow functions for handler
        const handler = (e) => {
            const hotkeys = settings.store.hotkey; // Assuming settings.store is correctly implemented
            if (hotkeys.includes(e.key)) {
                this.clickNextButton(settings.store.buttonSelector, settings.store.authorId, settings.store.imgName);
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", handler);
        this.keydownHandler = handler; // Store the handler for later removal
    },

    stop() {
        window.removeEventListener("keydown", this.keydownHandler);
    },

    clickNextButton(selector, authorId = "", imgName = "") {
        // Click logic remains the same
        // ...
    },
});

export default AutoClickPlugin;

    const clickNextButton = (selector, authorId = "", imgName = "") => {
        const buttons = document.querySelectorAll(selector);
        if (!buttons.length) {
            console.error(`No buttons found with the selector: "${selector}"`);
            return;
        }

        const filteredButtons = Array.from(buttons).filter(button => {
            const matchesAuthorId = authorId ? button.closest(`[data-author-id="${authorId}"]`) : true;
            const matchesImgName = imgName ?
                Array.from(button.querySelectorAll('img')).some(img => img.src.includes(imgName)) : true;

            return matchesAuthorId && matchesImgName;
        });

        if (!filteredButtons.length) {
            console.error(`No buttons found matching the specified criteria.`);
            return;
        }

        filteredButtons[0].click();
        console.log('Button clicked successfully!');
    };

    return { start, stop, clickNextButton };
};

export default AutoClickPlugin;

// Assuming HotKeyRecorder is defined correctly
