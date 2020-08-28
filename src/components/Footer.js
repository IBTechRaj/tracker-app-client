import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import '../img/icon1.png';

function Footer() {
  return (
    <>
      <div
        className="container-fluid   bg-footer  item-height font-weight-bold px-0"
        style={{ height: '5em' }}
      >
        <div className="row">
          {/* </button> */}
          {/* </div> */}
          {/* <div className=" col-md ">
            <Link to="/Inputs1">Add data</Link>
          </div> */}
          <div className=" col-sm-3 py-3   text-white  d-flex  ">
            <Link to="/Inputs1" style={{ color: 'white', marginTop: '2em' }}>
              Add Data
            </Link>
          </div>
          <div className=" col-sm-3 py-3   text-white  d-flex  ">
            <Link to="/TrackIt" style={{ color: 'white', marginTop: '2em' }}>
              Track It
            </Link>
          </div>
          <div className=" col-sm-3  py-3   text-white  d-flex">
            <Link to="/Progress" style={{ color: 'white', marginTop: '2em' }}>
              Progress
            </Link>
          </div>
          <div className=" col-sm-3  py-3   text-white  d-flex text-center  ">
            <Link to="/" style={{ color: 'white', marginTop: '2em' }}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
