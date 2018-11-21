const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const config = require('./../src/config.json');

module.exports = merge(common, {
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new Dotenv({
      path: './.dev.env'
    }),
    new HtmlWebpackPlugin({
      title: config.meta_defaults.title,
      description: config.meta_defaults.description,
      bgcolor: config.meta_defaults.bgcolor,
      site_url: config.meta_defaults.site_url,
      template: './templates/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
