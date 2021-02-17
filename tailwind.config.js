const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
      screens: {
        lg: '1252px',
      },
    },
    extend: {
      spacing: {
        120: '30rem',
        0.5: '2px',
      },
      colors: {
        blue: {
          light: '#2463AF',
          DEFAULT: '#194378',
          dark: '#143D69',

          darkest: '#101527',
          link: '#153960',
        },
        teal: {
          DEFAULT: '#3cc3af',
        },
        red: {
          DEFAULT: '#e95565',
        },
        yellow: {
          DEFAULT: '#febf00',
        },
        purple: {
          DEFAULT: '#8a67eb',
        },
        black: {
          DEFAULT: '#333333',
        },
        gray: {
          DEFAULT: '#444444',
        },
      },
      boxShadow: {
        '3xl': '0 20px 38px rgba(0, 0, 0, 0.16)',
      },
      fontSize: {
        15: '15px',
        26: '26px',
        big: '42px',
        '6xl': ['4rem', '4.6rem'],
        39: '39px',
        46: '46px',
        60: '60px',
      },
      borderWidth: {
        1: '1px',
      },
      maxWidth: {
        '7xl': '1320px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}
