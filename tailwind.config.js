/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {colors:{
      "padauk":"#FFA500",
    }},
    fontFamily: {
      "madimi":["Madimi One", "serif"],
    },
    
  },
  // plugins: [],
  plugins: [
    require('flowbite/plugin')
]

}
