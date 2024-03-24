/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { definePluginSettings, OptionType } from "@api/Settings";
import { HotKeyRecorder } from '@components/PluginSettings/components/SettingHotkeyComponent';
import { Devs } from "@utils/constants";
import definePlugin from '@utils/types';

const settings = definePluginSettings({
    hotkey: {
        type: OptionType.COMPONENT,
        description: "Hotkey to trigger AutoClick",
        default: ["F22"], // Assuming this gets properly passed down to your component
        component: HotKeyRecorder // Ensure HotKeyRecorder is imported and can handle these props
    },
    buttonSelector: {
        type: OptionType.STRING,
        description: "CSS Selector for the button to auto-click",
        default: "button.component__43381", // Default selector targeting the provided button
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

export default definePlugin({
    name: "AutoClick",
    description: "Automatically clicks a designated button when a specific keybind is pressed.",
    authors: [Devs.lucky], // Assuming Devs.lucky is correctly defined
    settings,

    start() {
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
        const button = document.querySelector(selector);
        if (!button) {
            console.error(`No button found with the selector: "${selector}"`);
            return;
        }

        const matchesAuthorId = authorId ? button.closest(`[data-author-id="${authorId}"]`) : true;
        const matchesImgName = imgName ?
        Array.from(button.querySelectorAll('img')).some((img) => (img as HTMLImageElement).src.includes(imgName)) : true;



        if (!matchesAuthorId || !matchesImgName) {
            console.error(`Button found but does not match the specified criteria.`);
            return;
        }

        button.click();
        console.log('Button clicked successfully!');
    },
});
