/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient' : 'linear-gradient(114deg, #000 1.7%, #00344D 23.54%, #014567 34.6%, #006A9D 51.84%, #004667 69.72%, #002D42 82.11%, #000 112.66%);'
      },
      boxShadow : {
        'sh' : '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors : {
        'aq1' : '#002537','aq2' : '#00344D'
      },
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
        },
      },
      animation: {
        fadein: 'fade-in 1s ease-in-out 0.45s 1',
      }
    },
  },
  plugins: [],
}