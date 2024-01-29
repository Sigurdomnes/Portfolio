import './Hero.scss'
import avatar from '../../../img/avatar.svg'
import { useSwiper } from 'swiper/react';
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import HexagonBackground from '../../Components/HexagonBackground/HexagonBackground';

function Hero() {
    const swiper = useSwiper();
    return (
        <div className='hero-wrapper'>
            <HexagonBackground />
            <div className='hero-content'>
                <h1 className='hero-content-center-header'>
                    Sigurd Omnes
                </h1>
                <img className='hero-img' src={avatar} alt={'Sigurd Omnes on a stand-up paddleboard by Tjuvholmen, Oslo.'} />
                <p className='hero-content-center-par'>Computer engineer / Full stack developer</p>
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