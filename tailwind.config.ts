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
        primaryblue: 'hsl(238 29% 16%)',
        primaryred: 'hsl(14 88% 65%)',
        bgviolet: 'hsl(273 75% 66%)',
        bgblue: 'hsl(240 73% 65%)',
        textverydark: 'hsl(237 12% 33%)',
        textdark: 'hsl(240 6% 50%)',
        divider: 'hsl(240 5% 91%)'
      },
    },
  },
  plugins: [],
}
export default config
