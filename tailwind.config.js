module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          "common-capital-paragaraph":
            "var(--common-capital-paragaraph-font-family)",
          "common-navbar-link": "var(--common-navbar-link-font-family)",
          "common-small-text": "var(--common-small-text-font-family)",
          "desktop-button-lable": "var(--desktop-button-lable-font-family)",
          "desktop-heading-1": "var(--desktop-heading-1-font-family)",
          "desktop-heading-2": "var(--desktop-heading-2-font-family)",
          "desktop-heading-3": "var(--desktop-heading-3-font-family)",
          "desktop-heading-4": "var(--desktop-heading-4-font-family)",
          "desktop-paragraph-bold": "var(--desktop-paragraph-bold-font-family)",
          "desktop-pargraph": "var(--desktop-pargraph-font-family)",
          "mobile-tablet-heading-2": "var(--mobile-tablet-heading-2-font-family)",
          "mobile-tablet-heading-3": "var(--mobile-tablet-heading-3-font-family)",
          "mobile-tablet-heading-4": "var(--mobile-tablet-heading-4-font-family)",
          "mobile-tablet-heading1": "var(--mobile-tablet-heading1-font-family)",
          "mobile-tablet-paragraph": "var(--mobile-tablet-paragraph-font-family)",
          sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
        },
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
    plugins: [],
    darkMode: ["class"],
  };
  