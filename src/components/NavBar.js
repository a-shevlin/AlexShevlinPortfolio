import React from 'react';
import Projects from './Projects';
import About from './About';

function NavBar() {

  return (
    <React.Fragment>
      <div class="navbar">
        <Projects>
          <p>These are my projects</p>
        </Projects>
        <About>
          <p>About Me</p>
        </About>
      </div>
    </React.Fragment>
  );
}

export default NavBar;