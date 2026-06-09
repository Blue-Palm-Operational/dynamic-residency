import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0E17',
          card: 'rgba(20, 26, 38, 0.7)',
          cardSolid: '#141A26',
          red: '#E5232F',
          redDark: '#A81620',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#E2E8F0',
          textMuted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to bottom, rgba(10, 14, 23, 0.3) 0%, rgba(10, 14, 23, 0.95) 100%)',
      },
    },
  },
  safelist: ['text-brand-red'],
  plugins: [],
} satisfies Config
