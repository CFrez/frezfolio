module.exports = {
    theme: {
      extend: {
        colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))'
            },
            primary: {
                DEFAULT: "hsl(var(--primary))",
                light: "hsl(var(--primary-light))",
                dark: "hsl(var(--primary-dark))",
                foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
                DEFAULT: "hsl(var(--secondary))",
                light: "hsl(var(--secondary-light))",
                dark: "hsl(var(--secondary-dark))",
                foreground: 'hsl(var(--secondary-foreground))'
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                dark: "hsl(var(--accent-dark))",
                foreground: 'hsl(var(--accent-foreground))'
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
            },

            /** Default */
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
                '1': 'hsl(var(--chart-1))',
                '2': 'hsl(var(--chart-2))',
                '3': 'hsl(var(--chart-3))',
                '4': 'hsl(var(--chart-4))',
                '5': 'hsl(var(--chart-5))'
            }
        },
      },
    },
  };
  