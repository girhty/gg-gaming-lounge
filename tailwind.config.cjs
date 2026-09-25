/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070711',
        panel: '#111124',
        electric: '#a8ff35',
        violet: '#8b5cf6',
        cyan: '#22d3ee'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 50px rgba(168,255,53,.16)',
        violet: '0 0 45px rgba(139,92,246,.22)'
      }
    }
  },
  plugins: []
};