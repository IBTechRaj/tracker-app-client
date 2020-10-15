import { SET_USER, LOG_OUT_USER } from '../actions/types';


const initialState = {
  loggedIn: false,
  user: {},
};

export default ( state = initialState, action ) => {
  console.log('action,setuser', action, action.setUser)
  if (action.type === SET_USER) {
    return action.setUser;
  }
  if (action.type === LOG_OUT_USER) {
    return action.logOut;
  }
  return state;
};