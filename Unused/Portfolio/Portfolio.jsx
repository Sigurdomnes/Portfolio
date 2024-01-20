import BasicCards from '../../Components/BasicCards/BasicCards';
import './Portfolio.css'
import basic from '../../../img/basichtmlcss.png'
import pfl from '../../../img/portfolio.png'
import github from '../../../img/github.jpg'
import db from '../../../img/dumbbells.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedBorderButton from '../../Components/RoundedBorderButton/RoundedBorderButton';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useState } from 'react';

function Portfolio() {
    const swiper = useSwiper();
    const [index, setIndex] = useState(0);
    return (
        <div className='portfolio-wrapper'>
            <h1 className='portfolio-h1'>Portfolio</h1>
            <p className='portfolio-par'>Check out some of my projects that are available to view:</p>
            <div className='portfolio-content'>
                <BasicCards
                    className='portfolio-cards'
                    img={pfl}
                    imgAlt={''}
                    browser={true}
                    browserText={'sigurdomnes.com'}
                    hoverOverlay={true}
                    hoverOverlayTitle={'Portfolio website'}
                    hoverOverlayText={"Take the red pill and dive into the matrix of this web-app!"}
                    cornerRibbon={true}
                    ribbonText='React.js'
                    ribbonIcon={<FontAwesomeIcon icon="fa-brands fa-react" />}
                    github={true}
                    githubText='Github'
                    githubLink='https://github.com/Sigurdomnes/portfolio'
                />
                <BasicCards
                    className='portfolio-cards'
                    img={basic}
                    browser={true}
                    browserText={'Responsive & Accessible'}
                    hoverOverlay={true}
                    hoverOverlayTitle={'Proof of concept'}
                    hoverOverlayText={"Clean vanilla HTML/CSS. Completely responsive and compliant with every WCAG 2.1 level AAA guideline."}
                    github={true}
                    githubText='Github'
                    githubLink='https://github.com/Sigurdomnes/Basic-responsive-and-accessible-website'
                    deployed={true}
                    deployedText='Deployed'
                    deployedLink='https://sigurdomnes.github.io/Basic-responsive-and-accessible-website/'
                />
                <BasicCards
                    className='portfolio-cards'
                    img={db}
                    imgAlt={''}
                    device={true}
                    hoverOverlay={true}
                    hoverOverlayTitle={'Workout Diary App'}
                    hoverOverlayText={"Track your workout sets and weights intuitively and easy, just like an old-school notebook diary - with modern features."}
                    cornerRibbon={true}
                    ribbonText='Coming'
                    ribbonIcon={<FontAwesomeIcon icon="fa-solid fa-code" />}
                    ribbonColor='#444'
                    github={true}
                    githubText='Github'
                />
                <BasicCards
                    className='portfolio-cards'
                    img={github}
                    title={true}
                    titleText={'See more of my latest work on Github'}
                    link='https://github.com/Sigurdomnes'
                />

                {/* Mobile */}
                <div className="portfolio-swiper-container">
                    <h2 className='portfolio-mobile-cards-header'>Projects:</h2>
                    <h1 className={`portfolio-mobile-cards-h1 ${index === 0 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Portfolio website</h1>
                    <h1 className={`portfolio-mobile-cards-h1 ${index === 1 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Proof of concept</h1>
                    <h1 className={`portfolio-mobile-cards-h1 ${index === 2 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Workout diary app</h1>
                    <h1 className={`portfolio-mobile-cards-h1 ${index === 3 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>Behind the scenes</h1>
                    <Swiper
                        effect={'cube'}
                        grabCursor={false}
                        pagination={true}
                        direction={'vertical'}
                        allowTouchMove={true}
                        modules={[EffectCube, Pagination]}
                        cubeEffect={{
                            shadow: false,
                            slideShadows: false,
                            shadowScale: 0
                        }}

                        onSlideChange={
                            (e) => { setIndex(e.realIndex) }
                        }
                        className="portfolio-swiper"
                        style={{
                            '--swiper-pagination-color': 'var(--accentcolor)',
                            '--swiper-pagination-bullet-inactive-opacity': '0.5',
                            '--swiper-pagination-bullet-size': '8px',
                            '--swiper-pagination-bullet-vertical-gap': '5px',
                        }}
                    >
                        <SwiperSlide>
                            <div className='portfolio-scroll-arrow'><span></span></div>
                            <BasicCards
                                img={pfl}
                                imgAlt={''}
                                browser={true}
                                browserHeight='3rem'
                                browserText={'sigurdomnes.com'}
                                hoverOverlay={false}
                                height='17rem'
                                width='92vw'
                                cornerRibbon={true}
                                ribbonText='React.js'
                                ribbonIcon={<FontAwesomeIcon icon="fa-brands fa-react" />}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BasicCards
                                img={basic}
                                browser={true}
                                browserHeight='3rem'
                                browserText={'Responsive & Accessible'}
                                hoverOverlay={false}
                                height='17rem'
                                width='92vw'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BasicCards
                                img={db}
                                imgAlt={''}
                                device={true}
                                height='17rem'
                                width='92vw'
                                cornerRibbon={true}
                                ribbonText='Coming'
                                ribbonIcon={<FontAwesomeIcon icon="fa-solid fa-code" />}
                                ribbonColor='#555'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BasicCards
                                img={github}
                                title={true}
                                titleText={'See more of my latest work on Github'}
                                height='17rem'
                                width='92vw'
                            />

                        </SwiperSlide>
                    </Swiper>
                    <div className={`portfolio-mobile-cards-descr-container ${index === 0 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                            Take the red pill and dive into the matrix of this web-app!
                        </div>

                        <a href="https://github.com/Sigurdomnes/portfolio"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Github</button></a>
                    </div>
                    <div className={`portfolio-mobile-cards-descr-container ${index === 1 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                            Clean mark-up, responsive and compliant with every WCAG 2.1 level AAA guideline. as required by Norwegian law.
                        </div>
                        <a href="https://sigurdomnes.github.io/Basic-responsive-and-accessible-website/"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-solid fa-globe" className="pf-m-c-d-ico" />Deployed</button></a>
                        <a href="https://github.com/Sigurdomnes/Basic-responsive-and-accessible-website"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Github</button></a>
                    </div>
                    <div className={`portfolio-mobile-cards-descr-container ${index === 2 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                            Track your workout sets and weights intuitively and easy, just like an old-school notebook diary - with modern features.
                        </div>
                        <a href="/"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Github</button></a>
                    </div>
                    <div className={`portfolio-mobile-cards-descr-container ${index === 3 ? 'portfolio-activeslide' : 'portfolio-slide'}`}>
                        <div className='portfolio-mobile-cards-par'>
                            Check if there is a new project in the works!
                        </div>
                        <a href="https://github.com/Sigurdomnes"><button className="pf-m-c-d-btn"><FontAwesomeIcon icon="fa-brands fa-github" className="pf-m-c-d-ico" />Let's go</button></a>
                    </div>
                </div>
            </div>
            <RoundedBorderButton
                className='portfolio-contact-btn'
                text={'About'}
                arrow={true}
                width='15rem'
                onClick={() => { swiper.slideTo(2); }} />
        </div >
    );
}

export default Portfolio;