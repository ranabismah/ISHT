import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Blue
        secondary: '#ffffff', // White
      },
    },
  },
  plugins: [],
};

export default config;

