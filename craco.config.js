const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@store": path.resolve(__dirname, "src/core/store"),
    },
  },
};