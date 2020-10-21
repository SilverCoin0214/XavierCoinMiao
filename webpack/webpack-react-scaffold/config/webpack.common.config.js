const path = require("path");

module.exports = {
  // 入口
  entry: {
    index: "./src/index.js",
    framework: ["react", "react-dom"],
  },

  // 出口
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },

  // 导入loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
