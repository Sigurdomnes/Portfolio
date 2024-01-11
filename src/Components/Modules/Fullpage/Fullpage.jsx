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
  const [lockTouchScroll, setLockTouchScroll] = useState(false);
  let index = 0;


  // Global slide to next function
  const scrollToNext = () => {
    const sections = wrapperRef.current.children;
    if (fullpageSlideIndex < (sections.length - 1)) {
      const top = wrapperRef.current.offsetHeight;
      index = Math.round(fullpageScrollPosition / top);
      const newIndex = index + 1;
      wrapperRef.current.scrollTo({ top: (top * newIndex), behavior: 'smooth' });
      setFullpageSlideIndex(newIndex);
    };
  };

  // Global slide to previous function
  const scrollToPrev = () => {
    if (fullpageSlideIndex > 0) {
      const top = wrapperRef.current.offsetHeight;
      index = Math.round(fullpageScrollPosition / top);
      const newIndex = index - 1;
      wrapperRef.current.scrollTo({ top: (top * newIndex), behavior: 'smooth' });
      setFullpageSlideIndex(newIndex);
    }
  };

  // Desktop mouse wheel trigger function
  const handleScroll = (e) => {

    console.log(fullpageSlideIndex);
    if (e.deltaY > 15) {
      scrollToNext();
    } else if (e.deltaY < 15) {
      scrollToPrev();
    }
  };

  // Mobile swiper functions
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Set swipe distance to be considered a swipe
  const minSwipeDistance = 10;

  const onTouchStart = (e) => {
    setLockTouchScroll(true);
    setTouchEnd(null) // Otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  // Mobile swipe end trigger function
  const onTouchEnd = () => {
    setLockTouchScroll(false);
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

  // Prevent scroll if not triggered
  const onWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur()

    // Prevent the page/container scrolling
    e.stopPropagation()

    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.target.focus()
    }, 0)
  };

  // Catch scroll position
  const onScrollCatchPosition = (e) => {
    setFullpageScrollPosition(e.target.scrollTop);
  }

  return (
    <div className={`fullpage-wrapper ${lockTouchScroll ? 'touch-lock' : ''}`} ref={wrapperRef}
      onWheel={(e) => { handleScroll(e); onWheelPreventChange(e); }}
      onTouchMove={(e) => { onTouchMove(e); }}
      onTouchStart={(e) => { onTouchStart(e); }}
      onTouchEnd={onTouchEnd}
      onScroll={(e) => { e.preventDefault(); onWheelPreventChange(e); onScrollCatchPosition(e); }}>
      {/* Children elements must be height dhv to work correctly on mobile */}
      {props.children}
    </div>
  );
}

export default Fullpage;