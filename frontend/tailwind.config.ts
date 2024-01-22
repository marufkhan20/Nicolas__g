import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#67ebce",
        secondary: "#212121",
        "primary-purple": "#A66BF1",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
