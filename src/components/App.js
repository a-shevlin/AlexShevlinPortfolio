import React from "react";
import NavBar from "./NavBar.js";
import About from "./About.js";
import Projects from "./Projects.js";

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <NavBar />
        <About />
        <Projects />
      </div>
    </React.Fragment>
  );
}

export default App;
