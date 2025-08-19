import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
        display: ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
        dot: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
        },
      },
      fontSize: {
        // Nothing's typography scale - monospace inspired
        'display-large': ['clamp(48px, 6.25vw, 96px)', { lineHeight: '1.0', letterSpacing: '0.05em', textTransform: 'uppercase' }],
        'display': ['clamp(32px, 4.5vw, 64px)', { lineHeight: '1.1', letterSpacing: '0.02em', textTransform: 'uppercase' }],
        'title-large': ['clamp(28px, 3.5vw, 40px)', { lineHeight: '1.2', letterSpacing: '0.01em', textTransform: 'uppercase' }],
        'title-1': ['clamp(22px, 2.75vw, 32px)', { lineHeight: '1.3', letterSpacing: '0.015em' }],
        'title-2': ['clamp(19px, 2.25vw, 24px)', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'title-3': ['clamp(17px, 1.75vw, 20px)', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'headline': ['clamp(16px, 1.5vw, 17px)', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'body': ['clamp(16px, 1.25vw, 17px)', { lineHeight: '1.6', letterSpacing: '0.005em' }],
        'body-large': ['clamp(17px, 1.5vw, 19px)', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'callout': ['clamp(15px, 1.125vw, 16px)', { lineHeight: '1.5', letterSpacing: '0.015em' }],
        'subheadline': ['clamp(14px, 1vw, 15px)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'footnote': ['clamp(12px, 0.875vw, 13px)', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'caption-1': ['clamp(11px, 0.75vw, 12px)', { lineHeight: '1.5', letterSpacing: '0.03em' }],
        'caption-2': ['clamp(10px, 0.625vw, 11px)', { lineHeight: '1.5', letterSpacing: '0.035em' }],
      },
      fontWeight: {
        ultralight: '100',
        thin: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        heavy: '800',
        black: '900',
      },
      letterSpacing: {
        'nothing-tight': '0.005em',
        'nothing-normal': '0.01em',
        'nothing-wide': '0.05em',
        'nothing-extra-wide': '0.1em',
        'nothing-dot': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
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
      },
      transitionTimingFunction: {
        'nothing': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'nothing-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
} satisfies Config
