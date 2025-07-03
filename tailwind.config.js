/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },

      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          300: '#5724FF',
        },
        rosa: {
          DEFAULT: '#ac62ea',
          100: '#f3d9fd',
          200: '#dba6fa',
          300: '#ac62ea',
          400: '#893acc',
          500: '#651ea3',
        },
        orquideaLilas: {
          DEFAULT: '#8388f1',
          100: '#e0e2fe',
          200: '#bec2fb',
          300: '#8388f1',
          400: '#5a60ce',
          500: '#3b3ea1',
        },
        verdeEsmeralda: {
          DEFAULT: '#9dcd5a',
          100: '#e6f6d5',
          200: '#c3e6a1',
          300: '#9dcd5a',
          400: '#79a933',
          500: '#567d1e',
        },
        azulArpoador: {
          DEFAULT: '#4191cf',
          100: '#d4edff',
          200: '#96cbf4',
          300: '#4191cf',
          400: '#2d6ea7',
          500: '#1b4c7d',
        },
      },

      animation: {
        'star-movement-bottom': 'star-movement-bottom 6s linear infinite alternate',
        'star-movement-top': 'star-movement-top 6s linear infinite alternate',
        shine: 'shine 5s linear infinite',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },

      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  plugins: [],
}
