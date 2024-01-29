import './AboutLanding.scss'
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
        <div className={`about-landing-wrapper`} style={{ "--backgroundimage": "url(" + bg3 + ")" }}>
            <span className='about-header'>
                <svg className='about-header-svg' viewBox="0 0 100vw 300">
                    <defs>
                        <mask id="mask" className='mask' x="0" y="0" width="100vw" height="100%">
                            <rect className="overlay" x="0" y="0" width="100vw" height="100%" />
                            <text className="text top" x="50vw" y="0">Sigurd</text>
                            <text className="text bottom" x="50vw" y="0">Omnes</text>
                        </mask>
                    </defs>
                    <rect className="r" x="0" y="0" width="100%" height="100%" />
                </svg>
            </span>
        </div>

    );
}

export default AboutLanding;