/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        feecba: '#feecba',
        ffbb00: '#ffbb00',

      },
      fontFamily: {
        blackjack: ["Blackjack", "cursive"],
      },
    },
  },
  plugins: [],
}