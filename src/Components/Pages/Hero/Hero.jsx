import './Hero.css'
import '../About/AboutFallingLetters.css'
import avatar from '../../../img/avatar.svg'
import { useSwiper } from 'swiper/react';
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import DrifterStars from '@devil7softwares/react-drifter-stars'
import HexagonBackground from '../../Components/HexagonBackground/HexagonBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero(props) {
    const swiper = useSwiper();
    return (
        <div className='hero-wrapper'>
            <HexagonBackground />
            <div className='hero-content'>
                <h1 className='hero-content-center-header'>
                    Sigurd Omnes
                </h1>
                <br /><br />
                <img className='img' src={avatar} alt={'Person'} />
                <br /> <br />
                <p className='hero-content-center-par'>Computer engineer / Full stack developer</p>
                <br /> <br />
                <RoundedBorderButton
                    text="Projects"
                    arrow={true}
                    width='14rem'
                    onClick={() => { swiper.slideTo(1); }} />
            </div>
        </div>
    );
}

export default Hero;