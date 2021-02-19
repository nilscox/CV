const fs = require('fs');
const path = require('path');
const { DefinePlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
  NODE_ENV = 'development',
  WDS_HOST = '127.0.0.1',
  WDS_PORT = '8000',
  DATA = './data.json',
} = process.env;

const prod = NODE_ENV === 'production';
const dev = NODE_ENV === 'development';

if (!fs.existsSync(DATA)) {
  throw new Error('missing data file: ' + DATA);
}

const data = fs.readFileSync(DATA).toString();

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[chunkhash].js',
  },
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
        },
      },
      {
        test: /\.(sc|c)ss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: dev,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    dev && new ReactRefreshWebpackPlugin(),
    new ESBuildPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: dev,
      formatter: {
        type: 'codeframe',
        options: {
          linesAbove: 5,
          linesBelow: 5,
          highlightCode: true,
        },
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/favicon.ico", to: "dist" },
      ],
    }),
    new HtmlWebpackPlugin({ template: 'src/index.ejs' }),
    new DefinePlugin({ DATA: data }),
  ].filter(Boolean),
  devServer: {
    host: WDS_HOST,
    port: WDS_PORT,
    contentBase: './public',
    hot: true,
  },
};
