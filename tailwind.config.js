
  
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    fontFamily:{
      montserrat: ['Montserrat, sans-serif'],
      rammetto:['Rammetto One, cursive']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/hero_bg.webp')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}