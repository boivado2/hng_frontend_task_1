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
      "custom-gray-100": " #D0D5DD"
    }

    },


  },
  plugins: [],
}
