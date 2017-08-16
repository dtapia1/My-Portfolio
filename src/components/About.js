import React from 'react';
import udacityLogo from '../udacity.svg';
import treehouseLogo from '../treehouse.svg';
import { Jumbotron, Grid, Row } from 'react-bootstrap';

const About = () => (
  <div id="aboutMe">
    <Jumbotron className='gradient'>
      <div className='jumbo-container'>
        <div className='jumbo-text flow-text text-center'>
          <h1 className='mb-4 jumbo-title'>Hi, I'm Daniel.</h1>
          <p className="text-center">I'm a software developer who specializes in responsive web design and Android development.</p>
          <a className="waves-effect waves-light btn mt-4 resume-btn"
            target="blank_target"
            href="https://drive.google.com/file/d/0B37QL_eTzWWjUDAxb1Y2akJDSVAtT1MxM2t0WVI4ZEtOLTJB/view?usp=sharing">
            R&#233;sum&#233;</a>
        </div>
      </div>
    </Jumbotron>

    <section className="skills">
      <Skills />
    </section>

    <section className="education">
      <Grid>
        <h2 className="header">
          <span className="fa fa-graduation-cap fa-1x" aria-hidden="true"></span> Education
        </h2>
        <Education />
      </Grid>
    </section>
  </div>
);

const Skills = () => (
  <Grid>
    <h2 className="skills-header">
      <span className="fa fa-code fa-1x" aria-hidden="true"></span> Skills
    </h2>
    <Row className='mt-4 mb-0 main-text'>

     <div className="col-sm-6 col-md-4 m7">
       <div className="card hoverable">
         <div className="card-header red lighten-2">
           <h4>Front End</h4>
         </div>
         <div className="card-content">
           <ul>
             <li>JavaScript (ES6)</li>
             <li>HTML5</li>
             <li>CSS3</li>
             <li>Bootstrap 4</li>
             <li>Responsive Web Design</li>
           </ul>
         </div>
       </div>
     </div>

     <div className="col-sm-6 col-md-4 m7">
       <div className="card hoverable">
         <div className="card-header amber darken-2">
           <h4>Back End</h4>
         </div>
         <div className="card-content">
           <ul>
             <li>Java</li>
             <li>SQL</li>
             <li>Firebase</li>
           </ul>
         </div>
       </div>
     </div>

     <div className="col-sm-12 col-md-4 m7">
       <div className="card hoverable">
         <div className="card-header green darken-1">
           <h4>Android</h4>
         </div>
         <div className="card-content">
           <ul className="mb-0">
             <li>SQLite</li>
             <li>XML</li>
             <li>ButterKnife</li>
             <li>Material Design</li>
           </ul>
         </div>
       </div>
     </div>
    </Row>
  </Grid>
);

const Education = () => (
  <ul className="collection education-list main-text">
    <li className="collection-item">
      <div>
        <span><h5 className="title">Angelo State University</h5>
          <img className="asu-logo secondary-content" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Angelo_State_University_logo.svg" alt="udacity logo"></img>
        </span>
        <p>B.S. in Computer Science</p>
      </div>
    </li>
    <li className="collection-item">
      <div>
        <span><h5 className="title">Udacity</h5>
          <img className="udacity-logo secondary-content avatar" src={udacityLogo} alt="udacity logo"></img>
        </span>
        <p>Front-End Development <br/>
          Advanced Android Development
        </p>
      </div>
    </li>
    <li className="collection-item">
      <div>
        <span><h5 className="title">Treehouse</h5>
          <img className="treehouse-logo secondary-content" src={treehouseLogo} alt="udacity logo"></img>
        </span>
        <p>Learn React <br/>
          Intermediate Android Development
        </p>
      </div>
    </li>
  </ul>
);

export default About;
