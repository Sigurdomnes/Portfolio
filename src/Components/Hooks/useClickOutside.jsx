import { useEffect, useRef } from 'react';

export default function useClickOutside(toggle) {
    const clickOutsideRef = useRef(null);

    const handleClickOutside = (event) => {
        if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target)) {
            toggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { clickOutsideRef };
}