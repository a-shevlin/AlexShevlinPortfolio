import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad } from '@fortawesome/free-solid-svg-icons';
import slag from '../img/slag.png'

const data = [
  {
    id: 1,
    img: slag,
    title: "React Reddit Clone",
    lang: "JavaScript, React, CSS, HTML",
    github: "https://github.com/a-shevlin",
    host: "https://github.com/a-shevlin",
  },
  {
    id: 2,
    img: slag,
    title: "S.L.A.G. Game",
    lang: "C#, MVC, CSS, Razor",
    github: "https://github.com/a-shevlin/slagclient",
    host: "https://slaggame.azurewebsites.net/",
  },
  {
    id: 3,
    img: slag,
    title: "WIP Doughnut Clicker",
    lang: "Python",
    github: "https://github.com/a-shevlin/doughnut-clicker",
    host: "https://github.com/a-shevlin/doughnut-clicker",
  },
  {
    id: 4,
    img: slag,
    title: "Pig Dice",
    lang: "JavaScript, CSS, HTML",
    github: "https://github.com/a-shevlin",
    host: "https://github.com/a-shevlin",
  },
  // {
  //   id: 5,
  //   img: slag,
  //   title: "Proj Title",
  //   lang: "lang",
  //   github: "https://github.com/a-shevlin",
  //   host: "https://github.com/a-shevlin",
  // },
]


function Projects(props) {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={`navBtnClip project ${open ? "activeProject": ""}`}onClick={() => setOpen(!open)}>
        {open === false ? (
          <div></div>
        ) : (
          <div>
            <h1>My Projects</h1>
            <hr/>
            {
              data.map(({id, img, title, lang, github, host}) => {
                return (
                  <div className="proj-card">
                    <img src={img} alt={"picture of " + title} />
                    <h5>{title}</h5>
                    <p>{lang}</p>
                    <a href={github} target="_blank" rel="noreferrer" className="ghLogo">
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                    <a href={host} target="_blank" rel="noreferrer" className="gameLink">
                      <FontAwesomeIcon icon={faGamepad} />
                    </a>
                    <hr />
                  </div>
                )
              })
            }
          </div>
        )
        }
      </div>
    </React.Fragment>
  );
}

export default Projects;