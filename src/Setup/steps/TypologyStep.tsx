import * as React from 'react'

import { Text, RadioInput } from '@habx/ui-core'

import { TypologiesI } from '../types/project'

import { RadiosContainer, RadioBlock } from './Step.style'

interface TypologyStepI {
  register: any
  typologies: TypologiesI
}

const TypologyStep = ({ typologies }: TypologyStepI) => {
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
            <RadioInput
              label={formatName(typology)}
              name="typology"
              value={typology}
            />
          </RadioBlock>
        ))}
      </RadiosContainer>
    </>
  )
}

export default TypologyStep
