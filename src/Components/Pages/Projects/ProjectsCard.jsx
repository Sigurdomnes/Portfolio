import './ProjectsCard.scss'
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectsCard({ scrollPosition, ...props }) {
    // Array of prog languages from json object
    const languages = props.languages;
    // Parallax effect (catches each id's start position)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const id = props.id;
    let top = ((scrollPosition - vh * (id + 1)) * .15) + 'px';

    return (
        <div className={`projects-fullpage-card projects-card ${props.name === "concept" ? 'concept' : '' || props.name === "portfolio" ? 'portfolio' : ''}`}>
            <div className='projects-card-blocker' />
            <div className='content-blocker'>
                <div style={{ transform: `translateY(${top})` }} className={`projects-card-content ${props.id % 2 === 0 ? 'project-cards-switch' : ''}`}>
                    <h1 className='projects-card-header'>{props.header}</h1>
                    <p className='projects-card-par'> {props.text} </p>
                    <div className='projects-card-lang-container'>
                        <div className={`projects-card-lang-pct-bar ${props.name === 'portfolio' ? 'portfolio-pct' : '' || props.name === 'concept' ? 'concept-pct' : ''}`} />
                        {languages.map((language) => (
                            <p key={language.id}
                                className={`projects-lang-bullet ${language.name === 'JavaScript' ? 'lang-js' : '' || language.name === 'HTML' ? 'lang-html' : ''} `}>
                                {language.name}<span className='projects-lang-pct'>{language.percent}</span>
                            </p>
                        ))}
                        {props.name === 'portfolio' && <p className='projects-framework'><FontAwesomeIcon className='framework-icon' icon="fa-brands fa-react" />React</p>}
                    </div>
                    <div className='projects-card-btn-container'>
                        {props.deployedLink && <a href={props.deployedLink}><button className='projects-card-btn'><FontAwesomeIcon icon="fa-solid fa-globe" className="projects-card-btn-icon" />Deployed</button></a>}
                        {props.githubLink && <a href={props.githubLink}><button className='projects-card-btn'><FontAwesomeIcon icon="fa-brands fa-github" className='projects-card-btn-icon' />Github</button></a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard