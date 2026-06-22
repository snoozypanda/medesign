import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the PDF mockup
        ink: {
          DEFAULT: '#17232D', // primary dark (hero, cards)
          deep: '#16222C',
          900: '#121E28',
          950: '#0F1C26',
        },
        navy: {
          DEFAULT: '#203D53', // form / CTA panels
          light: '#274761',
        },
        accent: {
          DEFAULT: '#66C797', // brand green
          hover: '#7BD6A8',
          soft: '#E7F6EE', // light mint icon chips
        },
        slate: {
          body: '#5B6B78', // body copy on light
          muted: '#8A98A4',
        },
      },
      fontFamily: {
        display: ['NeulisAlt', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(23, 35, 45, 0.10)',
        'card-hover': '0 18px 40px -12px rgba(23, 35, 45, 0.20)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
