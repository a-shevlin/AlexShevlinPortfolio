import React, {useState} from "react";
import alex from '../img/alexsmile.png'

function About(props) {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={`navBtnClip about ${open ? "activeAbout": ""}`}onClick={() => setOpen(!open)}>
        {open === false ? (
          <div className="aboutClosed">A</div>
        ) : (
          <div className="aboutCard">
            <h1>About Me</h1>
            
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div>
                  <h6>Web and Mobile Development</h6>
                  <hr />
                  <p>60+ Projects using C#, JS, React, Python, CSS, and SASS</p>
                  <h6>Project Management</h6>
                  <hr />
                  <p>Visualized projects from concept to production and worked closely with other teams to achieve goals together. </p>
                  <h6>Marketing Management</h6>
                  <hr />
                  <p>Improved audio and video editing techniques by creating a baseline standard and organized projects with Notion and Trello to increase productivity and create consistent timelines.</p>
                  <h6>Restaurant Management</h6>
                  <hr />
                  <p>Worked alongside Marketing and Operations Leads to create and test new products and trained 200+ employees across 3 locations to meet and exceed company standards.</p>
                </div>
                <hr />
              </div>
              <div className="col-md">
                <div className="contact">
                  <img src={alex} alt="Image of Alex"/>
                  {/* <h5>Insert contact here links</h5> */}
                </div>
                <div className="blurb">
                <p>Hello, I'm Alex! I am a self taught Full Stack Developer. My previous work experience is in Marketing and Restaurant Management. Building up skills to succeed in both of these fields has allowed me to become an adaptive problem solver. I love expanding on existing skills and applying new concepts to everyday life.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default About;


{/* <article className='about__card'>

  <h3>Experience</h3>
  <h4>5</h4>
  <h5>1 yrs: Technical <br/> 4 yrs: Tech Project Mgmt</h5>
</article>

<article className='about__card'>

  <h3>Clients</h3>
  <h4>25+</h4>
  <h5>world-wide, sized from startup to Fortune 500</h5>
</article>

<article className='about__card'>
  <h3>Projects</h3>
  <h4>50+</h4>
  <h5>across C#, .NET, JS, React and more </h5>
</article> */}