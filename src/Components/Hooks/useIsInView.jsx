import { useEffect, useRef, useState } from "react";

export function useIsInView(threshold, margin, mobileMargin) {
    const isVisibleRef = useRef();
    const [isInView, setIsInView] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, []);
  
    const isMobile = width <= 768;

    const handleIntersect = (inView) => {
        console.log();
        if (isInView) return;
        else if (inView) setIsInView(true);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            handleIntersect(entry.isIntersecting),
            {
                root: null,
                rootMargin: isMobile ? mobileMargin ? "-" + mobileMargin + "%" : "-20%" : margin ? "-" + margin + "%" : "-15%" ,
                threshold: threshold ? threshold : 0
            }
        );

        observer.observe(isVisibleRef.current);
        return () => {
            observer.disconnect();
        };
    }, [isVisibleRef]);

    return { isVisibleRef, isInView }
}