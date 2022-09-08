import React, {useState} from "react";

function About(props) {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div class={`navBtnClip about ${open ? "activeAbout": ""}`}onClick={() => setOpen(!open)}>
        {open && props.children}
      </div>
    </React.Fragment>
  );
}

export default About;