// filepath: c:\Users\Rain\Desktop\interview\project\AI_component\my-ai-components\tailwind.config.js
import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animatePlugin,
  ],
}