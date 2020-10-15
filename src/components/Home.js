/* eslint no-console: "error" */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import '../styles/home.css';


const Home = () => (
    <div className="container-fluid  header-bg text-white font-weight-bold  mb-0 home-height">
     <br></br>     <br></br>     <br></br>     <br></br>     <br></br>
      <div className="p-3 mb-2 mb-3 bg-dark text-white">

        <Link to="/login" style={{ color: 'white' }}>
          Log In
              </Link>
      </div>
      <br></br>
      <div className="p-3 mb-2 mb-2 bg-dark text-white">
        <Link to="/signup" style={{ color: 'white' }}>
          Sign Up
              </Link>
      </div>
    </div>
);


Home.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  push: PropTypes.func,
};

export default Home;
