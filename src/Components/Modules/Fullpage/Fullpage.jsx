//
// Fullpage React module
// Written by Sigurd Omnes
//

import "./Fullpage.css";
import React, { useState, useRef, useCallback } from "react";

function Fullpage(props) {
  
  //Slide index - Can be elevated to App.js for global access
  const [fullpageSlideIndex, setFullpageSlideIndex] = useState(0);

  const wrapperRef = useRef(null);

  // Global slide to next function
  const scrollToNext = useCallback(() => {
    const sections = wrapperRef.current.children;
    if (fullpageSlideIndex < sections.length - 1) {
      const top = wrapperRef.current.offsetHeight;
      const newIndex = fullpageSlideIndex + 1;
      setFullpageSlideIndex(newIndex);
      wrapperRef.current.scrollTo({ top: (top * (fullpageSlideIndex + 1)), behavior: 'smooth' });

    };
  }, [fullpageSlideIndex]);

  // Global slide to previous function
  const scrollToPrev = useCallback(() => {
    if (fullpageSlideIndex > 0) {
      const top = wrapperRef.current.offsetHeight;
      const newIndex = fullpageSlideIndex - 1;
      setFullpageSlideIndex(newIndex);
      wrapperRef.current.scrollTo({ top: (top * (fullpageSlideIndex - 1)), behavior: 'smooth' });

    }
  }, [fullpageSlideIndex]);

  // Desktop mouse wheel trigger function
  const handleScroll = (e) => {
    console.log(fullpageSlideIndex);
    if (e.deltaY > 15) {
      console.log("down");
      scrollToNext();
    } else if (e.deltaY < 15) {
      console.log("up");
      scrollToPrev();
    }
  };

  // Mobile swiper functions
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Set swipe distance to be considered a swipe
  const minSwipeDistance = 0

  const onTouchStart = (e) => {
    setTouchEnd(null) // Otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)

  // Mobile swipe trigger function
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isDownSwipe = distance > minSwipeDistance
    const isUpSwipe = distance < -minSwipeDistance
    if (isDownSwipe) {
      scrollToNext();
      console.log("touch down");
    } else if (isUpSwipe) {
      console.log("touch up");
      scrollToPrev();
    }
    
  }

  // Prevent scroll if not triggered (not working)
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

  return (
    <div className="fullpage-wrapper" ref={wrapperRef}
      onWheel={(e) => { handleScroll(e); onWheelPreventChange(e); }}
      onTouchMove={(e) => {onTouchMove(e); onWheelPreventChange(e); }}
      onTouchStart={(e) => {onTouchStart(e)}}
      onTouchEnd={onTouchEnd}
      onScroll={(e) => { e.preventDefault(); e.stopPropagation(); }}>
      {props.children}
    </div>
  );
}

export default Fullpage;