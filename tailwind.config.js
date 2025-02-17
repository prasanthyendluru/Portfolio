module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Use the 'class' strategy for dark mode control
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        'primary-light': '#FFB6C1',
        'primary-dark': '#FF6347',
      }, 
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
