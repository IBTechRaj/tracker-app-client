import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import '../img/icon1.png';

function Footer() {
  return (
    <>
      <div
        className="container-fluid   bg-footer justify-content-center  footer-height font-weight-bold px-0"

      >
        {/* <div className="row col-xs-12 footer-height" > */}
          <div className=" col-xs-3 py-3   text-white justify-content-center d-flex get-hover footer-height footer-width" >
            <Link to="/Inputs1" style={{ color: 'white', marginTop: '3em' }} >
              Add Data
            </Link>
          </div>
          <div className=" col-xs-3 py-3   text-white justify-content-center d-flex  get-hover  footer-height footer-width" >
            <Link to="/TrackIt" style={{ color: 'white', marginTop: '3em' }}>
              Track It
            </Link>
          </div>
          <div className=" col-xs-3  py-3   text-white justify-content-center d-flex get-hover footer-height footer-width" >
            <Link to="/Progress" style={{ color: 'white', marginTop: '3em' }}>
              Progress
            </Link>
          </div>
          <div className=" col-xs-3  py-3   text-white  justify-content-center d-flex  get-hover  footer-height  footer-width">
            <Link to="/" style={{ color: 'white', marginTop: '3em' }} className="get-hover">
              Log Out
            </Link>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Footer;
