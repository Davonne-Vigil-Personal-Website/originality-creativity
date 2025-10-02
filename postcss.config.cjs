// PostCSS config using the new @tailwindcss/postcss plugin
module.exports = {
  plugins: [require("@tailwindcss/postcss"), require("autoprefixer")],
};
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
