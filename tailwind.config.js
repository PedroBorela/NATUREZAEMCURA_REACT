/** @type {import('tailwindcss').Config} */
export default {
  // Tema claro fixo — variantes dark: só se ativadas via classe (nunca pelo SO)
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Literata', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },

      colors: {
        // Superfícies "Forest Grey" (DESIGN.md — Serene Equilibrium)
        surface: {
          DEFAULT: '#f8fbf0',
          dim: '#d8dcd1',
          lowest: '#ffffff',
          low: '#f2f6e9',
          container: '#ecf0e3',
          high: '#e6eade',
          highest: '#e1e5d8',
          inverse: '#2d3229',
        },
        ink: {
          DEFAULT: '#191d16',
          soft: '#434a39',
          muted: '#737a63',
        },
        outline: {
          DEFAULT: '#737a63',
          variant: '#c3c9b4',
        },
        primary: {
          DEFAULT: '#3c6a00',
          dark: '#2c5000',
          container: '#9dcd5a',
          onContainer: '#0f2000',
          fixed: '#bcf074',
        },
        secondary: {
          DEFAULT: '#7835c2',
          dark: '#6020a8',
          container: '#ac62ea',
          fixed: '#f2dcff',
        },
        tertiary: {
          DEFAULT: '#3d43c8',
          container: '#8388f1',
          fixed: '#dfe0ff',
        },

        // Paleta legada (mantida para componentes existentes)
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
        ambient: '0 8px 30px -6px rgba(60, 106, 0, 0.10)',
        'ambient-lg': '0 18px 50px -12px rgba(60, 106, 0, 0.16)',
        lilac: '0 14px 40px -10px rgba(120, 53, 194, 0.18)',
      },

      animation: {
        'star-movement-bottom': 'star-movement-bottom 6s linear infinite alternate',
        'star-movement-top': 'star-movement-top 6s linear infinite alternate',
        shine: 'shine 5s linear infinite',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slow 13s ease-in-out infinite reverse',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
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
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
