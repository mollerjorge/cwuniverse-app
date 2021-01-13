const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      lato: ['Lato', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        lg: '1500px'
      },
      padding: {
        DEFAULT: '90px'
      }
    },
    extend: {
      spacing: {
        120: '30rem'
      },
      colors: {
        blue: {
          light: '#2463AF',
          DEFAULT: '#194378',
          dark: '#143D69'
        },
        teal: {
          DEFAULT: '#3cc3af'
        },
        red: {
          DEFAULT: '#e95565'
        },
        yellow: {
          DEFAULT: '#febf00'
        },
        purple: {
          DEFAULT: '#8a67eb'
        }
      },
      spacing: {
        0.5: '2px'
      },
      fontSize: {
        big: '42px'
      },
      borderWidth: {
        1: '1px'
      },
      maxWidth: {
        '7xl': '1320px'
      }
    }
  },
  variants: {},
  plugins: []
}
