import { useSwiper } from 'swiper/react';
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import './About.css'
import meg from '../../../img/meg.jpg'
import Typewriter from 'typewriter-effect';

function About(props) {
    const swiper = useSwiper();
    return (
        <div className='about-wrapper'>
            <div className='about-content'>
            <h1 className='about-h1'>Sigurd Omnes</h1>
            <p className='about-par'>Computer Engineering student</p>
                <div className='about-programming-wrapper'>
                    <div className='about-programming-presentation'>
                        <p>1 <span className="indent1">public class <b>Student</b> &#123;</span></p>
                        <p>2 <span className="indent2">(...)</span></p>
                        <p>3 <span className="indent2"> public Student() &#123;</span></p>
                        <p>4 <span className="indent3"> name = "<b>Sigurd Omnes</b>";</span></p>
                        <p>5 <span className="indent3"> address = "<b>Oslo, Norway</b>";</span></p>
                        <p>6 <span className="indent3"> age = <b>31</b>;</span></p>
                        <p>7 <span className="indent3"> trade = "<b>Computer Engineering</b>";</span></p>
                        <p>8 <span className="indent3"> lang = [<b>HTML, CSS, JS, Java, Python, SQL</b>];</span></p>
                        <p>9 <span className="indent3"> libs = [<b>React, Spring Boot, ASP.NET</b>];</span></p>
                        <p>10 <span className="indent22">&#125;</span></p>
                        <p>11 <span className="indent22">public static void main (String args[]) &#123;</span></p>
                        <p>12 <span className="indent32">Student sigurd = new Student();</span></p>
                        <p>13 <span className="indent32"><b>System.out.println(sigurd)</b>;</span></p>
                        <p>14 <span className="indent22">&#125;</span></p>
                        <p>15 <span className='indent12'>&#125;</span></p>
                    </div>
                    <img className='meg-img' src={meg}></img>
                    <div className='about-programming-ide-presentation'>
                        {props.indeks &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(800)
                                        .typeString('<span style="color: #d6b600; font-family: JetBrainsMono;">Hello world!</span>')
                                        .pauseFor(500)
                                        .typeString(' My name is Sigurd Omnes.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/> I like staring into the ocean as if I am thinking about something very important.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/> I also like programming, so if you would like to talk about that, please hit me up or download my resumé below.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/> In a while, <span style="color: #d6b600; font-family: JetBrainsMono; ">crocodile!</span>')
                                        .start();
                                }}
                                options={{
                                    wrapperClassName: 'typeWriterText',
                                    cursorClassName: 'typeWriterCursor'
                                }}
                            />
                        }
                    </div>
                </div>
            </div>
            <RoundedBorderButton
                className='about-resume-btn'
                color='var(--light-background)'
                bgColor='#191b22'
                hoverFill='var(--accentcolor)'
                hoverColor='var(--themecolor)'
                text={'Get my resumé'}
                width='15rem'
                height='3.5rem'
                download={true}
                onClick={() => { swiper.slideTo(2); }} />
        </div>

    );
}

export default About;