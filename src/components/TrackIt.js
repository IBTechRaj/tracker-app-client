import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/home.css';

class TrackIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculums: [],
      id: this.props.data,
      username: this.props.data,
      user_id: '',
      name: '',
      hours_done: '',
      hours_target: '',
      modules_done: '',
      modules_target: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/curriculums', { withCredentials: true })
      .then(response => {
        this.setState({
          curriculums: response.data,
        });
      });
    // .catch(error => console.log(error));
  }

  render() {
    const name = this.state.curriculums.filter(
      c => c.user_id === this.props.id,
    );
    const myCurriculums = name.sort((name1, name2) => {
      if (name1.name > name2.name) {
        return -1;
      }
      if (name1.name < name2.name) {
        return 1;
      }
      return 0;
    });

    // console.log(myCurriculums);
    return (
      <>
        <div className="container-fluid  body-bg  text-dark text-center font-weight-bold track-height mb-0 px-0">
          {/* <div className="container-fluid text-center text-dark bg-light h-100"> */}
          {/* <h1 className="Curriculums-container">
            Track Progress - {this.props.user}
          </h1> */}
          <div className="w-100 text-center body-header text-dark px-0 py-1">
            <h1>Track Record - {this.props.user}</h1>
          </div>
          {myCurriculums.map(myCurriculum => (
            <div className="curriculum-list" key={myCurriculum.id}>
              <p>
                {myCurriculum.name} {myCurriculum.entry_date.substring(1, 10)}{' '}
                Hours : {myCurriculum.hours_done} Modules :{' '}
                {myCurriculum.modules_done}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
TrackIt.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  user: PropTypes.string,
  data: PropTypes.object,
};
export default TrackIt;
