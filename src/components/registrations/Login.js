import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser } from '../../actions/userActions';

class Login extends Component {
  constructor(props) {
    super( props );
    //  this.props.dispatch(logout());
    this.state = {
      email: '',
      password: '',
    };
  }

                  // unsafeComponentWillMount() {
                  //   return this.props.loggedInStatus ? this.redirect() : null;
                  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchUser( this.state )
    if ( this.props.loggedIn ) {
      this.redirect()
    }
  }
                        // const { username, email, password } = this.state;

                        // const userInfo = {
                        //   // username,
                        //   auth: {
                        //     email,
                        //     password,
                        //   }
                        // };
                        // console.log(userInfo);
                        // fetch( `http://localhost:3001/auth/signin`, {
                        //   method: "POST",
                        //   headers: {
                        //     "Content-Type": "application/json",
                        //     "Accept": "application/json"
                        //   },
                        //   body: JSON.stringify( userInfo )
                        // } )
                        //   .then( res => console.log(res.json()) )
                      
    
  
  // redirect = data => {
  //   this.props.history.push({
  //     pathname: '/Inputs1',
  //     state: { detail: data },
  //   });
  // };
redirect = () => {
    this.props.history.push('/Inputs1');
};
  
  handleErrors = () => (
    <div>
      <ul>
        {this.state.errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );

  render() {
    const {  email, password } = this.state;
    return (
      <div className="container-fluid text-dark bg-light h-100">
        <div className="w-100 ">
          <h1>Log In</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="justify-left w-100 px-5">
                                {/* <input
                                  className="form-control"
                                  placeholder="username"
                                  type="text"
                                  name="username"
                                  value={username}
                                  onChange={this.handleChange}
                                /> */}
            <input
              className="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-primary" type="submit" />
          </label>

          <div>
            or <Link to="/signup">sign up</Link>
          </div>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
  fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
  }
}

Login.propTypes = {
  // handleLogin: PropTypes.func.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
  loggedIn: PropTypes.object,
};

// Login.defaultProps = {
//   history: PropTypes.Object,
// };
export default connect(mapStateToProps, mapDispatchToProps)(Login)
