/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/v748-toon-103.jpg')",
        "hero-pattern2": "url('/src/assets/drew-beamer-kUHfMW8awpE-unsplash.jpg')",
        "hero-pattern3": "url('/src/assets/emile-seguin-R9OueKOtGGU-unsplash.jpg')",
        "hero-pattern4": "url('/src/assets/augustine-wong-3Om4DHcaAc0-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};