/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B3261E',
          'red-dark': '#8E1D16',
          'red-hover': '#9F211A',
          'red-light': '#FCEEEB',
          cream: '#E6E1D2',
          'cream-light': '#F4F0E6',
          bg: '#F9F7F1',
          surface: '#FFFFFF',
          dark: '#1B1A17',
          muted: '#6F6B5F',
          border: '#C9C4B3',
          'border-light': '#E2DDD1',
          blue: '#0000EE',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        display: ['Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['88px', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-xl': ['64px', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['58px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['44px', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-base': ['16px', { lineHeight: '1.6' }],
        'caption': ['13.5px', { lineHeight: '1.5' }],
        'caption-sm': ['13px', { lineHeight: '1.4' }],
      },
      spacing: {
        '2': '2px',
        '30': '30px',
        '34': '34px',
        '40': '40px',
        '108': '108px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(27, 26, 23, 0.05)',
        'subtle': '0 2px 8px -2px rgba(27, 26, 23, 0.07), 0 1px 4px -1px rgba(27, 26, 23, 0.04)',
        'elevated': '0 8px 24px -4px rgba(27, 26, 23, 0.08), 0 2px 6px -1px rgba(27, 26, 23, 0.03)',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
}
