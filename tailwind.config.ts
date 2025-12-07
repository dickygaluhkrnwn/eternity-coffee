import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Coffee Bean (Cokelat Tua/Gelap - Elegan)
        coffee: {
          50: '#f7f5f3',
          100: '#efeae6',
          200: '#e0d6ce',
          300: '#cabbad',
          400: '#ac907d',
          500: '#927360',
          600: '#75594a',
          700: '#61483e',
          800: '#523e37',
          900: '#4a3b32', // Warna Utama Brand
          950: '#2c211b',
        },
        // Secondary: Cream/Latte (Putih Gading - Reading Friendly)
        cream: {
          50: '#fcfbf9',
          100: '#f6f3ed',
          200: '#ede6d8',
          300: '#e1d2bc',
          400: '#d2b99a',
          500: '#c59f7b',
          600: '#b88963',
          700: '#9a6e4f',
          800: '#7f5a43',
          900: '#674a39',
          950: '#37261d',
        },
        // Accent: Sage Green (Nuansa Organic/Cozy)
        sage: {
          50: '#f4f7f2',
          100: '#e6efe2',
          200: '#cde2c4',
          300: '#a7cc98',
          400: '#8a9a5b', // Warna Aksen Utama
          500: '#648745',
          600: '#4d6d34',
          700: '#3e572b',
          800: '#334626',
          900: '#2b3b22',
          950: '#162110',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(to bottom right, #fcfbf9, #ede6d8)',
        'dark-overlay': 'linear-gradient(to bottom, rgba(44, 33, 27, 0.4), rgba(44, 33, 27, 0.8))',
      }
    },
  },
  plugins: [],
};
export default config;