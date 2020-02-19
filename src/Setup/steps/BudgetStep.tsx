import * as React from 'react'

import { TextInput, Title, Text } from '@habx/ui-core'

import { FormHookItemI } from '../types/project'

const BudgetStep = ({ error, value, setValue, isDirty }: FormHookItemI) => {
  return (
    <>
      <Title type="regular">Bonjour !</Title>
      <br />
      <Text>
        Pour vous présenter l’appartement qui vous correspond au mieux, on a
        besoin d’en savoir un peu plus.
      </Text>
      <br />
      <TextInput
        style={{ boxSizing: 'border-box' }}
        placeholder="300 000 €"
        type="number"
        name="budget"
        onChange={e => setValue(e.target.value)}
        value={value || ''}
      />
      {error && isDirty && (
        <Text style={{ marginTop: 10 }} type="caption" warning>
          Ce budget n'est pas valable sur le ce projet !
        </Text>
      )}
    </>
  )
}

export default BudgetStep
