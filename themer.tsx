/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings, Settings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType, StartAt } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { Button, Clipboard, Forms, Toasts } from "@webpack/common";

function mute(hex, amount) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    // Lower the brightness component
    r = Math.max(r - amount, 0);
    g = Math.max(g - amount, 0);
    b = Math.max(b - amount, 0);

    // Convert RGB to hexadecimal format
    return "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}

let addResizeListener = false;
let luckysGuildResizer = true; // Example, replace with your actual code

// Function to run when the window loads or when luckysGuildResizer changes
function onWindowLoadOrLuckysGuildResizerChange() {
    if (luckysGuildResizer && !addResizeListener) {
        addResizeEventListener();
        addResizeListener = true; // Set to true to prevent adding listener again
    }
}

// Add event listener for window load event
window.addEventListener("load", onWindowLoadOrLuckysGuildResizerChange);

// Function to add resize event listener to guildsElement
function addResizeEventListener() {
    const guildsElement = document.querySelector(".guilds__2b93a") as HTMLElement;

    // Check if the .guilds__2b93a element exists
    if (guildsElement) {
        // Mouse position variables
        let startX: number;
        let startWidth: number;

        // Resize event listener callback function
        const resizeHandler = (event: MouseEvent) => {
            // Calculate the new width based on the mouse position
            const newWidth = startWidth + (event.clientX - startX);

            // Update the width of the element
            guildsElement.style.width = `${newWidth}px`;
        };

        // Mouse down event listener callback function
        const mouseDownHandler = (event: MouseEvent) => {
            // Store the initial mouse position and width of the element
            startX = event.clientX;
            startWidth = guildsElement.getBoundingClientRect().width;

            // Add event listeners for mousemove and mouseup events
            window.addEventListener("mousemove", resizeHandler);
            window.addEventListener("mouseup", () => {
                // Remove event listeners when the mouse button is released
                window.removeEventListener("mousemove", resizeHandler);
            });
        };

        // Add mousedown event listener to the right edge of the element
        guildsElement.addEventListener("mousedown", event => {
            // Check if the mousedown event occurred on the right edge of the element
            if (event.offsetX >= guildsElement.offsetWidth - 10) {
                mouseDownHandler(event);
            }
        });

        console.log("Resize event listener added to .guilds__2b93a element.");
    } else {
        console.error(".guilds__2b93a element not found.");
    }
}

const ColorPicker = findComponentByCodeLazy(".Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR", ".BACKGROUND_PRIMARY)");

const settings = definePluginSettings({
    luckysTheme: {
        type: OptionType.BOOLEAN,
        description: "Toggle's Lucky's theme and disables all the others from within the plugin",
        default: false,
        onChange: () => injectCSS()
    },
    guildsResizeHandle: {
        type: OptionType.BOOLEAN,
        description: "Toggles the guilds resize handle",
        default: false,
        onChange: () => toggleResizeHandle() // Function to toggle the resize handle
    },
    luckysCSSBRAND: {
        type: OptionType.COMPONENT,
        description: "Brand Experiment Variable (Highlights/Some buttons)",
        default: "007bff",
        component: () => <ColorPick propertyname="Primary" />
      },
    luckysCSS1BG: {
      type: OptionType.STRING,
      description: "Image or GIF for the background #1 of the Client",
      default: "https://i.imgur.com/xqBBP1U.gif",
      onChange: () => injectCSS()
    },
    luckyCSS1BRIGHTNESS: {
        type: OptionType.SLIDER,
        description: "Level of the background #1 BRIGHTNESS, 0-1",
        markers: [0, 0.25, 0.5, 0.75, 1],
        default: 0.5,
        stickToMarkers: false,
        onChange: () => injectCSS()
    },
    luckyCSS1ANIMATION: {
        type: OptionType.SLIDER,
        description: "Level of the speed for background #1 ANIMATION, 0-100 seconds",
        markers: [0, 40, 80, 100, 140, 180],
        default: 100,
        stickToMarkers: false,
        onChange: () => injectCSS()
    },
    luckysCSS2BG: {
        type: OptionType.STRING,
        description: "Image or GIF for the background #2 of the Client",
        default: "https://i.imgur.com/EUqq0lH.gif",
        onChange: () => injectCSS()
      },
      luckyCSS2NIMATION: {
        type: OptionType.SLIDER,
        description: "Level of the speed for background #2 ANIMATION, 0-100 seconds",
        markers: [0, 20, 40, 60, 80, 100],
        default: 60,
        stickToMarkers: false,
        onChange: () => injectCSS()
    },
    serverListAnim: {
        type: OptionType.BOOLEAN,
        description: "Toggles if the server list hides when not hovered",
        default: false,
        onChange: () => injectCSS()
    },
    memberListAnim: {
        type: OptionType.BOOLEAN,
        description: "Toggles if the member list hides when not hovered",
        default: true,
        onChange: () => injectCSS()
    },
    customFont: {
        type: OptionType.STRING,
        description: "The google fonts @import for a custom font (blank to disable)",
        default: "@import url('https://fonts.googleapis.com/css2?family=Comfortaa&wght@300&display=swap');",
        onChange: () => injectCSS()
    },
    Primary: {
        type: OptionType.COMPONENT,
        description: "Primary BG Coloring",
        default: "000000",
        component: () => <ColorPick propertyname="Primary" />
    },
    Accent: {
        type: OptionType.COMPONENT,
        description: "Accent BG Coloring",
        default: "313338",
        component: () => <ColorPick propertyname="Accent" />
    },
    Brand: {
        type: OptionType.COMPONENT,
        description: "Highlights / Blurple",
        default: "ffffff",
        component: () => <ColorPick propertyname="Brand" />
    },
    Text: {
        type: OptionType.COMPONENT,
        description: "Text Color",
        default: "ffffff",
        component: () => <ColorPick propertyname="Text" />
    },
    ExportTheme:
    {
        type: OptionType.COMPONENT,
        description: "",
        default: "",
        component: () => <Button onClick={() => {
            copyCSS();
            Toasts.show({
                id: Toasts.genId(),
                message: "Successfully copied theme!",
                type: Toasts.Type.SUCCESS
            });
        }} >Copy The CSS for your current configuration.</Button>
    },

});

// Function to toggle the resize handle
function toggleResizeHandle() {
    luckysGuildResizer = !luckysGuildResizer; // Toggle the value of luckysGuildResizer
    onWindowLoadOrLuckysGuildResizerChange(); // Call the function to update the resize listener
}
export function ColorPick({ propertyname }: { propertyname: string; }) {
    return (

        <div className="color-options-container">
            <Forms.FormTitle tag="h3">{propertyname}</Forms.FormTitle>

            <ColorPicker
                color={parseInt(settings.store[propertyname], 16)}
                onChange={color => {
                    const hexColor = color.toString(16).padStart(6, "0");
                    settings.store[propertyname] = hexColor;
                    injectCSS();
                }
                }
                showEyeDropper={false}
            />
        </div>
    );
}


function copyCSS() {
    if (Clipboard.SUPPORTS_COPY) {
        Clipboard.copy(getCSS(parseFontContent()));
    }
}

function parseFontContent() {
    const fontRegex = /family=([^&;,:]+)/;
    const customFontString: string = Settings.plugins.Glide.customFont;
    if (customFontString == null) { return; }
    const fontNameMatch: RegExpExecArray | null = fontRegex.exec(customFontString);
    const fontName = fontNameMatch ? fontNameMatch[1].replace(/[^a-zA-Z0-9]+/g, " ") : "";
    return fontName;
}
function injectCSS() {

    const fontName = parseFontContent();
    const theCSS = getCSS(fontName);

    var elementToRemove = document.getElementById("GlideStyleInjection");
    if (elementToRemove) {
        elementToRemove.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = "GlideStyleInjection";
    styleElement.textContent = theCSS;
    document.documentElement.appendChild(styleElement);
}

function getCSS(fontName) {
    return `

        /* Luckys Theme */
        ${Settings.plugins.Glide.luckysTheme ? `
        @import url(https://raw.githubusercontent.com/trebor048/discordddd/main/main2.css);
        /* Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
        ${Settings.plugins.Glide.customFont}
        :root {
            /*CHANGE THESE COLORS FOR THE BACKGROUND*/
                  --TEXTURE: url(${Settings.plugins.Glide.luckysCSS1BG});
                  --textureBrightness: ${Settings.plugins.Glide.luckysCSS1BRIGHTNESS};
            /*CHANGE THESE COLORS FOR THE BACKGROUND*/
            }
            #app-mount {
                /*
                  background-image: radial-gradient(circle at bottom, var(--blueg), transparent 80%), linear-gradient(to top, var(--greeng), transparent 70%), linear-gradient(to bottom, transparent, var(--whiteg), var(--blueg));
                  */
                 background-image: url(${Settings.plugins.Glide.luckysCSS2BG});
                 backdrop-filter: brightness(5);
                 border-radius:18px;
                 background-size:105% 105%;
                  animation: bgg ${Settings.plugins.Glide.luckysCSS2ANIMATION}s ease-in-out infinite;
            }
            .platform-win .bg__12180 {
                  background-image: var(--TEXTURE);
                  opacity: var(--textureBrightness);
                  background-size: cover;
                  background-repeat: round;
                  animation: bg ${Settings.plugins.Glide.luckysCSS1ANIMATION}s ease-in-out infinite;
            }

                  --brand-experiment: ${Settings.plugins.Glide.luckysCSSBRAND};
                  --green-360: var(--brand-experiment);
                  --background-modifier-selected: var(--brand-experiment)
                  --BG-GRADIENT: linear-gradient(120deg, rgba(39, 6, 102, 0.8), rgba(11, 109, 148, 0.65), rgba(71, 78, 7, 0.6), rgba(105, 7, 114, 0.8));
            }

            ` : ""}

    /*Settings things*/
        /*Server list animation*/
        ${Settings.plugins.Glide.serverListAnim ? `
        .guilds__2b93a {
            width: 10px;
            transition: width var(--animspeed) ease 0.1s, opacity var(--animspeed) ease 0.1s;
            opacity: 0;
        }
        .guilds__2b93a:hover {
            width: 65px;
            opacity: 100;
        }
        ` : ""}
        /*Member list anim toggle*/
        ${Settings.plugins.Glide.memberListAnim ? `
            .container_b2ce9c
            {
                width: 60px;
                opacity: 0.2;
                transition: width var(--animspeed) ease 0.1s, opacity var(--animspeed) ease 0.1s;

            }
            .container_b2ce9c:hover
            {
                width: 250px;
                opacity: 1;
            }
        ` : ""}
        /*Root configs*/
        ${Settings.plugins.Glide.test ? `
            :root
            {
            --font-primary: ${(fontName.length > 0 ? fontName || "Comfortaa" : "Quicksand")};
            --accent: #${Settings.plugins.Glide.Accent};
            --bgcol: #${Settings.plugins.Glide.Primary};
            --text: #${Settings.plugins.Glide.Text};
            --brand: #${Settings.plugins.Glide.Brand};
            --mutedtext: ${mute(Settings.plugins.Glide.Text, 30)};
            }
        ` : ""}
`}
export default definePlugin({
    name: "Glide",
    description: "A sleek, rounded theme for discord.",
    authors:
        [
            Devs.Samwich, Devs.lucky
        ],
    settings,
    start() {
        injectCSS();
    },
    stop() {
        const injectedStyle = document.getElementById("GlideStyleInjection");
        if (injectedStyle) {
            injectedStyle.remove();
        }
    },
    startAt: StartAt.DOMContentLoaded

});


