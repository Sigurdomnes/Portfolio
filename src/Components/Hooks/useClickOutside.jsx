import { useCallback, useEffect, useRef } from 'react';

export default function useClickOutside(elementIsActive) {
    const clickOutsideRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target)) {
            elementIsActive(false);
        } else {
            elementIsActive(true);
        }
    }, [elementIsActive]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOutside]);

    return { clickOutsideRef };
}