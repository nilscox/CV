import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';
import registerServiceWorker from './registerServiceWorker';

const props = {
  meta: require(`./data/meta`),
  data: require(`./data/cv`),
};

console.log('Hello! If you prefer, this is my CV in JS (:', props.data);

ReactDOM.render(<CV {...props} />, document.getElementById('root'));
registerServiceWorker();
