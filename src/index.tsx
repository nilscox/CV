import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const publicPath = process.env.PUBLIC_PATH as string;

ReactDOM.hydrate(
  <BrowserRouter basename={publicPath}>
    <App />
  </BrowserRouter>,
  document.getElementById('cv'),
);
