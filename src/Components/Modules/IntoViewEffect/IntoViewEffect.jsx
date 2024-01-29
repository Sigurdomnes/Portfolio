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
//  Duration: int, default fade-in: 1.5s
//
// Custom CSS: From parent div (IntoViewEffect):
//  "is-in-view", "not-in-view"

import { useIsInView } from '../../Hooks/useIsInView'
import './IntoViewEffect.scss'

function IntoViewEffect({ children, effect, threshold, margin, delay, duration }) {
  const { isVisibleRef, isInView } = useIsInView(threshold, margin);

  return (
    <div aria-hidden={true} ref={isVisibleRef} className={`${effect} ${isInView ? 'is-in-view' : 'not-in-view'}`}
      style={duration ? { transitionDuration: duration + 's' } : {} || delay ? { transitionDelay: delay + 's' } : {}}>
      {children}
    </div>
  )
}

export default IntoViewEffect;