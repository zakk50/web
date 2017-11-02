const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test:/\.js$/,
            exclude: /node_modules/,
            use: {loader :'babel-loader'}
          },
          {
            test: /\.html$/,
            use:{ loader :'html-loader' }
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                  'file-loader'
                  ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                  'file-loader'
            ]
          }
      ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
  }
};