/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#222222',
    },
    fontFamily: {
      'palyfair-display': ['Playfair Display', 'serif'],
      'raleway': ['Raleway', 'sans-serif'],
    },
    fontSize: {
      h1: '5.6525rem',
      h2: '3.9975rem',
      h3: '2.8269rem',
      h4: '1.9994rem',
      h5: '1.4138rem',
      h6: '1rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
    },
    backgroundImage: {
      'hero-background-image': "url('./src/assets/images/hero-background-image.webp')",
    },
    extend: {},
  },
  plugins: [],
};
