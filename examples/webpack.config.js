const path = require('path')
const webpack = require('webpack')

const base = path.resolve(__dirname, '..')

module.exports = {
  stats: 'minimal',
  mode: 'development',

  entry: {
    'examples-simple': path.resolve(base, './examples/simple/index.js'),
  },

  output: {
    path: path.resolve(base, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  devtool: 'cheap-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.join(base, 'examples'),
    stats: 'minimal',
    hot: true,
    host: '0.0.0.0',
    port: 8888,
  },
}
