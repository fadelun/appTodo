module.exports = {
  purge: ["index.html", "script.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        check: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
      colors: {
        primary: {
          100: "hsl(220, 98%, 61%)",
        },
        lightTheme: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(236, 33%, 92%)",
          300: "hsl(233, 11%, 84%)",
          400: "hsl(236, 9%, 61%)",
          500: "hsl(235, 19%, 35%)",
        },
        darkTheme: {
          100: "hsl(235, 21%, 11%)",
          200: "hsl(235, 24%, 19%)",
          300: "hsl(234, 39%, 85%)",
          400: "hsl(236, 33%, 92%)",
          500: "hsl(234, 11%, 52%)",
          600: " hsl(233, 14%, 35%)",
          700: " hsl(237, 14%, 26%)",
        },
      },

      fontFamily: {
        body: ['"Josefin Sans"'],
      },
      letterSpacing: {
        widessst: ".4em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
