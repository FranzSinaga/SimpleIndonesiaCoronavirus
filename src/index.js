import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import './App.css';

import ThemeContextWrapper from './ThemeContextWrapper'

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <Home />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
