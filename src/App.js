import './App.css';
import Hero from './Components/Pages/Hero/Hero'
import NavBar from './Components/Pages/NavBar/NavBar'
import Portfolio from './Components/Pages/Portfolio/Portfolio'
import Socials from './Components/Components/Socials/Socials'
import About from './Components/Pages/About/About';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube } from 'swiper/modules';
import { useState } from 'react';
import ConctactForm from './Components/Components/ContactForm/ContactForm';
import Fullpage from './Components/Modules/Fullpage/Fullpage';
import Projects from './Components/Pages/Projects/Projects';

function App() {
  const [indeks, setIndeks] = useState(0);
  const [contactForm, setContactForm] = useState(false);
  const [typeWriter, setTypewriter] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [slideZoom, setSlideZoom] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const onTransitionStart = () => {
    setSlideZoom(true);
  };
  const onTransitionEnd = () => {
    setTimeout(() => {
      setSlideZoom(false);
    }, 350);
  }

  return (
    <div className='App'>
      <Socials
        show={indeks === 0}
      />
      <ConctactForm
        setContactForm={setContactForm}
        contactForm={contactForm} />
      <Swiper
        effect={'cube'}
        grabCursor={false}
        speed={1300}
        onSlideChange={
          (e) => { setIndeks(e.realIndex); if (e.realIndex === 2) { setTypewriter(true) }; }
        }
        onTransitionStart={onTransitionStart}
        onTransitionEnd={onTransitionEnd}
        allowTouchMove={false}
        keyboard={{
          enabled: true,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 0.3
        }}
        modules={[EffectCube]}
        className={slideZoom ? 'zoom' : ''}
      >
        <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            bgColor='transparent'
            activeLink={1}
            border='none'
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          <Hero
            show={indeks === 0}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            button={true}
            activeLink={2}
            btnText='About'
            btnArrow={true}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          <Projects />
        </SwiperSlide>
        {/* <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            button={true}
            activeLink={2}
            btnText='About'
            btnArrow={true}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          <Portfolio />
      </SwiperSlide> */}
        <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            button={true}
            activeLink={3}
            btnText='Get my resumé'
            btnDownload={true}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          <About
            indeks={typeWriter}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;

library.add(fab, fas, far)
