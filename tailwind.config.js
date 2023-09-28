/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '1023px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'lg': { 'min': '1024px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      colors: {
        bgwhite: "hsl(0, 0%, 98%)",
        green: "#38B722",
        likeb: "#222123",
        textcolor: "rgba(255, 255, 255, 0.50);"

      }
    },
  },
  plugins: [],
}

