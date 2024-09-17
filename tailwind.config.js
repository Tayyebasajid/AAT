/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        Blue: '#227DB6',
        Purple: '#855791',
        Pink: '#EA2063',
        lightblue: '#2C9FFD',
        darkblue: '#01579D',
        sky: '#F3FDFF',
        lblue: '#32C4F0',
        Gray:'#F1F1F1',
        dgray:'#282828',
      },
      fontFamily: {
        playfair: 'Playfair Display',
      },
      screens: {
        'md':'1024px',
      }
      
    },
  },
  plugins: [],
}

