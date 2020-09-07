import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import '../styles/home.css';

class Inputs1 extends Component {
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
      name: 'Tech Skills Curriculum',
      hours_done: hoursDone,
      hours_target: hoursTarget,
      modules_done: modulesDone,
      modules_target: modulesTarget,
      user_id: this.props.id,
    };

    axios.post('https://trackit-server.herokuapp.com/curriculums', {
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
      })
      .catch(error => {
        console.log(error);
      });
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

  render () {
    const { id, username } = this.props.userReducer.user;
    return (
      <div className="container-fluid  body-bg  text-dark text-left font-weight-bold  mb-0 px-0">
        <div className="w-100 text-center body-header text-dark px-0 py-1">
          <h1>Technial Curriculum (1/3)[user: {this.props.id}</h1>
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
              marginLeft: '8em',
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
});

Inputs1.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  loggedInStatus: PropTypes.bool,
  id: PropTypes.number,
};

export default connect(mapStateToProps, null) (Inputs1);
