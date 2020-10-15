import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { addFlashMessage } from '../store/actions/flashMessages';
import '../styles/home.css';
import Spinner from './Spinner';

class Inputs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoursDone: '',
      hoursTarget: '',
      modulesDone: '',
      modulesTarget: '',
      loggedIn: this.props.loggedIn,
      userId: this.props.user.id,
      userName: this.props.user.username,
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
      name: 'Tech Skills Curriculum',
      hours_done: hoursDone,
      hours_target: hoursTarget,
      modules_done: modulesDone,
      modules_target: modulesTarget,
      user_id: this.props.user.id,
    };

    const jwt = localStorage.getItem('token');
    const url = 'http://localhost:3001/curriculums';
    axios.post(url, { curriculum }, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Tech data successfully added!',
          });

          this.setState({
            hoursDone: '',
            hoursTarget: '',
            modulesDone: '',
            modulesTarget: '',
          });
        }
      });
  };

  // redirect = () => {
  //   this.props.history.push('/Inputs2');
  // };

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

      !(this.props.loggedIn) ? (
      // (this.props.errors)?
      // (this.props.history.push('/ShowErrors')):(
        <div>
          {/* <h3 className="error text-dark"> {  (this.props.errors)?
          this.props.history.push('/')  </h3> */}
         {/* { console.log('props', this.props.loggedIn, this.props.user.id, this.props.errors)} */}
          <Spinner />

      </div>
      ) : (
      <div className="container-fluid  body-bg  text-dark text-left font-weight-bold  mb-0 px-0">
        <div className="w-100 text-center body-header text-dark px-0 py-1">

          <h1>Technial Curriculum (1/3) </h1>
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
        <div className="row ">
          <div
            className="col-sm py-3   text-muted item-height"
            style={{
              backgroundColor: 'white',
              height: '5em',
              // marginLeft: '8em',
              marginLeft: '10%',
              marginBottom: '2em',
            }}
          >
            Prev
          </div>
          <div
            className="col-sm py-3   text-white item-height"
            style={{
              backgroundColor: '#97e494',
              height: '5em',
              marginRight: '10%',
              marginBottom: '2em',
            }}
          >
            <Link to="/Inputs2" style={{ color: 'white' }}>
              Next
            </Link>
          </div>
        </div>
          </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  loggedIn: state.user.loggedIn,
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  addFlashMessage: (msg) => dispatch(addFlashMessage(msg)),
});

Inputs1.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  loggedIn: PropTypes.bool,
  id: PropTypes.number,
  user: PropTypes.object,
  errors: PropTypes.array,
  addFlashMessage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inputs1);
