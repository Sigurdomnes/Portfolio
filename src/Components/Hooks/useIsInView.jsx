import { useEffect, useRef, useState } from "react";

export function useIsInView(threshold, margin, mobileMargin) {
    const isVisibleRef = useRef();
    const onPageLoad = useRef(true);
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

    const isMobile = width <= 600;

    const handleIntersect = (inView) => {
        console.log();
        if (isInView) return;
        else if (inView) setIsInView(true);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
         { if (!onPageLoad.current && entry) {
            handleIntersect(entry.isIntersecting)
          } else {
            onPageLoad.current = false;
          }
        },
            {
                root: null,
                rootMargin: isMobile ? mobileMargin ? "-" + mobileMargin + "%" : "-25%" : margin ? "-" + margin + "%" : "-25%",
                threshold: threshold ? threshold : 0
            }
        );

        observer.observe(isVisibleRef.current);
        return () => {
            observer.disconnect();
            onPageLoad.current = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibleRef]);

    return { isVisibleRef, isInView }
}