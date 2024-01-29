import './App.css'
import Hero from './Components/Pages/Hero/Hero'
import NavBar from './Components/Pages/NavBar/NavBar'
import Socials from './Components/Components/Socials/Socials'
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
import Projects from './Components/Pages/Projects/Projects';
import About from './Components/Pages/About/About'
import { useDispatch } from 'react-redux'
import { setCubeIndex } from './redux/features/cubeIndex/cubeIndexSlice'

function App() {
  const dispatch = useDispatch(); // setCubeIndex
  const [contactFormIsActive, setContactFormIsActive] = useState(false);
  const [navMenuIsActive, setNavMenuIsActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [cubeZoom, setCubeZoom] = useState(false); // Jump effect on cube transition
  const onCubeTransitionStart = () => { // Sets jump effect className on Swiper
    setCubeZoom(true);
  };
  const onCubeTransitionEnd = () => {
    setTimeout(() => {
      setCubeZoom(false);
    }, 350);
  }
  return (
    <div className='App'>
      <Socials />
      <ConctactForm
        setContactFormIsActive={setContactFormIsActive}
        contactFormIsActive={contactFormIsActive} />
      <Swiper
        effect={'cube'}
        grabCursor={false}
        speed={1300}
        onSlideChange={(e) => {dispatch(setCubeIndex(e.realIndex));}}
        onTransitionStart={onCubeTransitionStart}
        onTransitionEnd={onCubeTransitionEnd}
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
        className={cubeZoom ? 'zoom' : ''}
      >
        <SwiperSlide>
          <NavBar
            setContactFormIsActive={setContactFormIsActive}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            bgColor='transparent'
            activeLink={1}
            border='none'
            navMenuIsActive={navMenuIsActive}
            setNavMenuIsActive={setNavMenuIsActive}
          />
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <NavBar
            header='Projects'
            setContactFormIsActive={setContactFormIsActive}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeLink={2}
            navMenuIsActive={navMenuIsActive}
            setNavMenuIsActive={setNavMenuIsActive}
            hide={true}
          />
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <NavBar
            header='About'
            setContactFormIsActive={setContactFormIsActive}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeLink={3}
            navMenuIsActive={navMenuIsActive}
            setNavMenuIsActive={setNavMenuIsActive}
          />
          <About/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;

library.add(fab, fas, far)
