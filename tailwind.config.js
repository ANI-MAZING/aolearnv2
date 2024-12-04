/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulse: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(198, 182, 179, 0.85)',
          },
          '100%': {
            boxShadow: '0 0 0 10px rgba(201, 48, 48, 0)',
          },
        },
        abstractShapeAnimation: {
          '0%': {
            transform: 'scale(1) translateX(0) translateY(0)',
          },
          '50%': {
            transform: 'scale(1.2) translateX(10%) translateY(10%)',
          },
          '100%': {
            transform: 'scale(1) translateX(-10%) translateY(-10%)',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        pulse: 'pulse 2s infinite alternate',
        abstractShapeAnimation: 'abstractShapeAnimation 8s infinite alternate',
      },
    },
  },
  plugins: [],
}