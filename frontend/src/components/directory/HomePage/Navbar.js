import React from 'react'
import './homepage.css'
import logo from "../../../assets/JobKart.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="light-bg">
      <nav className="container navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar