import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import '../styles/home.css';

class ShowErrors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: this.props.errors,
    };
  }

  render() {
    return (
      <div className="container-fluid  header-bg  text-dark text-align-center font-weight-bold errors-height mb-5 px-0">


        <h3 className="error text-dark"> Email/Password Errors....{ this.props.errors }  </h3>
       <Link to="/" style={{ color: 'white', marginTop: '3em' }} className="get-hover">
              Click here and try again
            </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  loggedIn: state.user.loggedIn,
  errors: state.errors,
});

ShowErrors.propTypes = {
  loggedIn: PropTypes.bool,
  id: PropTypes.number,
  user: PropTypes.object,
  errors: PropTypes.array,
};
export default connect(mapStateToProps, null)(ShowErrors);