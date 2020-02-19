import * as React from 'react'

import { Text, RadioInput } from '@habx/ui-core'

import { TypologiesI, FormHookItemI } from '../types/project'

import { RadiosContainer, RadioBlock, RadioButton } from './Step.style'

interface TypologyStepI extends FormHookItemI {
  typologies: TypologiesI
}

const TypologyStep = ({ typologies, value, setValue }: TypologyStepI) => {
  const formatName = typology => {
    const plural = typology > 1 ? 's' : ''
    return `${typology} Pièce${plural}`
  }

  return (
    <>
      <Text>Parlons un peu plus de votre appartement. Vous cherchez … ?</Text>
      <br />
      <RadiosContainer>
        {typologies.map(typology => (
          <RadioBlock key={typology}>
            <RadioButton onClick={() => setValue(typology)}>
              <RadioInput
                label={formatName(typology)}
                name="typology"
                checked={value === typology}
                onChange={() => {}}
              />
            </RadioButton>
          </RadioBlock>
        ))}
      </RadiosContainer>
    </>
  )
}

export default TypologyStep
