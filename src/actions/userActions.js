const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (auth) => dispatch => {
  const loginInfo = { auth };
  // fetch('https://trackit-server.herokuapp.com/auth/signin', {
  fetch('http://localhost:3001/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(loginInfo),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem( 'token', data.jwt );
      // console.log('jwt, s in user',data.jwt, data.user.id, data.user.username)
      const myUser = {id: data.user.id, uname: data.user.username}
      dispatch(setUser(myUser));
    });
};

export const signUp = (auth) => dispatch => { 
  // const loginInfo = { auth };
  // fetch('https://trackit-server.herokuapp.com/auth/signup', {
 fetch('http://localhost:3001/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(auth),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem( 'token', data.jwt );
      console.log('s up id',data.id)
      console.log('s up un',data.username)
      // dispatch( setUser( data.user ) );
      // console.log('jwt, s in user',data.jwt, data.user.id, data.user.username)
      const myUser2 = {id: data.id, uname: data.username}
      dispatch(setUser(myUser2));
      // console.log('mu2',myUser2)
    });
};

export const logOut = () => dispatch => {
  dispatch(logUserOut());
};