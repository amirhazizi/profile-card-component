/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        darkcyan: "hsl(185, 75%, 39%)",
        verydarkdesaturatedblue: "hsl(229, 23%, 23%)",
        darkgrayishblue: "hsl(227, 10%, 46%)",
        darkgray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
