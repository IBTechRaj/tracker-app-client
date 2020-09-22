import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Inputs1 from './components/Inputs1';
import Inputs2 from './components/Inputs2';
import Inputs3 from './components/Inputs3';
import TrackIt from './components/TrackIt';
import Progress from './components/Progress';
import ShowErrors from './components/ShowErrors';
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';
import { logOut } from './store/actions/user';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      user: this.props.user,
      id: this.props.user.id || 0,
      username: this.props.user.username || '',
    };
  }

  handleLogout = () => {
    this.props.logOut();
  };

  render() {
    return (
      <div className="container-fluid  text-center text-white px-0">
        { this.props.errors
  && <h3 className="error"> { this.state.errorMessage } </h3> }
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedIn={this.props.loggedIn}
                />
              )}
            />
            <Route
              path="/ShowErrors"
          render={props => <ShowErrors {...props} id={this.state.id} user={this.state.username} />}
            />
            <Route
              path="/Inputs1"
              render={props => <Inputs1 {...props} id={this.state.id} user={this.state.username} />}
            />
            <Route
              exact
              path="/Inputs2"
    render={props => <Inputs2 {...props} id={this.props.user.id} user={this.props.user.username} />}
            />
            <Route
              exact
              path="/Inputs3"
    render={props => <Inputs3 {...props} id={this.props.user.id} user={this.props.user.username} />}
            />
            <Route
              exact
              path="/TrackIt"
    render={props => <TrackIt {...props} id={this.props.user.id} user={this.props.user.username} />}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  loggedIn={this.props.loggedIn}
                />
              )}
              />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  loggedIn={this.props.loggedIn}
                />
              )}
            />
            <Route
              exact
              path="/Progress"
  render={props => <Progress {...props} id={this.props.user.id} user={this.props.user.username} />}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
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
  logOut: () => dispatch(logOut()),
});

App.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func,
  history: PropTypes.string,
  loggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
  errors: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);