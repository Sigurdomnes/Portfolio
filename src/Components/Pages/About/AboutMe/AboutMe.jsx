import IntoViewEffect from '../../../Modules/IntoViewEffect/IntoViewEffect'
import './AboutMe.scss'

function AboutMe() {
  return (
    <div className='about-me-wrapper'>
        <IntoViewEffect effect='fade-in' margin={30}>
        <h1 className="about-me-header">Hello, I am Sigurd</h1>
        </IntoViewEffect>
        <div className="about-me-content">
            <IntoViewEffect effect='fade-in' margin={30} delay={.5}>
            <p>I am a university student from Oslo, Norway. Currently studying Computer Engineering.</p>
            </IntoViewEffect>
        </div>
    </div>
  )
}

export default AboutMe