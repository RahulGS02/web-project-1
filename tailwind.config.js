/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F766E', // Deep teal
          light: '#14B8A6',
          dark: '#0D5B54',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold
          light: '#F4D03F',
          dark: '#B8941F',
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'responsive-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'responsive-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'responsive-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'responsive-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'responsive-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'responsive-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'responsive-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'responsive-4xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',
        'responsive-5xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '44px', // Minimum touch target size
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

