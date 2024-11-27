const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
            head: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
            subhead: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        },
    },
}
