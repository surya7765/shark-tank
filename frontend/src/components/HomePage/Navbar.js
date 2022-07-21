import React from 'react'
import './homepage.css'
import logo from "../../assets/JobKart.png";

const Navbar = () => {
  return (
    <div className='light-bg'>
      <nav className="container navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
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
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar