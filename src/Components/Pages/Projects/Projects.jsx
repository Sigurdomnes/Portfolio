import FullpageScroll from '../../Modules/FullpageScroll/FullpageScroll'
import { useState } from 'react';
import ProjectsLanding from './ProjectsLanding/ProjectsLanding';
import ProjectCard from './ProjectsCards/ProjectsCard';
import jsonCards from './jsonProjectCards.json';

function Projects() {
  const [fullpageSlideIndex, setFullpageSlideIndex] = useState(0);
  const [fullpageScrollPosition, setFullpageScrollPosition] = useState(0);
  const cards = jsonCards.project_cards;
  return (
    <div>
      <FullpageScroll
        fullpageSlideIndex={fullpageSlideIndex}
        setFullpageSlideIndex={setFullpageSlideIndex}
        fullpageScrollPosition={fullpageScrollPosition}
        setFullpageScrollPosition={setFullpageScrollPosition}>
        <ProjectsLanding />
        {cards.map((card) => (
          <ProjectCard  
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
      </FullpageScroll>
    </div>
  )
}

export default Projects