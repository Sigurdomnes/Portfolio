import './Projects.scss'
import './ProjectsLanding.scss'
import landingimg from '../../../img/projectslanding.svg'
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import { useSwiper } from 'swiper/react';

function ProjectsLanding() {
    const swiper = useSwiper();
    return (
        <div className='projects-fullpage-card projects-landing'>
            <div className='nextarrow'>About<span className='arrow'></span></div>
            <div className='nextarrow left'>Home<span className='arrow'></span></div>
            <div className='projects-landing-content'>
                <img className='landing-img' alt='' src={landingimg} />
                <h1 className='projects-landing-header'>Experience:</h1>
                <div className='project-landing-skills-card'>
                    <div className='projects-landing-skills skills-css'>CSS</div>
                    <div className='projects-landing-skills skills-js'>JavaScript</div>
                    <div className='projects-landing-skills skills-java'>Java</div>
                    <div className='projects-landing-skills skills-python'>Python</div>
                    <div className='projects-landing-skills skills-react'>React</div>
                    <div className='projects-landing-skills skills-python'>Spring Boot</div>
                    <div className='projects-landing-skills skills-nodejs'>Node.js</div>
                    <div className='projects-landing-skills skills-python'>SQL</div>
                </div>
                <RoundedBorderButton
                    className='projects-contact-btn'
                    text={'About'}
                    arrow={true}
                    width='15rem'
                    height='3rem'
                    onClick={() => { swiper.slideTo(2); }} />
                <p className='projects-landing-par'>I create dynamic and responsive front-ends with scalable and stable back-ends. Not a designer or content creator.
                 <br /><br /><span className='projects-landing-strong'>See my projects below!</span></p>
            </div>
        </div>
    )
}

export default ProjectsLanding