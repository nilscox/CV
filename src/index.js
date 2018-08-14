import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';
import registerServiceWorker from './registerServiceWorker';

const props = {
  meta: require(`./data/meta`),
  data: require(`./data/cv`),
};

ReactDOM.render(<CV {...props} />, document.getElementById('root'));
registerServiceWorker();
