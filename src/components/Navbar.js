import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-second navbar-toggleable-md fixed-top">
    <div className="container nav-container">
			<button className="navbar-toggler navbar-toggler-right custom-toggler mt-2 ml-auto"
        type="button" data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<h1 className="navbar-brand mb-0 pl-2 nav-logo">DT</h1>
			<div id="navbar" className="collapse navbar-collapse">
				<ul className="navbar-nav nav-pills ml-auto mt-2 mt-md-0">
				  <li className="nav-item">
					<a className="nav-link" href="#aboutMe">About<span className="sr-only">(current)</span></a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="#projects">Projects</a>
				  </li>
				  <li className="nav-item">
					<a className="nav-link" href="#connect">Connect</a>
				  </li>
				</ul>
			</div>
    </div>
	</nav>
);

export default Navbar;
// ReactDOM.render(navbarInstance, document.getElementById('nav'));
