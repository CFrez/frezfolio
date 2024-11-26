/** @type {import('tailwindcss').Config} */
export default {
    presets: [
        require('./src/assets/presets/color.ts'),
        require('./src/assets/presets/layout.ts'),
        require('./src/assets/presets/size.ts'),
        require('./src/assets/presets/shadow.ts'),
        require('./src/assets/presets/typography.ts'),
    ],
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './public/**/*.{svg,png,jpg,jpeg}',
    ],
    plugins: [require('tailwindcss-animate'), require('@xpd/tailwind-3dtransforms')],
}
