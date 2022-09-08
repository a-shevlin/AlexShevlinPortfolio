import React, {useState} from "react";

function Projects(props) {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div class={`navBtnClip project ${open ? "activeProject": ""}`}onClick={() => setOpen(!open)}>
        {open && props.children}
      </div>
    </React.Fragment>
  );
}

export default Projects;