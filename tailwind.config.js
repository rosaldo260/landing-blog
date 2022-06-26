// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      tiny: '.675rem',
      mini: '.75rem',
      xm: '.8rem',
      xs: '.85rem',
      sm: '.9rem',
      md: '.95rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1xl': '1.35rem',
      '2xl': '1.5rem',
      '3xl': '1.85rem',
      '4xl': '2.05rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '6-1/2xl': '2.65rem',
      '6-2/3xl': '2.75rem',
      '7xl': '2.9rem',
      '8xl': '3.1rem',
      '9xl': '3.4rem',
    },
    extend: {
      colors: {
        primary: {
          dark: '#1225c3',
          main: '#3146ec',
          light: '#7684f1',
          background: '#1A1F36',
        },
        background: {
          default: '#fbfbfd',
        },
        link: '#054ada',
        rose: colors.rose,
        lime: colors.lime,
        sky: colors.sky,
        emerald: colors.emerald,
        teal: colors.teal,
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
}
