import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#004d00',
        'main': '#0bb80b',
        'main-light': '#a3f1a3',
        'support-dark': '#3150ab',
        'support': '#4169e1',
        'accent-dark': '#c4a704',
        'accent': '#ffd700',
        'dark': '#111',
        'light': '#fefffe',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
      },
    },
  },
  plugins: [],
} satisfies Config
