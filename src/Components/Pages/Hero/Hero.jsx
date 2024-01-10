import './Hero.css'
import avatar from '../../../img/avatar.svg'
import { useSwiper } from 'swiper/react';
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import DrifterStars from '@devil7softwares/react-drifter-stars'

function Hero(props) {
    const swiper = useSwiper();
    return (
        <div className='hero-wrapper'>
            {props.show &&
            <DrifterStars 
            color='#5fac86'
            blurSize='0'
            />}
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