import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
    <HashRouter>
        <App />
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();
