// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,ts}',
    './src/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-dark": "#1c2127",
        "surface-border": "#283039",
        "text-secondary": "#9dabb9",
      },
    },
  },
  plugins: [],
}