import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'ventry-dark': '#1A2526',
        'ventry-gold': '#D4AF37',
        'sidebar-bg': 'hsl(240, 5%, 98%)', // Light mode sidebar background
        'sidebar-bg-hover': 'hsl(240, 4%, 90%)', // Light mode hover state
        'sidebar-item-text': 'hsl(240, 10%, 10%)', // Light mode item text
        'sidebar-item-text-hover': 'hsl(240, 5%, 3%)', // Light mode item hover text
        'sidebar-border': 'hsl(240, 5%, 80%)', // Light mode border
        'sidebar-active-bg': 'hsl(240, 8%, 85%)', // Active item background in light mode
        'sidebar-footer-bg': 'hsl(240, 5%, 98%)', // Footer background in light mode

        // Dark Mode colors
        'sidebar-bg-dark': 'hsl(240, 15%, 12%)', // Dark mode sidebar background
        'sidebar-bg-hover-dark': 'hsl(240, 20%, 18%)', // Dark mode hover state
        'sidebar-item-text-dark': 'hsl(0, 0%, 95%)', // Dark mode item text
        'sidebar-item-text-hover-dark': 'hsl(0, 0%, 100%)', // Dark mode item hover text
        'sidebar-border-dark': 'hsl(240, 5%, 20%)', // Dark mode border
        'sidebar-active-bg-dark': 'hsl(240, 20%, 30%)', // Active item background in dark mode
        'sidebar-footer-bg-dark': 'hsl(240, 15%, 8%)',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
