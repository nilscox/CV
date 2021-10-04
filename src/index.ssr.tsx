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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.75" />
        <Route exact path="/(fr)?">
          <meta
            name="description"
            content="Développeur web passionné, spécialisé sur React et Node / NestJS, particulièrement attaché aux bonnes pratiques et à l'architecture des systèmes."
          />
        </Route>
        <Route path="/en">
          <meta
            name="description"
            content="Passionate web developer, specialized in React and Node / NestJS, particularly attached to good practices and system architecture."
          />
        </Route>
        <title>
          <Route exact path="/(fr)?">
            Nils Layet - Développeur TypeScript
          </Route>
          <Route path="/en">Nils Layet - TypeScript Developer</Route>
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
