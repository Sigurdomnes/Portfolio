//
// Into View Effect React module
// With useIsInView hook
// Written by Sigurd Omnes
//
// Effects: fade-in, 

import { useIsInView } from '../../Hooks/useIsInView'
import './IntoViewEffect.scss'

function IntoViewEffect({ children, effect }) {
  const { isVisibleRef, isInView } = useIsInView();
  return (
      <div aria-hidden={true} ref={isVisibleRef} className={`${effect} ${isInView ? 'visible' : 'hidden'}`}>
        {children}
      </div>
  )
}

export default IntoViewEffect;