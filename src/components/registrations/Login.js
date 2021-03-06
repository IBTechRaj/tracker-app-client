import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser } from '../../store/thunks/user';
import { addFlashMessage } from '../../store/actions/flashMessages';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const loginInfo = this.state;
    this.props.fetchUser(loginInfo);
    // .then(
    // () => {
  }

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
    const { email, password } = this.state;
    return (
      <div className="container-fluid text-dark bg-light h-100">
        <div className="w-100 ">
          <h1>Log In</h1>
        </div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label className="justify-left w-100 px-5">
            <input
              className="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <br/>
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br/><br/>
          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>

          <div>
            or <Link to="/signup">sign up</Link>
          </div>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.loggedIn,
  errors: state.errors,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (loginInfo) => dispatch(fetchUser(loginInfo)),
  addFlashMessage: (msg) => dispatch(addFlashMessage(msg)),
});

Login.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
