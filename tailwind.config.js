/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e', // Dark blue matching logo
        },
        accent: {
          yellow: '#ffd700', // Bright yellow matching logo
          'yellow-dark': '#ffcc00',
          navy: '#1a237e', // Dark navy blue from logo
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)',
        'card-hover': '0 12px 32px rgba(16, 24, 40, 0.10), 0 4px 8px rgba(16, 24, 40, 0.06)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        lcBlink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        lcRise: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lcPop: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '60%': { opacity: '1', transform: 'scale(1.12)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        lcPulse: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.82)' },
        },
        lcDash: {
          from: { 'stroke-dashoffset': '140' },
          to: { 'stroke-dashoffset': '0' },
        },
        lcBar: {
          '0%': { transform: 'scaleY(0.15)' },
          '100%': { transform: 'scaleY(1)' },
        },
        lcRocket: {
          '0%': { transform: 'translateY(6px)', opacity: '0.5' },
          '55%': { transform: 'translateY(-3px)', opacity: '1' },
          '100%': { transform: 'translateY(-16px)', opacity: '0' },
        },
        lcDrift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(16px,12px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        lcScan: {
          '0%': { transform: 'translateY(-120%)' },
          '100%': { transform: 'translateY(520%)' },
        },
        lcSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'lc-blink': 'lcBlink 1s step-end infinite',
        'lc-rise': 'lcRise 0.5s ease-out both',
        'lc-pop': 'lcPop 0.45s ease-out both',
        'lc-pulse': 'lcPulse 1.6s ease-in-out infinite',
        'lc-dash': 'lcDash 1.8s ease-in-out infinite alternate',
        'lc-bar': 'lcBar 1.1s ease-in-out infinite alternate',
        'lc-rocket': 'lcRocket 1.8s ease-in infinite',
        'lc-drift': 'lcDrift 3.2s ease-in-out infinite',
        'lc-scan': 'lcScan 2.2s linear infinite',
        'lc-sweep': 'lcSweep 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

