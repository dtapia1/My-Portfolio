import React from 'react';
import * as ReactDOM from "react-dom";

const footerInstance = (
  <div id="connect">
    <footer className="page-footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <a href="mailto:dtapia085@gmail.com"
              target="blank_target"
              className="btn-lg" >
    					<span
                className="fa-lg"
                style={{color:'#DD4B39'}}>
    						      <i className="fa fa-envelope"></i>
    					</span>
    				</a>
    				<a href="https://www.linkedin.com/in/dtapia1/"
              target="blank_target"
              className="btn-lg btn-social-icon btn-linkedin">
    					<span className="fa fa-lg fa-linkedin" style={{color:'#fff'}}></span>
    				</a>
    				<a href="https://github.com/dtapia1"
              target="blank_target"
              className="btn-lg btn-social-icon btn-github">
    					<span className="fa fa-lg fa-github" style={{color:'#fff'}}></span>
    				</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2017 Daniel Tapia
        </div>
      </div>
    </footer>
  </div>
);


ReactDOM.render(footerInstance, document.getElementById('footer'));
