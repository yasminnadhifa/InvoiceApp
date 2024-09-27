/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       sans: ['Poppins', ...defaultTheme.fontFamily.sans],
     },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'silver': '#F5F7FA',
      'primary': {
          100: '#C8E6C9', 
          200: '#A5D6A7', 
          300: '#81C784', 
          400: '#66BB69', 
          500: '#4CAF4F', 
        },
      'black': '#263238',
      'grey':'#4D4D4D'
    },
    },
  },
  plugins: [],
}

