import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './App';

if (document) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('cv'),
  );
}

export default () => {
  return '<!DOCTYPE html>' +
    ReactDOMServer.renderToString(
      <html lang="fr">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Développeur web full stack" />
          <link type="text/css" rel="stylesheet" href="main.css" />
          <title>Nils Layet - Curriculum vitæ</title>
        </head>
        <body>
          <div id="cv">
            <App />
          </div>
          <script src="main.js" />
        </body>
      </html>,
    );
};
