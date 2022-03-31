module.exports = {
  mode: 'jit',

  content: [
    "./dist/**/*.{html,js}"
  ],

  darkMode: false, // or 'media' or 'class'

  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans'],
    },

    extend: {
      colors: {
        'primary': '#113060',
        'secondary': '#EE342B',
        'tertiary': '#D9E3FF',
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '12rem', //6rem
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
