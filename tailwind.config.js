import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      Container:"1280px"
    },
    backgroundImage: {
      'ban':"url(./src/assets/banner.png)"
    },
    fontFamily: {
      'sans': ['Poppins', ' sans-serif',]
    }
  },
  plugins: [],
}