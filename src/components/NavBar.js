import React from 'react';
import Projects from './Projects';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad } from '@fortawesome/free-solid-svg-icons';
import LinkedIn from '../img/linkedin.png';

function NavBar() {

  return (
    <React.Fragment>
      <div className="navbar">
        <Projects />
        <About />
        <a href="https://github.com/a-shevlin" target="_blank" className="github">
          <FontAwesomeIcon icon={faCode} />
        </a>
        <a href="https://www.linkedin.com/in/alexshevlin/" target="_blank" className="linkedin">
          <img src={LinkedIn}/>
        </a>
        <a href="#">
          
        </a>
      </div>
    </React.Fragment>
  );
}

export default NavBar;