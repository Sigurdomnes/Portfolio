import Fullpage from '../../Modules/Fullpage/Fullpage'
import './Projects.css'

function Projects(props) {
  return (
    <div>
        <Fullpage>
            <div className='projects-card projects-landing'>
                <h1 className='projects-landing-header'>Projects</h1>
            </div>
            <div className='projects-card portfolio-website'></div>
        </Fullpage>
    </div>
  )
}

export default Projects