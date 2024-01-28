import './AboutLanding.scss'
import meg from '../../../../img/meg.jpg'
import Typewriter from 'typewriter-effect';
import cv from '../../../../Download/CV_Sigurd_Omnes.pdf'
import RoundedBorderButton from '../../../Components/RoundedBorderButton/RoundedBorderButton';
import { useEffect, useState } from 'react';
import bg1 from '../../../../img/meg1.jpg'
import bg2 from '../../../../img/meg2.jpg'
import bg3 from '../../../../img/meg3.jpg'


function AboutLanding(props) {
/*     
    Fix later
    const [backgroundImage, setBackgroundImage] = useState(bg3);

    let i = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            if (i === 0) setBackgroundImage(bg2);
            if (i === 1) setBackgroundImage(bg1);
            if (i === 2) setBackgroundImage(bg3);
            if (i < 2) {
                i++;
            } else {
                i = 0;
            }
          }, 5000);
          return () => clearInterval(interval);
    },[]); */
    return (
        <div className={`about-landing-wrapper`} style={{"--backgroundimage": "url(" + bg3 + ")"}}>
            <span className='about-header'>  
            <svg className='about-header-svg' viewBox="0 0 100vw 300">
                <defs>
                    <mask id="mask" className='mask' x="0" y="0" width="100vw" height="100%">
                        <rect className="overlay" x="0" y="0" width="100vw" height="100%" />
                        <text className="text a" x="50vw" y="0">Sigurd</text>
                        <text className="text b" x="50vw" y="0">Omnes</text>
                    </mask>
                </defs>
                <rect className="r" x="0" y="0" width="100%" height="100%" />
            </svg>
            </span>

            {/*             <div className='scroll-down-arrow' /> */}
            {/*             <div className='about-falling-letters-wrapper'>
                <div className='about-falling-letters-container'>
                    <div className='about-falling-letter abfl1'>S</div>
                    <div className='about-falling-letter abfl2'>i</div>
                    <div className='about-falling-letter abfl3'>g</div>
                    <div className='about-falling-letter abfl4'>u</div>
                    <div className='about-falling-letter abfl5'>r</div>
                    <div className='about-falling-letter abfl6'>d</div>
                    <div className='about-falling-letter abfl7'><FontAwesomeIcon icon="fa-regular fa-face-laugh-squint" /></div>
                </div>
            </div> */}
            <div className='about-landing-content'>
                <div className='about-programming-wrapper'>
                    <div className='about-programming-presentation'>
                        <p>1 <span className="indent1">public class <b>Student</b> &#123;</span></p>
                        <p>2 <span className="indent2">(...)</span></p>
                        <p>3 <span className="indent2"> public Student() &#123;</span></p>
                        <p>4 <span className="indent3"> name = "<b>Sigurd Omnes</b>";</span></p>
                        <p>5 <span className="indent3"> address = "<b>Oslo, Norway</b>";</span></p>
                        <p>6 <span className="indent3"> age = <b>31</b>;</span></p>
                        <p>7 <span className="indent3"> trade = "<b>Computer Engineering</b>";</span></p>
                        <p>8 <span className="indent3"> lang = [<b>HTML, CSS, JS, Java, C/C++, SQL</b>];</span></p>
                        <p>9 <span className="indent3"> tools = [<b>React, Spring Boot, Node.js, Docker</b>];</span></p>
                        <p>10 <span className="indent22">&#125;</span></p>
                        <p>11 <span className="indent22">public static void main (String args[]) &#123;</span></p>
                        <p>12 <span className="indent32">Student sigurd = new Student();</span></p>
                        <p>13 <span className="indent32"><b>System.out.println(sigurd)</b>;</span></p>
                        <p>14 <span className="indent22">&#125;</span></p>
                        <p>15 <span className='indent12'>&#125;</span></p>
                    </div>
                    <img className='meg-img' src={meg} alt=''></img>
                    <div className='about-programming-ide-presentation'>
                        {props.typeWriterIsStarted &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(800)
                                        .typeString('<span style="color: var(--accentcolor); font-family: JetBrainsMono;">Hello world!</span>')
                                        .pauseFor(500)
                                        .typeString('<br/><br/>My name is Sigurd Omnes.')
                                        .pauseFor(200)
                                        .changeDelay(75)
                                        .typeString('<br/><br/>I like staring into the ocean as if I am thinking about something very important.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/>I also like programming, so if you would like to talk about that, please hit me up or download my resumé below.')
                                        .pauseFor(200)
                                        .changeDelay('natural')
                                        .typeString('<br/><br/> In a while,<span style="color: var(--accentcolor); font-family: JetBrainsMono; "><br/>crocodile!</span>')
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
                {/*                     <RoundedBorderButton
                        className='about-resume-btn'
                        text={'Get my resumé'}
                        width='14rem'
                        download={true}
                        downloadFile={cv}
                        fileName="CV_Sigurd_Omnes" /> */}
            </div>
        </div>

    );
}

export default AboutLanding;