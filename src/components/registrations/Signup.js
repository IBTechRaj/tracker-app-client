import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import  { signUp } from '../../actions/userActions'
import PropTypes from 'prop-types';
import '../../styles/style.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp( this.state )
    if ( this.props.loggedIn ) {
      this.redirect()
    }
    //   const {
    //     username, email, password, passwordConfirmation,
    //   } = this.state;
    //   const userInfo = {
    //     username,
    //     email,
    //     password,
    //     passwordConfirmation,
    //   };
    //   console.log(userInfo);
    //   fetch( `http://localhost:3001/auth/signup`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify( userInfo )
    //   } )
    //     .then( res => console.log(res.json()) )
                          
                            
    // };
                            
  }

  redirect = () => {
    this.props.history.push('/Inputs1');
  };

                          // handleErrors = () => (
                          //   <div>
                          //     <ul>
                          //       {this.state.errors.map(error => (
                          //         <li key={error}>{error}</li>
                          //       ))}
                          //     </ul>
                          //   </div>
                          // );

  render() {
    const {
      username, email, password, password_confirmation,
    } = this.state;
    return (
      <div className="container-fluid text-dark bg-light h-100">
        <div className="w-100 ">
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="justify-left w-100 px-5">
            User Name
            <input
              className="form-control"
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            Email
            <input
              className="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            Password
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            Confirm Password
            <input
              className="form-control"
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />
          </label>

          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-primary" type="submit" />
          </label>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
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
  signUp: (userInfo) => dispatch(signUp(userInfo))
  }
}

Signup.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  history: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps) (Signup);
