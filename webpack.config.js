const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    client: "./src/client.js",
    bundle: "./src/bundle.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "[name].js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./assets",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                auto: true,
                exportGlobals: true,
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "style1.css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
};
