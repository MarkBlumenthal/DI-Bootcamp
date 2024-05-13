// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Change import for ReactDOM
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


