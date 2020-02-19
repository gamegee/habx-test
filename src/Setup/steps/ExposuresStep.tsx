import * as React from 'react'

import { Text, Checkbox } from '@habx/ui-core'

import { ExposuresI, FormHookItemI } from '../types/project'

import { RadiosContainer, RadioBlock, RadioButton } from './Step.style'

interface ExposuresStepI extends FormHookItemI {
  exposures: ExposuresI
}

const ExposuresStep = ({ exposures, value, setValue }: ExposuresStepI) => {
  return (
    <>
      <Text>
        Quelle est votre exposition préférée ? plusieurs choix possibles
      </Text>
      <br />
      <RadiosContainer>
        {exposures.map(exposure => (
          <RadioBlock key={exposure}>
            <RadioButton onClick={() => setValue(exposure)}>
              <Checkbox
                label={exposure}
                name="exposure"
                checked={(value as string[]).includes(exposure)}
                onChange={() => {}}
              />
            </RadioButton>
          </RadioBlock>
        ))}
      </RadiosContainer>
    </>
  )
}

export default ExposuresStep
