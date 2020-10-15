import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { signUp } from '../../store/thunks/user';
import { addFlashMessage} from '../../store/actions/flashMessages'
import '../../styles/style.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
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
    const { password, passwordConfirmation } = this.state;
    if (password !== passwordConfirmation) {
      this.props.history.push('/ShowErrors');
    }
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation,
    };
    this.props.signUp(user).then(
      () => {
        this.props.addFlashMessage( {
          type: 'success',
          text: 'You signed up successfully. Welcome!'
        } )
        this.redirect()
      } )

  }

  redirect = () => {
    this.props.history.push('/Inputs1');
  };

  render() {
    const {
      username, email, password, passwordConfirmation,
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
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </label>

          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  loggedIn: state.user.loggedIn,
  errors: state.errors,
});
const mapDispatchToProps = (dispatch) => ({
  signUp: (signinInfo) => dispatch(signUp(signinInfo)),
  addFlashMessage: (msg) => dispatch( addFlashMessage(msg)),
});

Signup.propTypes = {
  signUp: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  errors: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
