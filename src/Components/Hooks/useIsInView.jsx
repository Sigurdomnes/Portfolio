import { useEffect, useRef, useState } from "react";

export function useIsInView(customThreshold, customRootMargin) {
    const isVisibleRef = useRef();
    const [isInView, setIsInView] = useState(false);

    const handleIntersect = (inView, below) => {
        if (inView) {
            setIsInView(true);
        } else if (below) {
            setIsInView(false);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            handleIntersect(entry.isIntersecting, entry.boundingClientRect.top > 50),
            {
                root: null,
                rootMargin: customRootMargin ? "-" + customRootMargin + "%" : "-20%",
                threshold: customThreshold ? customThreshold : 0
            }
        );

        observer.observe(isVisibleRef.current);
        return () => {
            observer.disconnect();
        };
    }, [isVisibleRef]);

    return { isVisibleRef, isInView }
}