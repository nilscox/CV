import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { MemoryRouter, Route } from 'react-router-dom';

import { App } from './App';

type DocumentProps = {
  path: string;
  bundlePath: string;
};

const Document: React.FC<DocumentProps> = ({ path, bundlePath }) => (
  <MemoryRouter initialEntries={[path]}>
    <html>
      <head>
        <title>
          <Route exact path="/(fr)?">
            CV Nils Layet - Développeur TypeScript
          </Route>
          <Route path="/en">CV Nils Layet - TypeScript Developer</Route>
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/main.css" />
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
  assets: {
    main: string;
  };
};

export default (locals: Locals) => {
  return [
    '<!DOCTYPE html>',
    '<!-- What are you looking for? :D -->',
    ReactDOMServer.renderToString(<Document path={locals.path} bundlePath={locals.assets.main} />),
  ].join('\n');
};
