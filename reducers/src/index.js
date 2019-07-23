import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './component/App/App.js';
import createStore from './component/store/store.js';
const store = createStore();

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
