/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white-default': '#FEFEFE',
        'yellow-default': '#FFCC81',
        'dark-default': '#364655',
      },
      height: {
        '90p': '90%',
      },
      zIndex: {
        'to-front': '999',
      },
      // fontFamily: ['League Spartan', 'sans-serif']
    },
  },
  plugins: [],
}

