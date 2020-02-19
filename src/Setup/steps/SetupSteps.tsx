import * as React from 'react'

import { Button } from '@habx/ui-core'

import { ProjectPropertiesI } from '../types/project'

import BudgetStep from './BudgetStep'
import ExposuresStep from './ExposuresStep'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import useSetupForm from './SetupForm.hook'
import useSetupStep from './SetupStep.hook'
import { StepContainer, ButtonContainer, MainContainer } from './Step.style'
import StepTransition from './StepTransition'
import SurfaceStep from './SurfaceStep'
import TypologyStep from './TypologyStep'

interface SetupStepsI {
  setupProperties: ProjectPropertiesI
  onSave: Function
}

const SetupSteps = ({ setupProperties, onSave }: SetupStepsI) => {
  const {
    currentStep,
    onPrevStep,
    onNextStep,
    isFirstStep,
    isLastStep,
  } = useSetupStep()

  const {
    budget,
    surface,
    typology,
    exposures,
    currentStepInError,
    values,
  } = useSetupForm(setupProperties)

  return (
    <MainContainer>
      <StepContainer>
        {currentStep === 0 && (
          <StepTransition>
            <BudgetStep {...budget} />{' '}
          </StepTransition>
        )}
        {currentStep === 1 && (
          <StepTransition>
            <SurfaceStep {...surface} />
          </StepTransition>
        )}
        {currentStep === 2 && (
          <StepTransition>
            <TypologyStep
              typologies={setupProperties.typologies}
              {...typology}
            />
          </StepTransition>
        )}
        {currentStep === 3 && (
          <StepTransition>
            <ExposuresStep
              exposures={setupProperties.exposures}
              {...exposures}
            />
          </StepTransition>
        )}
      </StepContainer>
      <ButtonContainer>
        {(!isFirstStep && (
          <PrevButton
            disabled={currentStep === currentStepInError}
            onClick={onPrevStep}
          />
        )) || <div />}
        {!isLastStep && (
          <NextButton
            disabled={currentStep === currentStepInError}
            onClick={onNextStep}
          />
        )}
        {isLastStep && (
          <Button
            disabled={currentStep === currentStepInError}
            onClick={() => onSave({ variables: { setup: values } })}
          >
            Save
          </Button>
        )}
      </ButtonContainer>
    </MainContainer>
  )
}

export default SetupSteps
