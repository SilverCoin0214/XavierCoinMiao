// 用来分割各种webpack的工具
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");

// 将HTML能直接插入和生成到dist中的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 清除生成后多余的JS文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 压缩JS文件插件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// 打包出独立的CSS文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 压缩 CSS打包文件 的插件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash:8].bundle.js",
  },

  module: {
    rules: [
      {
        // 加载css loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        // 加载less loader
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        // 加载sass loader
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css",
    }),
  ],

  // 将公共代码和自己编写的代码分离出来的配置
  optimization: {
    minimizer: [
      // new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],

    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          test: "framework",
          name: "framework",
          enforce: true,
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
});
