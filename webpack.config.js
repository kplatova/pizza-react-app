const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('./package.json');

module.exports = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map',
  entry: {
    bundle: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-optional-chaining',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: name,
      templateContent:
        `<!DOCTYPE html><html lang="en"><head><title>${name}</title></head><body><div id="app"></div></body></html>`,
    }),
  ],
});
