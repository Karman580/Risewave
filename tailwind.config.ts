import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "deep-navy": "#020617",
        neon: {
          DEFAULT: "#00E5FF",
          hover: "#00C2D8",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        float: "float 10s ease-in-out infinite alternate",
        "float-slow": "float 12s ease-in-out infinite alternate-reverse",
        "grid-move": "gridMove 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(40px) scale(1.1)" },
        },
        gridMove: {
          "0%": {
            transform:
              "perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px)",
          },
          "100%": {
            transform:
              "perspective(500px) rotateX(60deg) translateY(60px) translateZ(-200px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
