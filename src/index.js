import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import store from './store/store';
import './index.css';
import history from './history';
// import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
      <div className="container-fluid d-flex  flex-direction: column justify-content px-0">
        {/* <ErrorBoundary> */}
          <App />
        {/* </ErrorBoundary> */}
  </div>
  </Router>
  </Provider>,
  document.getElementById('root'),
);
