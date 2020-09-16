import { setUser } from '../actions/user'
// import { navigate } from '../utils/navigationRef';
import { setErrors } from '../actions/error';
import axios from 'axios';
import { browserHistory } from '../../../src/index.js'
// import createHistory from 'history/createBrowserHistory'
// import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router-dom";
  
// let history= useHistory()

export const fetchUser = ( loginData ) => async dispatch => {
// const history = createHistory();
//  eslint-plugin-react-hooks
// let history= useHistory()
  // const loginInfo = { auth };

  try {
    // fetch('https://trackit-server.herokuapp.com/auth/signin', {
    const res = await axios.post('http://localhost:3001/login', loginData )
    const { jwt, user } = res.data;
      console.log( 'ld,re',loginData, res.data )
 
    // if ( res ) {
      localStorage.setItem( 'token', jwt );
      // console.log('hh',this.props.history)
      dispatch(
        setUser( {
          loggedIn: true,
          user: user,
        } ),
    );
    //  <Redirect to="/Inputs1" /> 
    browserHistory.push('/Inputs1')
  // history.push( '/Inputs1' );
    
    //  console.log('h ?')
    // }
  } catch ( err ) {
  // console.log('er',err)
    dispatch( setErrors( ['Invalid x email or password!'] ) );
  }
} 

export const signUp = ( signupData ) => async ( dispatch ) => {
  //  eslint-plugin-react-hooks
  // let history= useHistory()
  // const path = 'v1/users';

  console.log('s',signupData)
  try {
    // fetch('https://trackit-server.herokuapp.com/auth/signin', {
    const res = await axios.post( 'http://localhost:3001/users', 
    signupData )
    // if ( res ) {
      const { token, user } = res.data;
      // console.log( 'r', res.data )
      localStorage.setItem( 'token', token );
      dispatch(
        setUser( {
          loggedIn: true,
          data: user,
        } ),
      );
      // this.props.history.push( '/inputs1' )
      // console.log('h ?')
    // }
  } catch ( err ) {
    dispatch( setErrors( ['Invalid email or password!'] ) );
  }
  // .then(response => {
  //   if (response.status === 201) {
  //     this.setState({
  //       hoursDone: '',
  //       hoursTarget: '',
  //       modulesDone: '',
  //       modulesTarget: '',
  //     });
  // }
  // });
  // fetch('http://localhost/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
  //   body: JSON.stringify(loginInfo),
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     localStorage.setItem('token', data.jwt);
  //     const myUser = { id: data.id, uname: data.username };
  //     dispatch(setUser(myUser));
  //   });
}