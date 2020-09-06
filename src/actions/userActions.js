const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (auth) => dispatch => {
  const loginInfo = { auth };
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
      localStorage.setItem('token', data.jwt);
      console.log('signin', data);
      dispatch(setUser(data.user));
    });
};

export const signUp = (auth) => dispatch => {
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
      localStorage.setItem('token', data.jwt);
      console.log('signUP', data);
      dispatch(setUser(data.user));
    });
};

export const logOut = () => dispatch => {
  dispatch(logUserOut());
};