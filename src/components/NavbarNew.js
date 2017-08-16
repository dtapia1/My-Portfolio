import React from 'react';
var NavLink = require('react-router-dom').NavLink;

const NavbarNew = () => (
  <div className="nav navbar-fixed">
    <nav className="nav-color">
      <div className="nav-wrapper mx-auto px-2">
        <span className="h1 brand-logo mb-0 mt-3">DT</span>
        <a href="#!ß" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact activeClassName='active' to='/'>About</NavLink></li>
          <li><NavLink exact activeClassName='active' to='/projects'>Projects</NavLink></li>
          <li>
            <a target="blank_target" href="https://drive.google.com/file/d/0B37QL_eTzWWjUDAxb1Y2akJDSVAtT1MxM2t0WVI4ZEtOLTJB/view?usp=sharing">Resume</a>
          </li>
        </ul>
        <ul className="side-nav" id="mobile-nav">
          <li><NavLink exact activeClassName='active' to='/'>About</NavLink></li>
          <li><NavLink exact activeClassName='active' to='/projects'>Projects</NavLink></li>
          <li>
            <a target="blank_target" href="https://drive.google.com/file/d/0B37QL_eTzWWjUDAxb1Y2akJDSVAtT1MxM2t0WVI4ZEtOLTJB/view?usp=sharing">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavbarNew;
