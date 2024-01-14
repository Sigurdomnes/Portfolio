//
// Fullpage React module
// Written by Sigurd Omnes
//

import "./Fullpage.css";
import React, { useState, useRef } from "react";

function Fullpage({ fullpageSlideIndex, setFullpageSlideIndex, fullpageScrollPosition, setFullpageScrollPosition, ...props }) {

  //Can be elevated for access - uncomment to use locally:

  // Slide index 
  // const [fullpageSlideIndex, setFullpageSlideIndex] = useState(0);

  // Scroll position
  // const [fullpageScrollPosition, setFullpageScrollPosition] = useState(0);


  const wrapperRef = useRef(null);

  // Global slide to next function
  const scrollToNext = () => {
    const sections = wrapperRef.current.children;
    if (fullpageSlideIndex < (sections.length - 1)) {
      const top = wrapperRef.current.offsetHeight;
      wrapperRef.current.scrollTo({ top: (top * (fullpageSlideIndex + 1)), behavior: 'smooth' });
    };
  };

  // Global slide to previous function
  const scrollToPrev = () => {
    if (fullpageSlideIndex > 0) {
      const top = wrapperRef.current.offsetHeight;
      wrapperRef.current.scrollTo({ top: (top * (fullpageSlideIndex -1)), behavior: 'smooth' });
    }
  };

  // Desktop mouse wheel trigger function
  const handleScroll = (e) => {
    if (e.deltaY > 5 && e.deltaY < 200) {
      scrollToNext();
    } else if (e.deltaY < 5 && e.deltaY < 200) {
      scrollToPrev();
    }
  };

  // Mobile swiper functions
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Set swipe distance to be considered a swipe
  const minSwipeDistance = 10;

  const onTouchStart = (e) => {
    setTouchEnd(null) // Otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  // Mobile swipe end trigger function
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isDownSwipe = distance > minSwipeDistance
    const isUpSwipe = distance < -minSwipeDistance
    if (isDownSwipe) {
      scrollToNext();
    } else if (isUpSwipe) {
      scrollToPrev();
    }
  }

  // Catch scroll position
  const onScrollCatchPosition = (e) => {
    setFullpageScrollPosition(e.target.scrollTop);
    const top = wrapperRef.current.offsetHeight;
    const index = Math.round(fullpageScrollPosition / top)
    // Sets index to nearest page of current scroll position
    setFullpageSlideIndex(index);
  }

  return (
    <div className={'fullpage-wrapper '} ref={wrapperRef}
      onWheel={(e) => { handleScroll(e); }}
      onTouchMove={(e) => { onTouchMove(e); }}
      onTouchStart={(e) => { onTouchStart(e); }}
      onTouchEnd={onTouchEnd}
      onScroll={(e) => { e.preventDefault(); onScrollCatchPosition(e); }}>
      {/* Children elements must be height dhv to work correctly on mobile */}
      {props.children}
    </div>
  );
}

export default Fullpage;