module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width:{
        "ww":"300px",
        "bigScreenclock":"500px",

        "www":"500px",
        "bigScreenZodiac":"800px"

      },
      height:{
        "hh":"300px",
        "bigScreenclock":"500px",

        "hhh":"500px",
        "bigScreenZodiac":"800px"
      },
      fontFamily:{
        poppins:"Poppins",
        tapestry:"Tapestry",
        cinzel:"Cinzel"
      }
    },
  },
  plugins: [],
}
