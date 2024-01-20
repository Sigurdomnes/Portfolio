import { useCallback, useEffect, useRef } from 'react';

export default function useClickOutside(toggle) {
    const clickOutsideRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target)) {
            toggle(false);
        } else {
            toggle(true);
        }
    }, [toggle]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOutside]);

    return { clickOutsideRef };
}