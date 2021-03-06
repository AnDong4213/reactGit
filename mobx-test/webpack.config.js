const path = require('path')

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/09_30.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-decorators-legacy', 'transform-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map'
}

module.exports = config