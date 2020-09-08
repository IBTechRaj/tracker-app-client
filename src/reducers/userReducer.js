const defaultState = {
  loggedIn: false,
  user: {},
};

const userReducer = ( state = defaultState, action ) => {
   console.log('l-uid-unm-lgdn',action.payload)
  switch ( action.type ) {
   
    case 'SET_USER':
      return {
        loggedIn: true,
        user: { ...action.payload },
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default: return state;
  }
};

export default userReducer;