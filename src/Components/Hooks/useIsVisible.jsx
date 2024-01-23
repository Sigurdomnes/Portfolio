import { useEffect, useRef, useState } from "react";

export function useIsVisible() {
    const isVisibleRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIsVisible(entry.isIntersecting)
        );

        observer.observe(isVisibleRef.current);
        return () => {
            observer.disconnect();
        };
    }, [isVisibleRef]);

     return { isVisibleRef, isVisible } 
}