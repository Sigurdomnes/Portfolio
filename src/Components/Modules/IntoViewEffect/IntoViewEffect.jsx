//
// Into View Effect React module
// With useIsInView hook
// Written by Sigurd Omnes
//
// Options:
//  Effect: fade-in, slide-in-bottom
//  Threshold: int (0-1), default: 0
//  Margin: int (pct), default: 20
//  Delay: int, default: 0
//
// Custom CSS: From parent div (IntoViewEffect):
//  "is-in-view", "not-in-view"

import { useIsInView } from '../../Hooks/useIsInView'
import './IntoViewEffect.scss'

function IntoViewEffect({ children, effect, threshold, margin, delay }) {
  const { isVisibleRef, isInView } = useIsInView(threshold, margin);

  return (
    <div aria-hidden={true} ref={isVisibleRef} className={`${effect} ${isInView ? 'is-in-view' : 'not-in-view'}`} style={{transitionDelay: delay ? delay + "s" : '0s'}}>
        {children}
    </div>
  )
}

export default IntoViewEffect;