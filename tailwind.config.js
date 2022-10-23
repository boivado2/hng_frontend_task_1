/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
            
      'custom-gray': "#EAECF0",
      "custom-text-black": '#101828'
    }

    },


  },
  plugins: [],
}
