import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSwiper } from 'swiper/react';
import useClickOutside from '../../Hooks/useClickOutside';
import { useEffect, useState } from 'react';
import DarkModeToggleBtn from '../../Components/DarkModeToggleBtn/DarkModeToggleBtn';

const NavBar = ({ setContactFormIsActive, navMenuIsActive, setNavMenuIsActive, darkMode, setDarkMode, index, ...props }) => {
    const { clickOutsideRef } = useClickOutside(setNavMenuIsActive);
    const onClickContactLink = () => {
        setContactFormIsActive(true);
    }
    // Fix later
    const [toggle, setToggle] = useState(navMenuIsActive)
    useEffect(() => setToggle(navMenuIsActive), [navMenuIsActive])
    const onClickMenu = () => {
            setNavMenuIsActive(!toggle);
    }
    const toggleDarkMode = () => {
        if (darkMode) {
            setDarkMode(false);
            document.documentElement.style.setProperty('--themecolor', '#dfe3ee');
            document.documentElement.style.setProperty('--light-color', '#333');
            document.documentElement.style.setProperty('--dark-color', '#ddd');
            document.documentElement.style.setProperty('--hexagonbackground', '#696969dc');
        } else {
            setDarkMode(true);
            document.documentElement.style.setProperty('--themecolor', '#1f2125');
            document.documentElement.style.setProperty('--light-color', '#ddd');
            document.documentElement.style.setProperty('--dark-color', '#222');
            document.documentElement.style.setProperty('--hexagonbackground', '#000000dc');
        }
    }
    const swiper = useSwiper();
    return (
        <nav className='navbar-wrapper' style={{ '--color': props.color, '--hover-bg-color': props.hoverBgColor, '--hover-color': props.hoverColor }}>
            <div className={`navbar-content ${props.hide ? 'hide' : ''}`} style={{ backgroundColor: props.bgColor, border: props.border }}>
                <div className='mobile-top-wrapper'>
                    <div className={`navbar-logo  ${props.activeLink !== 1 ? 'navbar-logo-mobile' : ''}`} onClick={() => { swiper.slideTo(0); setNavMenuIsActive(false); }}>S</div>
                    <h1 className='navbar-header'>{props.header}</h1>
                    {props.activeLink === 1 && <DarkModeToggleBtn className='dark-mode-toggle-btn' onClick={toggleDarkMode} checked={darkMode} />}
                </div>
                <div className='navmenu-wrapper'>
                    <ul ref={clickOutsideRef} className={`navmenu-links-container ${navMenuIsActive ? "active" : "inactive"}`} onClick={() => { setNavMenuIsActive(false); setToggle(false); }} >
                        <li className={`navmenu-links  ${props.activeLink === 1 ? "active" : ""}`} onClick={() => { swiper.slideTo(0); setNavMenuIsActive(false); }}><FontAwesomeIcon className='icon' icon="fa-solid fa-house-chimney-user" />Home</li>
                        <li className={`navmenu-links  ${props.activeLink === 2 ? "active" : ""}`} onClick={() => { swiper.slideTo(1); setNavMenuIsActive(false); }}><FontAwesomeIcon className='icon' icon="fa-solid fa-briefcase" />Projects</li>
                        <li className={`navmenu-links  ${props.activeLink === 3 ? "active" : ""}`} onClick={() => { swiper.slideTo(2); setNavMenuIsActive(false); }}><FontAwesomeIcon className='icon' icon="fa-solid fa-address-card" />About</li>
                        <li className='navmenu-links navmenu-contact-link-mobile' onClick={() => { onClickContactLink(); }} ><FontAwesomeIcon className='icon' icon="fa-solid fa-address-book" />Contact</li>
                        <li className='navmenu-contact-link' onClick={onClickContactLink}>Hit me up</li>
                    </ul>
                    <button className={`navmenu-btn collapse-btn ${navMenuIsActive ? "opened" : ""}`} onClick={onClickMenu}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                    <div className='nextarrow'>About<span className='arrow'></span></div>
                    <div className='nextarrow left'>Home<span className='arrow'></span></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;