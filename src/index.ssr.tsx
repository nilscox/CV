import ReactDOMServer from 'react-dom/server';

import { MemoryRouter } from 'react-router-dom';
import { Stats } from 'webpack';

import { App } from './App';

type DocumentProps = {
  path: string;
  bundlePath: string;
  stylesPath: string;
  faviconPath: string;
};

const Document = ({ path, bundlePath, stylesPath, faviconPath }: DocumentProps) => (
  <html lang={path.endsWith('en') ? 'en' : 'fr'}>
    <head>
      <meta charSet="utf8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.75" />
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
      <MemoryRouter initialEntries={[path]} basename={publicPath}>
        <Document
          path={path}
          bundlePath={getAssets('js')[0]}
          stylesPath={getAssets('css')[0]}
          faviconPath={getAssets('ico')[0]}
        />
      </MemoryRouter>,
    ),
  ].join('\n');
};
