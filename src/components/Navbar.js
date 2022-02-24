import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/home">
        {props.title}
      </Link>
      <button
        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              {props.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2"   onClick={()=>{props.toggleMode('primary')}}></div>
          <div className="bg-danger rounded mx-2"    onClick={()=>{props.toggleMode('danger')}}></div>
          <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}}></div>
          <div className="bg-success rounded mx-2"   onClick={()=>{props.toggleMode('success')}}></div>

        </div>
        <div className="form-check-inline ml-4">
           <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`}>
           <input type="checkbox" onClick={()=>{props.toggleMode(null)}} className="form-check-input" value=""/> Toggle Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
// Assinging values to the title whether it's a string, number or an array or an object
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
// Giving Default values to the Props:
Navbar.defaultProps = {
  title: "Set title here",
};
