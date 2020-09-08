import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import App from './App';
import './index.css';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <div className="container-fluid d-flex  flex-direction: column justify-content px-0">
    <App />
  </div>
  </Provider>,
  document.getElementById('root'),
);
