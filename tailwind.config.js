module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      textColor:{
        skin:{
          base:'var(---color-text-base)'
        }
      },
      colors:{
        skin:{
          secondary: 'var(---color-secondary)',
          "table-header": 'var(---color-table-header)'
        },
        primary: "#1f2125",
        secondary: "#bcbcbc",
        accent: "var(---color-accent)",
        accent2: "#323435",
        accent4: "#349eff",
        accent5: "var(---color-border)",
        "avatar-fill": "var(---color-avatar-fill)",
        "icon-fill": "var(---color-icon-fill)",
        accent3: "var(---color-accent3)",
        "search-fill": "var(---color-search-fill)"
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
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

