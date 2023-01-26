/* eslint-disable */

const path = require('path');
const StaticSiteWebpackPlugin = require('static-site-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

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

const environmentPlugin = new EnvironmentPlugin({
  NODE_ENV: 'development',
  ANALYTICS_URL: null,
  ANALYTICS_SITE_ID: null,
});

const miniCssExtractPlugin = new MiniCssExtractPlugin();

const staticSitePlugin = new StaticSiteWebpackPlugin({
  __filename,
  entry: './src/index.ssr.tsx',
  paths: ['/', '/fr', '/en'],
});

const copyPlugin = new CopyWebpackPlugin({
  patterns: [{ from: 'static' }],
});

const htmlPlugin = new HtmlWebpackPlugin();

const reactRefreshPlugin = new ReactRefreshWebpackPlugin();

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  // mode: 'development',
  devtool: 'source-map',

  entry: './src/index.tsx',

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.PUBLIC_PATH,
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [esbuildLoader, extractStylesLoader, svgLoader, fileLoader],
  },

  plugins: [environmentPlugin, miniCssExtractPlugin, staticSitePlugin, copyPlugin],
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

    plugins: [environmentPlugin, htmlPlugin, reactRefreshPlugin, copyPlugin],

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
