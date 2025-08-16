/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        recipe: {
          light: '#E8F5EC',
          mid: '#7ACB8A',
          dark: '#1F7A3F',
        }
      }
    },
  },
  plugins: [],
}
