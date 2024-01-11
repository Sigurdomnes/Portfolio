import Fullpage from '../../Modules/Fullpage/Fullpage'
import './Projects.css'
import { useState } from 'react';
import ProjectsLanding from './ProjectsLanding';
import ProjectsCard from './ProjectsCard';

function Projects() {
  const [fullpageSlideIndex, setFullpageSlideIndex] = useState(0);
  const [fullpageScrollPosition, setFullpageScrollPosition] = useState(0);
  return (
    <div>
      <div className='scroll' style={{ opacity: fullpageScrollPosition < 1 ? '1' : '0' }}></div>
      <Fullpage
        fullpageSlideIndex={fullpageSlideIndex}
        setFullpageSlideIndex={setFullpageSlideIndex}
        fullpageScrollPosition={fullpageScrollPosition}
        setFullpageScrollPosition={setFullpageScrollPosition}>
        <ProjectsLanding />
        <ProjectsCard portfolio
          header="Portfolio website"
          text="This website is written from scratch in React."
          text2="The responsive fullpage-scroll module you are currently using to view these projects was written by me with JavaScript."
          text3="Dive into the code if you'd like!"
        />
        <ProjectsCard consept />
      </Fullpage>
    </div>
  )
}

export default Projects