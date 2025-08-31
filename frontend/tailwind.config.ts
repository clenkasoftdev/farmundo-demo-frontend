import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7ED957', // lime/green
          light: '#D9FFB5',
          dark: '#3A7D1C',
        },
        accent: {
          DEFAULT: '#FFF700', // yellow
          light: '#FFFFA1',
          dark: '#B3A800',
        },
        background: '#F7FFF5',
        foreground: '#171717',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
