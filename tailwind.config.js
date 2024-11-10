/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        lady: 'url("")',
      },
    },
  },
  plugins: [],
}

