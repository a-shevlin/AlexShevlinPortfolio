import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad } from '@fortawesome/free-solid-svg-icons';
import slag from '../img/slag.png'
import reddit from '../img/reddit.png'
import gpp from '../img/game-product-page.png'
import clicker from '../img/pov_1.png'
import wip from '../img/wip.png'

const data = [
  {
    id: 1,
    img: gpp,
    title: "Game Product Page",
    lang: "React, Tailwind, Firebase",
    github: "https://github.com/a-shevlin/doughnut-react",
    host: "https://doughnut-clicker.web.app/",
  },
  {
    id: 2,
    img: clicker,
    title: "Doughnut Clicker alpha-v1.0",
    lang: "Python",
    github: "https://github.com/a-shevlin/doughnut-clicker",
    host: "https://doughnut-clicker.web.app/",
  },
  {
    id: 3,
    img: reddit,
    title: "React Reddit Clone",
    lang: "JavaScript, React, CSS, HTML",
    github: "https://github.com/a-shevlin/reddit-clone",
    host: "https://github.com/a-shevlin/reddit-clone",
  },
  {
    id: 4,
    img: slag,
    title: "S.L.A.G. Game",
    lang: "C#, MVC, CSS, Razor",
    github: "https://github.com/a-shevlin/slagclient",
    host: "https://slaggame.azurewebsites.net/",
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
          <div className="projClosed">P</div>
        ) : (
          <div className="projOpen">
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