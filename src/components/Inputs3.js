import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import '../styles/home.css';

class Inputs3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoursDone: '',
      hoursTarget: '',
      modulesDone: '',
      modulesTarget: '',
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
    const edate = new Date().toDateString();
    const {
      hoursDone, hoursTarget, modulesDone, modulesTarget,
    } = this.state;

    const curriculum = {
      entry_date: `${edate}`,
      name: 'Coding Challenges',
      hours_done: hoursDone,
      hours_target: hoursTarget,
      modules_done: modulesDone,
      modules_target: modulesTarget,
      user_id: this.props.user.id,
    };
    axios
      .post('http://localhost:3001/curriculums', {
        curriculum,
      })
      .then(response => {
        if (response.status === 201) {
          this.setState({
            hoursDone: '',
            hoursTarget: '',
            modulesDone: '',
            modulesTarget: '',
          });
        }
      });
    // .catch(error => {
    //   console.log(error);
    // })
  };

  redirect = () => {
    this.props.history.push('/Inputs2');
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
    return (
      <div className="container-fluid  body-bg  text-dark text-left font-weight-bold  mb-0 px-0">
        <div className="w-100 text-center body-header text-dark px-0 py-1">
          <h1>Coding Challenges (3/3)</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label className="justify-left w-100 px-5">
            {' '}
            Hours Done
            <input
              className="w-100"
              type="text"
              name="hoursDone"
              value={this.state.hoursDone}
              onChange={this.handleChange}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {' '}
            Hours Target
            <input
              className="w-100"
              type="text"
              name="hoursTarget"
              value={this.state.hoursTarget}
              onChange={this.handleChange}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {' '}
            Modules Done
            <input
              className="w-100"
              type="number"
              name="modulesDone"
              value={this.state.modulesDone}
              onChange={this.handleChange}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {' '}
            Modules Target
            <input
              className="w-100"
              type="number"
              name="modulesTarget"
              value={this.state.modulesTarget}
              onChange={this.handleChange}
            />
          </label>
          <label className="justify-left w-100 px-5">
            {' '}
            <input
              className="w-100 btn btn-custom"
              type="submit"
            />
          </label>
        </form>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-sm py-3   text-muted item-height"
            style={{
              backgroundColor: '#97e494',
              height: '5em',
              marginLeft: '8em',
              marginBottom: '2em',
            }}
          >
            <Link to="/Inputs2" style={{ color: 'white' }}>
              Prev
            </Link>
          </div>
          <div
            className="col-sm py-3   text-white item-height"
            style={{
              backgroundColor: 'white',
              height: '5em',
              marginRight: '8em',
              marginBottom: '2em',
            }}
          >
            <Link to="/Inputs2" style={{ color: 'white' }}>
              Next
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
  loggedIn: state.userReducer,
  user: state.userReducer.user,
});


Inputs3.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
  push: PropTypes.func,
  user: PropTypes.object,
  // user.id: PropTypes.number,
};

export default connect(mapStateToProps, null)(Inputs3);
