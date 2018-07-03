import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import CV from './CV';
import registerServiceWorker from './registerServiceWorker';

const queryString = window.location.search.replace(/^\?/, '');
const params = queryString.split('&').reduce((o, a) => {
  const p = a.split('=');

  o[p[0]] = p[1];

  return o;
}, {});

const lang =
  process.env.REACT_APP_LANG
  || params.lang
  || 'en';

const props = {
  meta: require(`./data/${lang}/meta`),
  data: require(`./data/${lang}/cv`),
};

ReactDOM.render(<CV {...props} />, document.getElementById('root'));
registerServiceWorker();
