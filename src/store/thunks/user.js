import axios from 'axios';
import { setUser } from '../actions/user';
import setErrors from '../actions/error';
import history from '../../history';


export const fetchUser = (loginData) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3001/login', loginData);
    const { jwt, user } = res.data;
    localStorage.setItem('token', jwt);

    if (jwt) {
      const newUrl = 'http://localhost:3001/user_is_authed';
      axios.get(newUrl, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .catch(err => dispatch(setErrors(err)));
    }

    dispatch(
      setUser({
        loggedIn: true,
        user,
      }),
    );

    if (!res.data.jwt) {
      history.push('/ShowErrors');
      window.location.reload(false);
    }
  } catch (err) {
    dispatch(setErrors(['For Login, Invalid x email or password!']));
  }
};

export const signUp = (newuser) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3001/users', { newuser });

    const { jwt, user } = res.data;
    localStorage.setItem('token', jwt);
    if (jwt) {
      const newUrl = 'http://localhost:3001/user_is_authed';
      axios.get(newUrl, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .catch(err => dispatch(setErrors(err)));
    }
    dispatch(
      setUser({
        loggedIn: true,
        user,
      }),
    );
  } catch (err) {
    history.push('/ShowErrors');
    window.location.reload(false);
    dispatch(setErrors(['For signup, Invalid email or password!']));
  }
};

export const logOut = () => async (dispatch) => {
  delete axios.defaults.headers.common.Authorization;

  localStorage.removeItem('token');

  dispatch(
    setUser({
      loggedIn: false,
      user: {},
    }),
  );
};
