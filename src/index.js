import React from 'react';
import ReactDOM from 'react-dom';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
