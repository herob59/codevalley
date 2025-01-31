import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
   
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    
    },
    colors: {
     brightRed : 'hsl(12, 88%, 59%)',
     brightRedLight: 'hsl(12, 88%, 69%)',
     brightRedSupLight: 'hsl(12, 88%, 95%)',
     darkBlue: '(228, 39%, 23%)',
     darkGrayishBlue: 'hsl(227, 12%, 61%)',
     veryDarkBlue: '(223, 12%, 13%)',
     veryPalekRed: '(13, 100%, 96%)',
     veryLightGray: '(0, 0%, 98%)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
     

      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
 