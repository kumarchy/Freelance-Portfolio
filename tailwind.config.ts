import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#050806",
          secondary: "#0B120D",
        },
        surface: "#101A13",
        elevated: "#16231A",
        emerald: {
          primary: "#37D67A",
          secondary: "#22C55E",
          highlight: "#86EFAC",
          hover: "#6EE7B7",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#A1A8B3",
          muted: "#6B7280",
        },
        border: "rgba(74, 222, 128, 0.12)",
        divider: "rgba(255, 255, 255, 0.06)",
        glow: "rgba(55, 214, 122, 0.35)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "emerald-gradient": "linear-gradient(to right, #16A34A, #4ADE80)",
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0, 0, 0, 0.45)",
        button: "0 10px 40px rgba(55, 214, 122, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
