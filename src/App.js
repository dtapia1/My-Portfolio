import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import NavbarNew from './components/NavbarNew';
import './components/Navbar.js'
import './components/Footer.js'
import About from './components/About';
import Projects from './components/Projects';

const App = () => (
    <BrowserRouter>
      <div className="app">
        <NavbarNew/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route render={() => {
              return <p>Not Found</p>
            }} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default App;
