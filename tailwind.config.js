/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-dark': '#181818',
        'netflix-gray': '#808080',
      },
      fontFamily: {
        sans: ['Netflix Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 