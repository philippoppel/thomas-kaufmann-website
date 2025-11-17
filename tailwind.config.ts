import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-beige': '#f3ede4',
        'primary-terracotta': '#b7745f',
        'accent-olive': '#4f6656',
        'dark-brown': '#2b2622',
        'light-cream': '#fdfbf7',
        'warm-gray': '#dcd4c7',
        'text-dark': '#2a2622',
        'text-medium': '#5d554d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
