import React, { Component } from 'react';
import axios from 'axios';
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
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        // console.log('st1', response.data);
        if (response.data.logged_in) {
          this.handleLogin(response.data);
        } else {
          this.handleLogout();
        }
      });
    // .catch(error => console.log('api A errors:', error));
  };

  handleLogin = data => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    // console.log('st3', this.state.user);
    const { id, username } = this.state.user;
    // console.log('in app render', id, username);
    return (
      <div className="container-fluid  text-center text-white px-0">
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
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              path="/Inputs1"
              render={props => <Inputs1 {...props} id={id} user={username} />}
            />
            <Route
              exact
              path="/Inputs2"
              render={props => <Inputs2 {...props} id={id} user={username} />}
            />
            <Route
              exact
              path="/Inputs3"
              render={props => <Inputs3 {...props} id={id} user={username} />}
            />
            <Route
              exact
              path="/TrackIt"
              render={props => <TrackIt {...props} id={id} user={username} />}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/Progress"
              render={props => <Progress {...props} id={id} user={username} />}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  handleLogout: PropTypes.func,
  history: PropTypes.string,
};

export default App;
