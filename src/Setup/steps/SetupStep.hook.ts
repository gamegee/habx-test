import * as React from 'react'

import { SetupStepsI } from '../types/project'

export default (initialStep = 0, maxStep = 3): SetupStepsI => {
  const [step, setStep] = React.useState(initialStep)
  return {
    currentStep: step,
    isFirstStep: step === 0,
    isLastStep: step === maxStep,
    onNextStep: () => {
      setStep(step + 1)
    },
    onPrevStep: () => {
      setStep(step - 1)
    },
  }
}
