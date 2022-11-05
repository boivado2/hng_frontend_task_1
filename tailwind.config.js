/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
            
      'custom-gray': "#EAECF0",
      "custom-text-black": '#101828',
        "custom-gray-100": " #D0D5DD",
        "custom-blue-100": "#1570EF",
        "custom-blue-200": "#B2DDFF",
      
    },

      fontFamily: {
        "custom-open-sans": "'Open Sans', sans-serif;"
      }

    },


  },
  plugins: [],
}
