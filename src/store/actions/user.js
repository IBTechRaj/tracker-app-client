import { SET_USER, LOG_OUT_USER } from './types';


export const setUser = setUser => ({
  type: SET_USER,
  setUser,
});

export const logOut = logOut => ({
  type: LOG_OUT_USER,
  logOut,
});