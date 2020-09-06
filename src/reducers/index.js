import { combineReducers } from 'redux';
import userReducer from './userReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  userReducer,
  commentReducer,
});

export default rootReducer;