/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: '#F5F0E8',
        ink: '#1A1814',
        accent: '#E8572A',
        muted: '#8C8880',
        card: '#EFEBE2',
        border: '#DDD8CE',
      },
    },
  },
  plugins: [],
}
