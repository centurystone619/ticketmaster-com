/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
    "./public/index.html", // Include the main HTML file in the public directory
  ],
  theme: {
    extend: {
      fontFamily: {
        averta: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
      },
      screens: {
        sm: "375px",
        lg:'1440px'
      },
      colors: {
        // 'azure-deepblue': '#064cdf',
        "azure-deepblue": "#004ee7",

        "azure-lightblue": "#004ee7",
        // "azure-lightblue": "#064cdf",
        "azure-white": "#E5E8EC",
        "azure-black": "#051441",
        "nav-color": "black",
      },
    },
  },
  plugins: [],
};