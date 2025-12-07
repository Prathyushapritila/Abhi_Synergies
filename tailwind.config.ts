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
        brandOrange: '#D87A2A',
        brandGray: '#6F7072',
        backgroundWarm: '#F9F7F3',
        surface: '#FFFFFF',
        textMain: '#191919',
        brandBlue: '#083B66',
        brandYellow: '#F3D94B',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
      },
    },
  },
  plugins: [],
}
export default config

