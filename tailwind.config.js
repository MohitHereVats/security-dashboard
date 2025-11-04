/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': {
          DEFAULT: '#6B46C1', // Primary button and chart color
          light: '#F5F3FF',   // Light tab background
          dark: '#5B34A2',    // Hover
        },
        'brand-gray': {
          100: '#F7FAFC', // App background
          200: '#EDF2F7', // Border
          400: '#A0AEC0', // Secondary text
          700: '#4A5568', // Primary text
          900: '#1A202C', // Headings
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
}