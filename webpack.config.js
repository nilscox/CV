/* eslint-disable */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { NODE_ENV = 'development', HOST = '0.0.0.0', PORT = '8000' } = process.env;

const devtool = 'source-map';
const extensions = ['.js', '.ts', '.tsx'];

const esbuildLoader = {
  test: /\.[jt]sx?$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
    target: 'es6',
  },
};

const stylesLoader = {
  test: /\.(sc|c)ss/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};

const svgLoader = {
  test: /\.svg$/,
  loader: '@svgr/webpack',
};

const fileLoader = {
  test: /\.(woff|woff2|jpg)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
  },
};

const rules = [esbuildLoader, stylesLoader, svgLoader, fileLoader];

if (NODE_ENV === 'production') {
  module.exports = {
    mode: 'production',
    devtool,

    resolve: { extensions },
    module: { rules },

    entry: './src/index.ssr.tsx',

    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      libraryTarget: 'umd',
    },

    plugins: [
      new CleanWebpackPlugin(),
      new StaticSiteGeneratorPlugin({
        paths: ['/', '/fr.html', '/en.html'],
        globals: {
          self: null,
          document: null,
        },
      }),
    ],
  };
}

if (NODE_ENV === 'development') {
  module.exports = {
    mode: 'development',
    devtool,

    resolve: { extensions },
    module: { rules },

    entry: './src/index.dev.tsx',

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [new HtmlWebpackPlugin(), new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],

    devServer: {
      host: HOST,
      port: Number(PORT),
      hot: true,
      historyApiFallback: {
        rewrites: [{ from: /\.html$/, to: '/index.html' }],
      },
    },
  };
}
