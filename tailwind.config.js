module.exports = {
  content: ["./src/**/*.{html,js}", "./examples/**/*.html", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
