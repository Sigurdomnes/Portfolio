import { useEffect, useRef, useState } from "react";

export function useIsInView() {
    const isVisibleRef = useRef();
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIsInView(entry.isIntersecting)
        );

        observer.observe(isVisibleRef.current);
        return () => {
            observer.disconnect();
        };
    }, [isVisibleRef]);

     return { isVisibleRef, isInView } 
}