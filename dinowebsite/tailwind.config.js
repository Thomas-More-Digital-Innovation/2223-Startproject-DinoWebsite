/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dinoblack: "#191919",
        dinogrey: "#e9e9e9",
        dinocream: "#f6f2e7",
        tmblue: "#009cab",
        tmorange: "#f04c25",
        tmgrey: "#575757",
      },
      rotate: {
        9: "9deg",
      },
      fontFamily: {
        sans: ["Roboto", defaultTheme.fontFamily.sans],
        heading: ["Amaranth", defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: "0px 0px 11px 5px rgba(25,25,25,0.5)",
      },
      keyframes: {
        wave: {
          "0%, 100%": { opacity: "20%" },
          "50%": { opacity: "100" },
        },
        wave2: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounce: {
          "0%, 100%": {transform: "translateY(-5%)"},
          "50%": {transform: "translateY(0)"}
        },
        bounce2: {
          "0%, 100%": {transform: "translateY(-2%)"},
          "50%": {transform: "translateY(0)"}
        },
        bounce3: {
          "0%, 100%": {transform: "translateY(-4%)"},
          "50%": {transform: "translateY(0)"}
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "opacity-wave4": "wave2 4s ease-in",
        "opacity-wave": "wave 1s ease-in-out infinite",
        "opacity-wave2": "wave 2s ease-in-out infinite",
        "opacity-wave3": "wave 3s ease-in-out infinite",
        'spin-slow': 'spin 4s linear infinite',
      },
      screens: {
        '3xl': '2565px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
