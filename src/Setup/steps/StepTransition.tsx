import * as React from 'react'
import { Transition } from 'react-transition-group'

const StepTransition = ({ children }) => {
  const transition = 200
  const defaultStyle = {
    transition: `${transition}ms ease-in-out`,
    marginTop: -50,
  }

  const [inState, setInState] = React.useState(false)
  React.useEffect(() => setInState(true), [])

  const transitionStyles = {
    entering: { opacity: 0, marginTop: -50 },
    entered: { opacity: 1, marginTop: 0 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  }

  return (
    <Transition in={inState} timeout={transition}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default StepTransition
