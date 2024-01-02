import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSwiper } from 'swiper/react';
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import useClickOutside from '../../Hooks/useClickOutside';

const NavBar = ({ setContactForm, navMenu, setNavMenu, ...props }) => {
    const { clickOutsideRef } = useClickOutside(setNavMenu);
    const onClickContactLink = () => {
        setContactForm(true)
    }
    const swiper = useSwiper();
    return (
        <div className='navbar-wrapper' style={{ '--color': props.color, '--hover-bg-color': props.hoverBgColor, '--hover-color': props.hoverColor  }}>
            <div className='navbar-content' style={{ backgroundColor: props.bgColor, border: props.border }}>
                <div className={`navbar-logo`} onClick={() => { swiper.slideTo(0); setNavMenu(false); }}>S</div>
                <div className='navmenu-wrapper'>
                    <ul ref={clickOutsideRef} className={`navmenu-links-container ${navMenu ? "active" : "inactive"}`} onClick={() => { setNavMenu(false); }} >
                        <li className='navmenu-links' onClick={() => { swiper.slideTo(0); setNavMenu(false); }}><FontAwesomeIcon className='icon' icon="fa-solid fa-house-chimney-user" />Home</li>
                        <li className='navmenu-links' onClick={() => { swiper.slideTo(1); setNavMenu(false); }}><FontAwesomeIcon className='icon' icon="fa-solid fa-briefcase" />Portfolio</li>
                        <li className='navmenu-links' onClick={() => { swiper.slideTo(2); setNavMenu(false); }}><FontAwesomeIcon className='icon' icon="fa-solid fa-address-card" />About</li>
                        <li className='navmenu-contact-link' onClick={onClickContactLink}>Hit me up</li>
                        <li className='navmenu-links navmenu-contact-link-mobile' onClick={() => { onClickContactLink(); }} ><FontAwesomeIcon className='icon' icon="fa-solid fa-address-book" />Contact</li>
                    </ul>
                    <button className='navmenu-collapse-btn'>
                        <FontAwesomeIcon className={`collapse-icon-open ${navMenu ? "inactive" : "active"}`} icon="fas fa-bars" onClick={() => { setNavMenu(true); }} />
                        <FontAwesomeIcon className={`collapse-icon-close ${navMenu ? "active" : "inactive"}`} icon="fas fa-times" onClick={() => { setNavMenu(false); }} />
                    </button>
                    {props.button &&
                        <RoundedBorderButton
                            className='navbar-mobile-nextpg-btn'
                            color='var(--light-background)'
                            bgColor='#191b22'
                            hoverColor='#222'
                            text={props.btnText}
                            arrow={props.btnArrow}
                            download={props.btnDownload}
                            width='15rem'
                            height='3.5rem'
                            onClick={() => { swiper.slideTo(2); setNavMenu(false); }} />}
                </div>
            </div>
        </div>
    );
}

export default NavBar;