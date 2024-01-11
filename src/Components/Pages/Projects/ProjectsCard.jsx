import './ProjectsCard.css'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectsCard(props) {
    return (
        <div className={`projects-fullpage-card projects-card ${props.portfolio ? 'portfolio' : '' || props.consept ? 'consept' : ''}`}>
            <div className='projects-card-blocker' />
            <div className='projects-card-content'>
                <h1 className='projects-card-header'>{props.header}</h1>
                <p className='projects-card-par'>
                    {props.text}<br />{props.text2}<br /><br />{props.text3}
                </p>
                {props.portfolio && <div> <div className="projects-card-portfolio-lang-pct"></div>
                <p className='projects-lang-bullet lang-css'>CSS</p>
                <p className='projects-lang-bullet lang-js'>JavaScript</p>
                <p className='projects-lang-bullet lang-html'>HTML</p>
                <p className='projects-framework'><FontAwesomeIcon className='framework-icon' icon="fa-brands fa-react" />React</p>
                </div>
                }
                <div className='projects-card-btn-container'>
                    <button className='projects-card-btn'>Github</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard