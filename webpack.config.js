const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: isProduction ? '/PlasticaWorking/' : '/',
      clean: true,
    },
    devServer: {
      port: 3001,
      hot: true,
      historyApiFallback: true,
      compress: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
        } : false,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};
