import React, { Component } from 'react';
import { connect } from 'react-redux'
// import {autoLogin} from './actions/userActions'
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
      loggedIn: true,
      user: {},
    };
  }

  // componentDidMount() {
  //   this.props.autoLogin()
  // }

  handleLogout = () => {
    console.log( 'here', this.state.laggedIn )
    
    this.setState({
      loggedIn: false,
      user: {},
    });
    
  };


                      // handleLogin = data => {
                      //   this.setState({
                      //     loggedIn: true,
                      //     user: data.user,
                      //   });
                      // }; 
                            // handleLogout = () => {
                            //   console.log( 'here', this.state.laggedIn )
                              
                            //   this.setState({
                            //     loggedIn: false,
                            //     user: {},
                            //   });
                              
                            // };

  render() {
    const { id, username } = this.props.userReducer.user;
    const  loggedIn  = this.props.userReducer.loggedIn
    console.log('id,user,logdIn', id, username,loggedIn) //this.props.userReducer.user.id, this.props.userReducer.user.username)

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
                  loggedIn={this.state.loggedIn}
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
                  loggedIn={this.state.loggedIn}
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
                  loggedIn={this.state.loggedIn}
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

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    loggedIn: state.userReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: () => dispatch(autoLogin())
//   }
// }

App.propTypes = {
  handleLogout: PropTypes.func,
  history: PropTypes.string,
};

export default connect(mapStateToProps, null)(App);