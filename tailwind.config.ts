import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      // Define custom properties for dark mode under the 'extend' key
      colors: {
        // Example: Define a dark background and text colors for dark mode
        background: {
          DEFAULT: '#ffffff', // Light mode background
          dark: '#1a202c' // Dark mode background
        },
        text: {
          DEFAULT: '#1a202c', // Light mode text color
          dark: '#ffffff' // Dark mode text color
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
