import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base':     '#1e1e1e',
        'bg-surface':  '#252526',
        'bg-elevated': '#2d2d30',
        'border-dim':  '#3e3e42',
        'tx-primary':  '#d4d4d4',
        'tx-muted':    '#858585',
        'tx-comment':  '#6a9955',
        'ac-blue':     '#007acc',
        'ac-teal':     '#4ec9b0',
        'ac-orange':   '#ce9178',
        'ac-yellow':   '#dcdcaa',
        'ac-purple':   '#c586c0',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'blink':   'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [typography],
};
