/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "lg-top": "0px -2px 5px -2px rgba(0,0,0,0.3)",
      },
      colors: {
        "purple-51": "#5F4ABC",
      },
    },
  },
  plugins: [],
}
