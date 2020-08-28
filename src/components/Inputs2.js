import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Inputs2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoursDone: '',
      hoursTarget: '',
      modulesDone: '',
      modulesTarget: '',
    };
  }

  // UNSAFE_componentWillMount() {
  //   return this.props.loggedInStatus ? this.redirect() : null;
  // }

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

    // const user = {
    //   hoursDone,
    //   hoursTarget,
    //   modulesDone,
    //   modulesTarget
    // };
    const curriculum = {
      entry_date: `${edate}`,
      name: 'Prof Skills Curriculum',
      hours_done: hoursDone,
      hours_target: hoursTarget,
      modules_done: modulesDone,
      modules_target: modulesTarget,
      user_id: this.props.id,
    };
    // console.log('o', curriculum);
    axios
      .post('http://localhost:3001/curriculums', {
        curriculum,
      });
    // .then(response => {
    //   // console.log(response);
    //   this.setState({ curriculum });
    // });
    // .catch(error => {
    //   // console.log(error);
    // });
  };

  // redirect = () => {
  //   this.props.history.push("/Inputs2");
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
    // const { hoursDone, hoursTarget, modulesDone, modulesTarget } = this.state;
    return (
      // <div className="container-fluid  bg-light h-100 text-left text-dark w-100">
      <div className="container-fluid  body-bg  text-dark text-left font-weight-bold  mb-0 px-0">
        <div className="w-100 text-center body-header text-dark px-0 py-1">
          <h1>Professional Curriculum</h1>
        </div>
        {/* <br /> */}

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
              // inputMode="numeric"
              // pattern="[0-9]+([\.,][0-9]+)?"
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
              className="w-100 btn btn-primary"
              type="submit"
              // name="modulesTarget"
              // value={this.state.modulesTarget}
              // onChange={this.handleChange}
            />
          </label>
          {/* <button type="submit" className="btn mt-3 ">
            {" "}
            Submit
          </button> */}
          {/* <div>
            <Link to="/Inputs2">Next</Link>
          </div> */}
        </form>
        {/* <div>{this.state.errors ? this.handleErrors() : null}</div> */}
        <div className="row">
          {/* <div className="col-sm-12"> */}
          <div
            className="col-sm py-3   text-muted item-height"
            style={{
              backgroundColor: '#97e494',
              height: '5em',
              marginLeft: '8em',
              marginBottom: '2em',
            }}
          >
            <Link to="/Inputs1" style={{ color: 'white' }}>
              Prev
            </Link>
          </div>
          <div
            className="col-sm py-3   text-white item-height"
            style={{
              backgroundColor: '#97e494',
              height: '5em',
              marginRight: '8em',
              marginBottom: '2em',
              borderLeft: 'solid white',
            }}
          >
            <Link to="/Inputs3" style={{ color: 'white' }}>
              Next
            </Link>
            {/* </button> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   history: PropTypes.Object,
//   object,
//   loggedInStatus: PropTypes.bool
// };

Inputs2.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
};
export default Inputs2;
