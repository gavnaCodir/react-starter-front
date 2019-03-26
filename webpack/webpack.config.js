const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../../back/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader'
            }
          },
          {
            test:/\.s?css$/,
            use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: { 
              name: 'Images/[name].[ext]'
            }
          },
          {
            test: /\.(ttf)$/,
            loader: 'file-loader',
            options: {
              name: 'Fonts/[name].[ext]'
            }
          }
      ]
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, '../../back/dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename:'styles.css' })
    ],
    mode: 'production'
};

module.exports = (env,options) => {
  let production = options.mode === 'production';
  conf.devtool = production ? 'source-map' : 'eval-sourcemap';
  return conf
}
