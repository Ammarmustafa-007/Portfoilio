/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode using `.dark` class
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin360: "spin360 0.8s ease-in-out", // duration adjustable
         'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
     
    },
  },
  plugins: [],
};
