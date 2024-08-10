/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smmid': '700px', // Custom breakpoint between sm and md
      },
    },
  },
  plugins: [],
}



