module.exports = {
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    hero: 'linear-gradient(transparent 0px, transparent 87%, hsl(var(--grey-dark)) 87%,  hsl(var(--grey-dark)))',
                },
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    light: 'hsl(var(--primary-light))',
                    dark: 'hsl(var(--primary-dark))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    light: 'hsl(var(--secondary-light))',
                    dark: 'hsl(var(--secondary-dark))',
                    foreground: 'hsl(var(--secondary-foreground))',
                    half: {
                        DEFAULT: 'hsl(var(--secondary) / 0.5)',
                        light: 'hsl(var(--secondary-light) / 0.5)',
                        dark: 'hsl(var(--secondary-dark) / 0.5)',
                        foreground: 'hsl(var(--secondary-foreground) / 0.5)',
                    },
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    dark: 'hsl(var(--accent-dark))',
                    foreground: 'hsl(var(--accent-foreground))',
                    half: {
                        DEFAULT: 'hsl(var(--accent) / 0.5)',
                        dark: 'hsl(var(--accent-dark) / 0.5)',
                        foreground: 'hsl(var(--accent-foreground) / 0.5)',
                    },
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                gray: {
                    dark: 'hsl(var(--grey-dark))',
                },

                /** Pages */
                design: 'hsl(var(--design))',
                eng: 'hsl(var(--eng))',
                graphics: 'hsl(var(--graphics))',
                software: 'hsl(var(--software))',
                ux: 'hsl(var(--ux))',

                /** Default */
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
        },
    },
}
