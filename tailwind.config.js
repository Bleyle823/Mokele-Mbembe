/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: { enabled: true, content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],},
  theme: {
    extend: {},
  },
  plugins: [],
}

