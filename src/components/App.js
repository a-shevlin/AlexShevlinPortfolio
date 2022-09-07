import React from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import About from "./About.js";
import Projects from "./Projects.js";

function App() {
  return (

    <React.Fragment>
      <div class="container">
        <div class="headNav">
          <Header />
          <NavBar />
        </div>
          
        {/* 
        <About />
        <Projects /> */}
        <div class="cursor"></div>
      </div>
    </React.Fragment>
  );
}

export default App;
