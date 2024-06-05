/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    darkTheme: false, 
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

