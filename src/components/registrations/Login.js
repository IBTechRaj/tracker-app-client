import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: '',
    };
  }

  unsafeComponentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    const user = {
      username,
      email,
      password,
    };
    // console.log(user);
    axios
      .post('http://localhost:3001/login', { user }, { withCredentials: true })
      .then(response => {
        // console.log("res", response.data.logged_in);
        if (response.data.logged_in) {
          this.props.handleLogin(response.data);
          // console.log("Login-", response.data);
          this.redirect(response.data);
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      });
    // .catch(error => console.log('api L errors:', error));
  };

  redirect = data => {
    this.props.history.push({
      pathname: '/Inputs1',
      state: { detail: data },
    });
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
    const { username, email, password } = this.state;
    return (
      <div className="container-fluid text-dark bg-light h-100">
        <div className="w-100 ">
          <h1>Log In</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="justify-left w-100 px-5">
            <input
              className="form-control"
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
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

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
  loggedInStatus: PropTypes.bool,
};

// Login.defaultProps = {
//   history: PropTypes.Object,
// };
export default Login;
