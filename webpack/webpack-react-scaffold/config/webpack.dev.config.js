const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "js/[name].[hash:8].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  // 配置开发测试时服务器的一些属性, 端口9000, 启动热更新, 自动打开
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    open: true,
    port: 9000,
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      hash: false,
    }),

    // webpack热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ],
});
