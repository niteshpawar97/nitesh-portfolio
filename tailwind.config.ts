import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette: black, white, navy blue.
        ink: {
          950: "#05070d",
          900: "#080b13",
          850: "#0b0f1a",
          800: "#0f1422",
          700: "#161c2d",
          600: "#1d2538",
        },
        navy: {
          50: "#eef2fb",
          100: "#d7e0f5",
          200: "#aebfe8",
          300: "#7d96d6",
          400: "#4f6dbf",
          500: "#3050a3",
          600: "#243d82",
          700: "#1d3168",
          800: "#172650",
          900: "#111c3c",
          950: "#0a1128",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
