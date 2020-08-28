/* eslint no-console: "error" */

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/home.css';

const Home = props => {
  const handleClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        props.handleLogout();
        props.history.push('/');
      });
    // .catch(error => console.log(error));
  };
  return (
    <div className="container-fluid  header-bg text-white font-weight-bold h-100 mb-0 home-height">
      <br></br>
      <div className=" text-white">
        {props.loggedInStatus ? (
          <div className="p-3 mb-5 mb-3 bg-dark text-white">
            <Link to="/logout" style={{ color: 'white' }} onClick={handleClick}>
              Log Out
            </Link>
            {/* </button> */}
          </div>
        ) : (
          // <button type="button" className="btn btn-lg btn-dark btn-lg ">
          //   <Link to="/logout" onClick={handleClick}>
          //     Log Out
          //   </Link>
          // </button>
          <div>
            <div className="p-3 mb-2 mb-3 bg-dark text-white">
              <Link to="/login" style={{ color: 'white' }}>
                Log In
              </Link>
              {/* </button> */}
            </div>
            <br></br>
            <div className="p-3 mb-2 mb-2 bg-dark text-white">
              {/* <button
                type="button"
                className="btn btn-lg btn-dark btn-lg  px-5 py-2 mt-3 text-white"
              > */}
              <Link to="/signup" style={{ color: 'white' }}>
                Sign Up
              </Link>
              {/* <Link to="/signup">Sign Up</Link> */}
              {/* </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
  push: PropTypes.func,
  loggedInStatus: PropTypes.bool,
};

// Home.defaultProps = {
//   history: PropTypes.Object,
// };
export default Home;
