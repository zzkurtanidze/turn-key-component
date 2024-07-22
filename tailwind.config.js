/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "18px",
        "6xl": "64px",
      },
      scale: {
        flip: "-1",
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      transitionProperty: {
        "z-index": "z-index",
      },
      transitionTimingFunction: {
        "step-start": "step-start",
      },
      width: {
        "280px": "280px",
        "380px": "380px",
      },
      fontFamily: {
        circular: ["Circular", "sans-serif"],
        "sf-pro": ["SF Pro Display", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        purple: "#9D71FD",
        darkPurple: "#1A0745",
        lightPurple: "#5F517D",
        whitePurple: "#F2EFFE",
        gray: "#1A07451A",
        darkGray: "#A39CB5",
        tailInactive: "#DED7FD",
      },
    },
  },
  plugins: [],
};
