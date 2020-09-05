/* eslint no-console: "error" */

import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import '../styles/home.css';


const Home = props => {
  const handleClick = () => {
    props.handleLogout()
    // console.log( 'back', loggedIn )
    
                            // axios
                            //   .delete('https://tracker-rra.herokuapp.com/logout', { withCredentials: true })
                            //   .then(() => {
                            //     // props.handleLogout();
                            //     console.log('back',loggedIn)    
                            //     props.history.push('/home');  
                            //   });       
                            // // .catch(error => console.log(error));     
  };         
  return (
    <div className="container-fluid  header-bg text-white font-weight-bold h-100 mb-0 home-height">
      <br></br>
      <div className=" text-white"> 
        {props.loggedIn ? (
          <div>
            <div className="p-3 mb-5 mb-3 bg-dark text-white"> 
              <Link to="/logout" style={{ color: 'white' }} onClick={handleClick}>
              Log Out
            </Link>
            </div>
            <div className="p-3 mb-2 mb-3 bg-dark text-white">
              <Link to="/login" style={{ color: 'white' }}>
                Log In
              </Link>
            </div>
           </div>
        ) : ( 
          <div>
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
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  // handleLogout: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  push: PropTypes.func,
  loggedInStatus: PropTypes.bool,
};

export default Home;
