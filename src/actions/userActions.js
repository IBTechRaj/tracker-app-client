const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (auth) => dispatch => {
  const loginInfo = { auth };
  fetch('https://trackit-server.herokuapp.com/auth/signin', {
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
      const myUser = { id: data.user.id, uname: data.user.username };
      dispatch(setUser(myUser));
    });
};

export const signUp = (auth) => dispatch => {
  fetch('https://trackit-server.herokuapp.com/auth/signup', {
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
      const myUser2 = { id: data.id, uname: data.username };
      dispatch(setUser(myUser2));
    });
};

export const logOut = () => dispatch => {
  dispatch(logUserOut());
};