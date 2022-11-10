const colorsDefault = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        colors: {
            ...colorsDefault,
            "midnight": "#18202b",
            "acadeller": "#fc0"
        },
    },
    plugins: [require("daisyui")],
}
