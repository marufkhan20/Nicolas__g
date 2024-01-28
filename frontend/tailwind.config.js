module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#67ebce",
        "primary-light": "#1E293B",
        secondary: "#fff",
        // secondary: "#212121",
        "primary-purple": "#A66BF1",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
