/* eslint-disable */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

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
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const extractStylesLoader = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
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

const copyStaticPlugin = new CopyWebpackPlugin({
  patterns: [{ from: 'static' }],
});

if (NODE_ENV === 'production') {
  /** @type {import('webpack').Configuration} */
  const ssrConfig = {
    mode: 'production',
    devtool,

    resolve: { extensions },

    module: {
      rules: [esbuildLoader, extractStylesLoader, svgLoader, fileLoader],
    },

    target: 'node',
    entry: './src/index.ssr.tsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      libraryTarget: 'umd',
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new StaticSiteGeneratorPlugin({
        paths: ['/', '/fr', '/en'],
        locals: {
          assets: {
            main: `/bundle-${pkg.version}.js`,
          },
        },
      }),
    ],
  };

  /** @type {import('webpack').Configuration} */
  const browserConfig = {
    ...ssrConfig,
    target: 'web',
    entry: './src/index.tsx',

    output: {
      filename: `bundle-${pkg.version}.js`,
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [new MiniCssExtractPlugin(), copyStaticPlugin],
  };

  module.exports = [ssrConfig, browserConfig];
}

if (NODE_ENV === 'development') {
  /** @type {import('webpack').Configuration} */
  const config = {
    mode: 'development',
    devtool,

    resolve: { extensions },

    module: {
      rules: [esbuildLoader, stylesLoader, svgLoader, fileLoader],
    },

    entry: './src/index.dev.tsx',

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
      new HtmlWebpackPlugin(),
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      copyStaticPlugin,
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

  module.exports = config;
}
