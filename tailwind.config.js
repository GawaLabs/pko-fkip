/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Derived from the official Untad logo (public/img/untad-logo.png).
        // Replace with exact brand-guideline hex values if/when available.
        primary: {
          DEFAULT: '#D6272C',
          dark: '#A81E22',
          light: '#E85558',
        },
        accent: {
          DEFAULT: '#FFC72C',
          dark: '#E0A800',
        },
        ink: {
          DEFAULT: '#16181D',
          muted: '#5B6068',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F3EF',
        },
        border: {
          DEFAULT: '#E4E1DB',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-1': [
          'clamp(2.75rem, 2rem + 3vw, 5rem)',
          { lineHeight: '1.02', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-2': [
          'clamp(2.25rem, 1.75rem + 2vw, 3.75rem)',
          { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' },
        ],
        'heading-lg': [
          'clamp(1.75rem, 1.5rem + 1vw, 2.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'heading-md': ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      spacing: {
        gutter: '1.5rem',
        'section-sm': '3.5rem',
        section: '6rem',
      },
    },
  },
  plugins: [],
};
