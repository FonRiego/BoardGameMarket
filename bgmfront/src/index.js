import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/scss/main.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
  <App />
</Router>, document.getElementById('root'));
serviceWorker.unregister();

