import IntoViewEffect from '../../../Modules/IntoViewEffect/IntoViewEffect'
import jsonAboutMe from './jsonAboutMe.json'
import meg from '../../../../img/meg2.jpg'
import cv from '../../../../files/CV_Sigurd_Omnes.pdf'

function AboutMe() {
    return (
        <div className='about-me-wrapper'>
            <IntoViewEffect effect='fade-in' margin={50}>
                <div className='about-me-header-container'><h1 className="about-me-header">{jsonAboutMe.aboutMe.header}</h1></div>
            </IntoViewEffect>
            <div className="about-me-content">
                <IntoViewEffect effect='fade-in' margin={50} delay='.5'>
                    <div className="about-me-content-img-container">
                        <img className='about-me-content-img' alt="Sigurd Omnes profile" src={meg} />
                    </div>
                </IntoViewEffect>
                <p className='about-me-content-text'>
                    <IntoViewEffect effect='fade-in' margin={20} delay={.2} threshold={.3}>
                        {jsonAboutMe.aboutMe.text}<br /><br />
                    </IntoViewEffect>
                    <IntoViewEffect effect='fade-in' margin={20} delay={.3} threshold={.3}>
                        {jsonAboutMe.aboutMe.text2}<br /><br />
                    </IntoViewEffect>
                    <IntoViewEffect effect='fade-in' margin={20} delay={.4} threshold={.3}>
                        {jsonAboutMe.aboutMe.text3}<br /><br />
                    </IntoViewEffect>
                    <IntoViewEffect effect='fade-in' margin={20} delay={.5} threshold={.3}>
                        {jsonAboutMe.aboutMe.text4}<br /><br />
                    </IntoViewEffect>
                    <IntoViewEffect effect='fade-in' margin={10} mobileMargin={15} delay={.7} threshold={.3}>
                        {jsonAboutMe.aboutMe.text5}
                    </IntoViewEffect>
                </p>
            </div>
            <a href={cv} download="CV_Sigurd_Omnes">
                <button className='get-my-resume-btn'>Get my resumé</button>
            </a>
        </div>
    )
}

export default AboutMe