/** @type {import('tailwindcss').Config} */
export default {  
    presets: [
        require("./presets/color.ts"),
        require("./presets/size.ts"),
        require("./presets/typography.ts"),
    ],
    darkMode: "selector",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
    plugins: [require("tailwindcss-animate")],
}

