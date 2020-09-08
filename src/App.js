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
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';
import { logOut } from './actions/userActions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.userReducer,
      user: this.props.u,
    };
  }


  handleLogout = () => {
    this.props.logOut();
    // this.setState({
    //   loggedIn: false,
    //   user: {},
    // });
  };

  render() {
    // const mapStateToProps = (state) => ({
    //   userReducer: state.userReducer,
    //   loggedIn: state.userReducer,
    // } );

  // console.log('prop- uid,uname, logdIn:',this.props.userReducer.user.id, this.props.userReducer.user.username, this.props.userReducer.loggedIn)
  console.log('propxxxxx: i : u',this.state, this.props, this.props.u)
    const { id, username } = this.state.user;
    // const { loggedIn } = this.props.userReducer;
    console.log('ld, un', id,username)
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
                  loggedIn={this.props.loggedIn}
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
                  handleLogin={this.handleLogin}
                  loggedIn={this.props.loggedIn}
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

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
  loggedIn: state.userReducer,
  i: state.id,
  u: state.userReducer.user
  // const {loggedIn, user} = state;
  // return {
  //   loggedIn,
  //   user,
  // }
})


const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

App.propTypes = {
  userReducer: PropTypes.object.isRequired,
  handleLogout: PropTypes.func,
  history: PropTypes.string,
  loggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);