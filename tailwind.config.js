/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#faf7f2', 100: '#f3ece1', 200: '#e6d8c3', 300: '#d4bea0',
          400: '#bf9d76', 500: '#a87d52', 600: '#8a6440', 700: '#6e4f33',
          800: '#523a27', 900: '#38271a',
        },
        moss: {
          50: '#f4f6f1', 100: '#e6ebde', 200: '#ccd6bd', 300: '#a8bb8e',
          400: '#84a063', 500: '#68854a', 600: '#506a39', 700: '#3d522c',
          800: '#2f3f23', 900: '#1f2a17',
        },
        wine: {
          50: '#fbf3f3', 100: '#f5e2e2', 200: '#e9c0c0', 300: '#d89595',
          400: '#c2666b', 500: '#a8454f', 600: '#8c3540', 700: '#6f2a34',
          800: '#52232b', 900: '#371a1f',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
