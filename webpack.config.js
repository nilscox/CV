/* eslint-disable */

const path = require('path');
const StaticSiteWebpackPlugin = require('static-site-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { NODE_ENV = 'development', HOST = '0.0.0.0', PORT = '8000' } = process.env;

const esbuildLoader = {
  test: /\.[jt]sx?$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
    target: 'es6',
  },
};

const extractStylesLoader = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
};

const stylesLoader = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const svgLoader = {
  test: /\.svg$/,
  loader: '@svgr/webpack',
};

const fileLoader = {
  test: /\.jpg$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
  },
};

const config = {
  mode: 'production',
  // mode: 'development',
  devtool: 'source-map',

  entry: './src/index.tsx',

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/~nils/cv-next/',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [esbuildLoader, extractStylesLoader, svgLoader, fileLoader],
  },

  plugins: [
    new MiniCssExtractPlugin(),

    new StaticSiteWebpackPlugin({
      __filename,
      entry: './src/index.ssr.tsx',
      paths: ['/', '/fr', '/en'],
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
};

module.exports = config;

if (NODE_ENV === 'development') {
  /** @type {import('webpack').Configuration} */
  const devConfig = {
    ...config,
    mode: 'development',

    entry: './src/index.dev.tsx',

    module: {
      rules: [esbuildLoader, stylesLoader, svgLoader, fileLoader],
    },

    plugins: [
      new HtmlWebpackPlugin(),

      new ReactRefreshWebpackPlugin(),

      new CopyWebpackPlugin({
        patterns: [{ from: 'static' }],
      }),
    ],

    devServer: {
      host: HOST,
      port: Number(PORT),
      hot: true,
      historyApiFallback: {
        rewrites: [{ from: /\.html$/, to: '/index.html' }],
      },
    },
  };

  module.exports = devConfig;
}
