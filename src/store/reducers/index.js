import { combineReducers } from 'redux';
import errors from './error';
import user from './user';
import comments from './comment';

export default combineReducers({
  comments,
  errors,
  user,
});
