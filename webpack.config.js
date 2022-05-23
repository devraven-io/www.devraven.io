const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'js/bundle.js'
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
    port: 8085,
    open:true,
    hot:true,
    liveReload:true,
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ]
};