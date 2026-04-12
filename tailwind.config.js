/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5EACE',
          50: '#fdfcf9',
          100: '#fbf9f2',
          200: '#f5eace',
          300: '#eedba9',
          400: '#e6cc84',
          500: '#dfbd5f',
          600: '#d1a642',
        },
        secondary: {
          DEFAULT: '#46828A',
          50: '#f2f7f8',
          100: '#e0eff1',
          200: '#c3dfe3',
          300: '#9bc6cc',
          400: '#6ea8b0',
          500: '#46828A',
          600: '#3a6c74',
          700: '#31585f',
          800: '#2a4a50',
          900: '#253e43',
        }
      }
    },
  },
  plugins: [],
}
