import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default configureStore;