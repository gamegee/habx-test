import * as React from 'react'

import { ProjectPropertiesI } from '../types/project'

import BudgetStep from './BudgetStep'
import ExposureStep from './ExposureStep'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import useSetupForm from './SetupForm.hook'
import useSetupStep from './SetupStep.hook'
import { StepContainer, ButtonContainer, MainContainer } from './Step.style'
import SurfaceStep from './SurfaceStep'
import TypologyStep from './TypologyStep'

interface SetupStepsI {
  setupProperties: ProjectPropertiesI
}

const SetupSteps = ({ setupProperties }: SetupStepsI) => {
  const {
    currentStep,
    onPrevStep,
    onNextStep,
    isFirstStep,
    isLastStep,
  } = useSetupStep()

  const { budget, surface, typology, exposure } = useSetupForm(setupProperties)

  return (
    <MainContainer>
      <StepContainer>
        {currentStep === 0 && <BudgetStep {...budget} />}
        {currentStep === 1 && <SurfaceStep {...surface} />}
        {currentStep === 2 && (
          <TypologyStep typologies={setupProperties.typologies} {...typology} />
        )}
        {currentStep === 3 && (
          <ExposureStep exposures={setupProperties.exposures} {...exposure} />
        )}
      </StepContainer>
      <ButtonContainer>
        {(!isFirstStep && <PrevButton onClick={onPrevStep} />) || <div />}
        {!isLastStep && <NextButton onClick={onNextStep} />}
      </ButtonContainer>
    </MainContainer>
  )
}

export default SetupSteps
