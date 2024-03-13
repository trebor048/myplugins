/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "** DOESNTWORK ** AutoIdleOnAFK",
    description: "changes your status to 'idle' wen you are tabbed out of discord for 5 minutes (originally created by RoguedBear but ported to Vencord)",
    authors: [
        {
            id: 904144997559975937n,
            name: "Aero Solid Color",
        },
    ],
    patches: [],
    // Delete these two below if you are only using code patches
    start() { },
    stop() { },
});
