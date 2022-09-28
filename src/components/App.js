import React from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";

function App() {
  return (

    <React.Fragment>
      <div className="container">
        <div className="headNav">
          <Header />
          <NavBar>
          </NavBar>
        </div>
          
        {/* 
        <About />
        <Projects /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
