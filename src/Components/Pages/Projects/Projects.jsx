import Fullpage from '../../Modules/Fullpage/Fullpage'
import './Projects.css'
import { useRef, useState } from 'react';
import ProjectsLanding from './ProjectsLanding';
import ProjectsCard from './ProjectsCard';
import jsonCards from './jsonCards.json';

function Projects() {
  const [fullpageSlideIndex, setFullpageSlideIndex] = useState(0);
  const [fullpageScrollPosition, setFullpageScrollPosition] = useState(0);
  const cards = jsonCards.cards;
  return (
    <div>
      <div className='scroll' style={{ opacity: fullpageScrollPosition < 1 ? '1' : '0' }}></div>
      <Fullpage
        fullpageSlideIndex={fullpageSlideIndex}
        setFullpageSlideIndex={setFullpageSlideIndex}
        fullpageScrollPosition={fullpageScrollPosition}
        setFullpageScrollPosition={setFullpageScrollPosition}>
        <ProjectsLanding />
        {cards.map((card) => (
          <ProjectsCard  
            key={card.id}
            id={card.id}
            name={card.name}
            header={card.header}
            text={card.text}
            languages={card.languages}
            githubLink={card.githubLink}
            deployedLink={card.deployedLink}
            scrollPosition={fullpageScrollPosition}
            index={fullpageSlideIndex}
            />
        ))}
      </Fullpage>
    </div>
  )
}

export default Projects