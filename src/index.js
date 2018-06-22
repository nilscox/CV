import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import CV from './CV';
import registerServiceWorker from './registerServiceWorker';

const props = {
  labels: require('./labels'),
  data: require('./data'),
};

ReactDOM.render(<CV {...props} />, document.getElementById('root'));
registerServiceWorker();
