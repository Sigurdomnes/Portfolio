import AboutLanding from './AboutLanding/AboutLanding'
import AboutMe from './AboutMe/AboutMe'
import Timeline from './Timeline/Timeline'

function About() {
  return (
    <div className='about-wrapper'>
        <AboutLanding />
        <Timeline />
        <AboutMe />
    </div>
  )
}

export default About