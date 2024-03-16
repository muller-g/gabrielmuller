import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': {'max': '1299px'},
        'md': {'max': '900px'},
        // => @media (max-width: 1279px) { ... }
      },
      maxWidth: {
        '1300': '1300px',
      },
      colors: {
        "primary": "#111418",
        "secondary": "#AD00FF"
      },
    },
  },
  plugins: [],
};
export default config;
