/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3932',
        secondary: '#008248',
        lightGreen: '#d4e9e2',
        lightWhite: '#f1f8f6',
        ligthNatural: '#f3f1e7',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        custom: ['Moderustic', 'sans-serif'], // Usando una fuente local o personalizada
        custom2: ['Sono', 'monospace'], // Usando una fuente local o personalizada
      },
    },
  },
  plugins: [],
}