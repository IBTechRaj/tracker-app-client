import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      .get('http://localhost:3001/curriculums')
      .then(response => {
        this.setState({
          curriculums: response.data,
        });
      });
  }

  render() {
    const name = this.state.curriculums.filter(
      c => c.user_id === this.props.user.id,
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
    return (
      <>
        <div className="container-fluid  body-bg  text-dark text-center font-weight-bold track-height mb-0 px-0">
          <div className="w-100 text-center body-header text-dark px-0 py-1">
            <h1>Track Record - {this.props.user.uname}</h1>
          </div>
          {myCurriculums.map(myCurriculum => (
            <div className="curriculum-list" key={myCurriculum.id}>
              <p>
                {myCurriculum.name.substring(0, 22)} {myCurriculum.entry_date.substring(0, 10)}{' '}
                [ Hours : {myCurriculum.hours_done}{' '} ]  [Modules :{' '}
                {myCurriculum.modules_done}]
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
  loggedIn: state.userReducer,
  user: state.userReducer.user,
});

TrackIt.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  user: PropTypes.string,
  data: PropTypes.object,
};

export default connect(mapStateToProps, null)(TrackIt);
