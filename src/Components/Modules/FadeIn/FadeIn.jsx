import { useIsVisible } from '../../Hooks/useIsVisible'
import './FadeIn.css'

function FadeIn({children}) {
    const { isVisibleRef, isVisible} = useIsVisible();
  return (
    <div ref={isVisibleRef} className={`fade-in-module ${isVisible ? 'visible' : 'hidden'}`}>
        {children}
    </div>
  )
}

export default FadeIn