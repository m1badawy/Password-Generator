import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store';
import { Provider } from 'react-redux';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

