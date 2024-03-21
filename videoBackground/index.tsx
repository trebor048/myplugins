/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";


const settings = definePluginSettings({
    videoBgURL: {
        type: OptionType.STRING,
        description: "Video URL for the Background of the client.",
        default: "https://i.imgur.com/xqBBP1U.mp4",
    },
});

export default definePlugin({
    name: "videoBackground",
    description: "Injects a video background into the Discord client.",
    authors: [Devs.lucky],
    settings,

    start() {
        // Define video source and attributes
        const videoSrc = [settings.store.videoBgURL];
        const videoAttributes = { autoplay: true, muted: true, loop: true, style: "width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1;" };

        // Create video element and set attributes
        const video = Object.assign(document.createElement("videoBG"), videoAttributes);

        // Create source element and set attributes
        const source = Object.assign(document.createElement("source"), { src: videoSrc, type: "video/mp4" });

        // Append source to video
        video.appendChild(source);

        // Append video to the body as the background
        document.body.appendChild(video);
    },
    stop() {
        // Safely remove the video background when the plugin is disabled
        const videoBackground: HTMLVideoElement | null = document.querySelector("videoBgURL");
        if (videoBackground && videoBackground.parentNode) {
            videoBackground.parentNode.removeChild(videoBackground);
        }
    },

});
