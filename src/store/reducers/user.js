import {SET_USER} from '../actions/types';

const initialState = {
  loggedIn: false,
  user: {},
}; 

export default ( state = initialState, action ) => {
  console.log('in set user')
  if (action.type === SET_USER) {
    return action.setUser;
  } 
  return state;
};