import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { MemoryRouter, Route } from 'react-router-dom';
import { Stats } from 'webpack';

import { App } from './App';

type DocumentProps = {
  path: string;
  bundlePath: string;
  stylesPath: string;
  faviconPath: string;
};

const Document: React.FC<DocumentProps> = ({ path, bundlePath, stylesPath, faviconPath }) => (
  <MemoryRouter initialEntries={[path]}>
    <html lang={path === '/en' ? 'en' : 'fr'}>
      <head>
        <meta charSet="utf8" />
        <title>
          <Route exact path="/(fr)?">
            CV Nils Layet - Développeur TypeScript
          </Route>
          <Route path="/en">CV Nils Layet - TypeScript Developer</Route>
        </title>
        <link rel="shortcut icon" href={faviconPath} />
        <link rel="stylesheet" href={stylesPath} />
      </head>
      <body>
        <div id="cv">
          <App />
        </div>
        <script src={bundlePath} />
      </body>
    </html>
  </MemoryRouter>
);

type Locals = {
  path: string;
  webpackStats: Stats;
};

export default ({ path, webpackStats }: Locals) => {
  const assets = Object.keys(webpackStats.compilation.assets);
  const publicPath = webpackStats.toJson().publicPath ?? '';

  const getAssets = (ext: string) => {
    return assets
      .filter((filename) => filename.endsWith(`.${ext}`))
      .map((asset) => [publicPath.replace(/\/$/, ''), asset].join('/'));
  };

  return [
    '<!DOCTYPE html>',
    '<!-- What are you looking for? :D -->',
    ReactDOMServer.renderToString(
      <Document
        path={path}
        bundlePath={getAssets('js')[0]}
        stylesPath={getAssets('css')[0]}
        faviconPath={getAssets('ico')[0]}
      />,
    ),
  ].join('\n');
};
