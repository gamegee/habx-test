import * as React from 'react'

import { Text, RadioInput } from '@habx/ui-core'

import { ExposuresI } from '../types/project'

import { RadiosContainer, RadioBlock } from './Step.style'

interface ExposureStepI {
  exposures: ExposuresI
}

const ExposureStep = ({ exposures }: ExposureStepI) => {
  return (
    <>
      <Text>
        Quelle est votre exposition préférée ? plusieurs choix possibles
      </Text>
      <br />
      <RadiosContainer>
        {exposures.map(exposure => (
          <RadioBlock key={exposure}>
            <RadioInput label={exposure} name="exposure" value={exposure} />
          </RadioBlock>
        ))}
      </RadiosContainer>
    </>
  )
}

export default ExposureStep
