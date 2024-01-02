import './App.css';
import Hero from './Components/Pages/Hero/Hero'
import NavBar from './Components/Components/NavBar/NavBar'
import Projects from './Components/Pages/Portfolio/Portfolio'
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
import ConctactForm from './Components/Components/ContactForm/ConctactForm';

function App() {
  const [indeks, setIndeks] = useState(0);
  const [contactForm, setContactForm] = useState(false);
  const [typeWriter, setTypewriter] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
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
        preventClicks={false}
        focusableElements={'button, div'}
        preventClicksPropagation={false}
        noSwiping={false}
        allowTouchMove={true}
        onSlideChange={
          (e) => { setIndeks(e.realIndex); if(e.realIndex === 2) {setTypewriter(true)}; }
        }
        keyboard={{
          enabled: true,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube]}
        className="swiper"
      >
        <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            bgColor='transparent'
            border='none'
            hoverBgColor='#333'
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            color='var(--light-background)'
            hoverBgColor='var(--light-background)'
            hoverColor='var(--themecolor)'
            button={true}
            btnText='About'
            btnArrow={true}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <NavBar
            setContactForm={setContactForm}
            color='var(--light-background)'
            hoverBgColor='var(--light-background)'
            hoverColor='var(--themecolor)'
            button={true}
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
