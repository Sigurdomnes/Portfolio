import './About.css'
import './AboutFallingLetters.css'
import meg from '../../../img/meg.jpg'
import Typewriter from 'typewriter-effect';
import cv from '../../../Download/CV_Sigurd_Omnes.pdf'
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About(props) {
    const [scrollPosition, setScrollPosition] = useState("0px");

    const onScrollCatchPosition = (e) => {
        setScrollPosition(e.target.scrollTop + "px");
        console.log(scrollPosition);
    }
    return (
        <div className={'about-wrapper'} onScroll={(e) => { onScrollCatchPosition(e); }}>
            <div className="about-content">
                <div className='about-falling-letters-wrapper' style={{ '--scrollposition': scrollPosition }}>
                    {props.indeks && <h1 className='about-falling-letters-container'>
                        <div className='about-falling-letter abfl1'>S</div>
                        <div className='about-falling-letter abfl2'>i</div>
                        <div className='about-falling-letter abfl3'>g</div>
                        <div className='about-falling-letter abfl4'>u</div>
                        <div className='about-falling-letter abfl5'>r</div>
                        <div className='about-falling-letter abfl6'>d</div>
                        <div className='about-falling-letter abfl7'><FontAwesomeIcon icon="fa-regular fa-face-laugh-squint" /></div>
                    </h1>}
                </div>
                <div className='about-page'>
                <img className='about-img' src={meg} />
                </div>
            </div>






            {/* <div className='about-content'>
                <h1 className='about-h1'>Sigurd Omnes</h1>
                <p className='about-par'>Computer Engineering student</p>
                <div className='about-programming-wrapper'>
                    <div className='about-programming-presentation'>
                        <p>1 <div className="indent1">public class <b>Student</b> &#123;</div></p>
                        <p>2 <div className="indent2">(...)</div></p>
                        <p>3 <div className="indent2"> public Student() &#123;</div></p>
                        <p>4 <div className="indent3"> name = "<b>Sigurd Omnes</b>";</div></p>
                        <p>5 <div className="indent3"> address = "<b>Oslo, Norway</b>";</div></p>
                        <p>6 <div className="indent3"> age = <b>31</b>;</div></p>
                        <p>7 <div className="indent3"> trade = "<b>Computer Engineering</b>";</div></p>
                        <p>8 <div className="indent3"> lang = [<b>HTML, CSS, JS, Java, C/C++, SQL</b>];</div></p>
                        <p>9 <div className="indent3"> tools = [<b>React, Spring Boot, Node.js, Docker</b>];</div></p>
                        <p>10 <div className="indent22">&#125;</div></p>
                        <p>11 <div className="indent22">public static void main (String args[]) &#123;</div></p>
                        <p>12 <div className="indent32">Student sigurd = new Student();</div></p>
                        <p>13 <div className="indent32"><b>System.out.println(sigurd)</b>;</div></p>
                        <p>14 <div className="indent22">&#125;</div></p>
                        <p>15 <div className='indent12'>&#125;</div></p>
                    </div>
                    <img className='meg-img' src={meg} alt=''></img>
                    <div className='about-programming-ide-presentation'>
                        {props.indeks &&
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(800)
                                        .typeString('<div style="color: var(--accentcolor); font-family: JetBrainsMono;">Hello world!</div>')
                                        .pauseFor(500)
                                        .typeString(' My name is Sigurd Omnes.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/> I like staring into the ocean as if I am thinking about something very important.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/> I also like programming, so if you would like to talk about that, please hit me up or download my resumé below.')
                                        .pauseFor(200)
                                        .typeString('<br/><br/> In a while, <div style="color: var(--accentcolor); font-family: JetBrainsMono; ">crocodile!</div>')
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
                text={'Get my resumé'}
                width='15rem'
                download={true}
                downloadFile={cv}
                    fileName="CV_Sigurd_Omnes" /> */}
        </div>

    );
}

export default About;