import { SET_ERRORS } from '../actions/types';

export default (state = [], action) => {
  if (action.type === SET_ERRORS) {
    return action.setErrors;
  }
  return state;
};