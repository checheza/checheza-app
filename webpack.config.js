const path = require('path');
const webpackshell = require('webpack-shell-plugin');

module.exports = [{
  mode: 'production',
  entry: {
    config: './config/config.js',
    bundle: [ '@babel/polyfill', 'jquery', 'checheza-core', './src/boot.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'www/dist/'),
    publicPath: 'dist/'
  },
  plugins: [
    new webpackshell({ onBuildEnd: ['npx cap copy'], dev: true })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ { loader: 'style-loader' }, { loader: 'css-loader', options: { url: true, modules: true } }],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|otf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ]
  },
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: [ 'node_modules/', 'www/' ]
  }
}];
