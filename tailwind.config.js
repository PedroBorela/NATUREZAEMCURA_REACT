/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Young Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },

      colors: {
        // Paleta da landing v2
        lavanda: {
          bg: '#FBFAFF',
          50: '#F4F0FD',
          75: '#F1ECFD',
          100: '#EEE8FC',
          150: '#ECE6FB',
          200: '#E2D9FA',
          300: '#D9CEF7',
          350: '#C9B8FF',
          400: '#B9A2F3',
          500: '#8C6CE6',
          600: '#6B46C1',
        },
        ink: '#2A1B5E',
        texto: '#4B4568',
        muted: '#6A6488',
        noite: '#1E1542',
        verde: {
          50: '#EEF6E6',
          100: '#E4F2D5',
          200: '#CFE3BC',
          300: '#B5DC8A',
          350: '#9DCD5A',
          400: '#9CCC65',
          500: '#7CB342',
          700: '#2E7D32',
          900: '#1B5E20',
          mata: '#17401D',
          rodape: '#14301A',
          salvia: '#D5E6CC',
          musgo: '#B9CDAE',
        },
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

      boxShadow: {
        glass: 'inset 0 1px 0 rgba(255,255,255,.9), 0 18px 40px -28px rgba(76,52,160,.45)',
        float: '0 20px 40px -18px rgba(42,27,94,.4)',
        photo: '0 40px 80px -40px rgba(42,27,94,.5)',
        card: '0 24px 50px -34px rgba(76,52,160,.55)',
        cta: '0 16px 34px -14px rgba(27,94,32,.7)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(.34,1.56,.64,1)',
        bounce: 'cubic-bezier(.34,1.8,.5,1)',
        expo: 'cubic-bezier(.16,1,.3,1)',
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
