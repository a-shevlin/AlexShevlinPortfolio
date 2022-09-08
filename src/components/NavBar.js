import React from 'react';
import Projects from './Projects';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad } from '@fortawesome/free-solid-svg-icons';
import LinkedIn from '../img/linkedin.png';
import slag from '../img/slag.png'

function NavBar() {

  return (
    <React.Fragment>
      <div class="navbar">
        <Projects>
          <h1>My Projects</h1>
          <hr/>
          <h5>SLAG Game</h5>
          <em><p>C#, MVC, CSS, Razor</p></em>
          <img src={slag}/>
          <a href="https://github.com/a-shevlin" target="_blank" class="slag">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a href="https://www.linkedin.com/in/alexshevlin/" target="_blank" class="gameLink">
            <FontAwesomeIcon icon={faGamepad} />
          </a>
        </Projects>
        <About>
          <h1>About Me</h1>
        </About>
        <a href="https://github.com/a-shevlin" target="_blank" class="github">
          <FontAwesomeIcon icon={faCode} />
        </a>
        <a href="https://www.linkedin.com/in/alexshevlin/" target="_blank" class="linkedin">
          <img src={LinkedIn}/>
        </a>
        <a href="#">
          
        </a>
      </div>
    </React.Fragment>
  );
}

export default NavBar;