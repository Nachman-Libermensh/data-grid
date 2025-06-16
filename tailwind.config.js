/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // ⚠️ Required this line to compile RizzUI style.
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // צבעי רקע
        background: {
          DEFAULT: "#fdfcfb",
          soft: "#f8f6f3",
          card: "#ffffff",
        },

        // צבעי טקסט
        foreground: {
          DEFAULT: "#2d2a26",
          muted: "#6b645c",
          soft: "#8b8680",
        },

        // צבעי אקסנט רומנטיים
        primary: {
          lighter: "#f2e6d3",
          light: "#e8c4a0",
          DEFAULT: "#d4a574",
          dark: "#b8935f",
          foreground: "#ffffff",
        },

        // צבעי משלימים
        secondary: {
          lighter: "#d6dfe9",
          DEFAULT: "#a8b5d1",
          dark: "#8a9bc4",
          foreground: "#ffffff",
        },

        // צבעים נוספים
        accent: "#e8d5c4",
        muted: "#f1ece6",
        border: "#e6ddd4",

        // צבעי מערכת לRizzUI
        red: {
          lighter: "#fecaca",
          DEFAULT: "#ef4444",
          dark: "#dc2626",
        },
        orange: {
          lighter: "#fed7aa",
          DEFAULT: "#f97316",
          dark: "#ea580c",
        },
        blue: {
          lighter: "#bae6fd",
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
        },
        green: {
          lighter: "#bbf7d0",
          DEFAULT: "#10b981",
          dark: "#059669",
        },
      },
      boxShadow: {
        soft: "0 2px 12px rgba(212, 165, 116, 0.08)",
        medium: "0 4px 20px rgba(212, 165, 116, 0.12)",
        strong: "0 8px 30px rgba(212, 165, 116, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
