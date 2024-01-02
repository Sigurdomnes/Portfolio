import './Hero.css'
import avatar from '../../../img/avatar.png'
import { useSwiper } from 'swiper/react';
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';

function Hero() {
    const swiper = useSwiper();
    return (
        <div className='hero-wrapper'>
            <div className='hero-content'>
                <h1 className='hero-content-center-header'>
                    Sigurd Omnes
                </h1>
                <img className='img' src={avatar} alt={'Person'} />
                <br /> <br />
                <p className='hero-content-center-par'>Computer engineer / Full stack developer</p>
                <br /> <br />
                <RoundedBorderButton 
                 text="Projects"
                 arrow={true} 
                 width='14rem' 
                 hoverColor='var(--accentcolor)'
                 color='var(--dark-text)'
                 hoverFill='var(--accentcolor)'
                 arrowHoverColor='var(--light-background)'
                 onClick={() => { swiper.slideTo(1); }}/>
            </div>
        </div>
    );
}

export default Hero;