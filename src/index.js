import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index'

const store = createStore( rootReducer, applyMiddleware( thunk ) )

ReactDOM.render(
  <Provider store={store}>
  <div className="container-fluid d-flex  flex-direction: column justify-content px-0">
    <App />
  </div>
  </Provider>,
  document.getElementById('root'),
);
