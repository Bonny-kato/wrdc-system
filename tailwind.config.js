module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(---color-text-base)'
        }
      },
      colors:{
        skin:{
          secondary: 'var(---color-secondary)',
        },
        primary: "#1f2125",
        secondary: "#bcbcbc",
        accent: "#26282a",
        accent2: "#323435",
        accent3: "rgb(66, 65, 77)"
      },

      backgroundColor:{
        skin:{
          primary: 'var(---color-primary)',
          secondary: 'var(---color-secondary)',
          accent: 'var(---color-accent)'
        }
      },
      boxShadow:{
          base: 'var(---color-shadow-base)'
      }


    },
  },
  plugins: [],
}

