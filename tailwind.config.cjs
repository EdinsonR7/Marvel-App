/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phonexl': '420px',
      // => @media (min-width: 420px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'tabletxl': '786px',
      // => @media (min-width: 786px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}