/* eslint no-return-assign: "error" */

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/home.css';

class Progress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculums: [],
      id: this.props.user.id,
      username: this.props.user.uname,
      user_id: '',
      name: '',
      hours_done: '',
      hours_target: '',
      modules_done: '',
      modules_target: '',
      techHoursProgress: '',
      techModulesProgress: '',
      profHoursProgress: '',
      profModulesProgress: '',
      codeHoursProgress: '',
      codeModulesProgress: '',
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const url = 'http://localhost:3001/curriculums';
    axios.get(url, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    // axios
      // .get('http://localhost:3001/curriculums')
      // .get('https://trackit-server.herokuapp.com/curriculums')
      .then(({ data }) => {
        let th = 0;
        let tm = 0;
        let tht = 0;
        let tmt = 0;
        let ph = 0;
        let pm = 0;
        let pht = 0;
        let pmt = 0;
        let ch = 0;
        let cm = 0;
        let cht = 0;
        let cmt = 0;

        if (typeof data === 'object') {
          data.forEach(hours => {
            if (this.props.user.id === hours.user_id) {
              if (hours.name === 'Tech Skills Curriculum') {
                th = parseInt(hours.hours_done, 10);
                tm = parseInt(hours.modules_done, 10);
                tht = parseInt(hours.hours_target, 10);
                tmt = parseInt(hours.modules_target, 10);
              }
              if (hours.name === 'Prof Skills Curriculum') {
                ph = parseInt(hours.hours_done, 10);
                pm = parseInt(hours.modules_done, 10);
                pht = parseInt(hours.hours_target, 10);
                pmt = parseInt(hours.modules_target, 10);
              }
              if (hours.name === 'Coding Challenges') {
                ch = parseInt(hours.hours_done, 10);
                cm = parseInt(hours.modules_done, 10);
                cht = parseInt(hours.hours_target, 10);
                cmt = parseInt(hours.modules_target, 10);
              }
            }
          });
        }
        this.setState({
          techHoursProgress: (th / tht) * 100,
          techModulesProgress: (tm / tmt) * 100,
          profHoursProgress: (ph / pht) * 100,
          profModulesProgress: (pm / pmt) * 100,
          codeHoursProgress: (ch / cht) * 100,
          codeModulesProgress: (cm / cmt) * 100,
        });
      });
  }

  render() {
    const radius = 60;
    const stroke = 4;
    const {
      techHoursProgress,
      techModulesProgress,
      profHoursProgress,
      profModulesProgress,
      codeHoursProgress,
      codeModulesProgress,
    } = this.state;
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;

    let strokeDashoffset = this.circumference - (50 / 100) * this.circumference;
    return (
      <>
        <div className="container-fluid  body-bg  text-dark text-center font-weight-bold  mb-0 px-0 progress-height">
          <div className="w-100 text-center body-header text-dark px-0 py-1">
            <h1>Track Progress - {this.props.user.uname}</h1>
          </div>
          <div className="row  text-center border border-primary px-5">
            Technical Curriculum
            <div style={{ display: 'none' }}>
              {
                (strokeDashoffset = this.circumference
                  - (techHoursProgress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${this.circumference} ${this.circumference}`}
                style={{ strokeDashoffset }}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>Hours</div>
            <div style={{ display: 'none' }}>
              {
                (strokeDashoffset = this.circumference
                  - (techModulesProgress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${this.circumference} ${this.circumference}`}
                style={{ strokeDashoffset }}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>
              <div>Modules</div>
            </div>
          </div>
          <div className="row  text-center border border-primary px-5">
            Professional Skills Curriculum
            <div style={{ display: 'none' }}>
              {
                (strokeDashoffset = this.circumference
                  - (profHoursProgress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${this.circumference} ${this.circumference}`}
                style={{ strokeDashoffset }}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>Hours</div>
            <div style={{ display: 'none' }}>
              {
                (strokeDashoffset = this.circumference
                  - (profModulesProgress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${this.circumference} ${this.circumference}`}
                style={{ strokeDashoffset }}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>Modules</div>
          </div>
          <div className="row  text-center border border-primary px-5">
            Coding Challenges
            <div style={{ display: 'none' }}>
              {
                (strokeDashoffset = this.circumference
                  - (codeHoursProgress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${this.circumference} ${this.circumference}`}
                style={{ strokeDashoffset }}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>Hours</div>
            <div style={{ display: 'none' }}>
              {
                (strokeDashoffset = this.circumference
                  - (codeModulesProgress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${this.circumference} ${this.circumference}`}
                style={{ strokeDashoffset }}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>Modules</div>
          </div>
        </div>
      </>
    );
  }
}


// const mapStateToProps = (state) => ({
//   userReducer: state.userReducer,
//   loggedIn: state.userReducer,
//   user: state.userReducer.user,
// });

// const mapStateToProps = (state) => ({
//  user: state.user,
//  loggedIn: state.loggedIn,
//  } )
const mapStateToProps = (state) => ({
  user: state.user.user,
  loggedIn: state.user.loggedIn,
});

Progress.propTypes = {
  id: PropTypes.number,
  user: PropTypes.object,
  username: PropTypes.string,
  data: PropTypes.object,
};
export default connect(mapStateToProps, null)(Progress);
