const path = require("path");

module.exports = {
  // 配置 source-map 可以查找出错的源文件位置
  // devtool: "cheap-module-eval-source-map",
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
        // 导入 babel-loader
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      {
        // 导入url loader
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            limit: 8192,
          },
        },
      },

      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },

      {
        // 导入 file-loader
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "font/",
          },
        },
      },
    ],
  },
};
