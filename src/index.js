import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
  <div className="container-fluid d-flex  flex-direction: column justify-content px-0">
    <App />
  </div>
  </Provider>,
  document.getElementById('root'),
);
