import * as React from 'react'

import { TextInput, Title, Text } from '@habx/ui-core'

const BudgetStep = ({ error, value, setValue }) => {
  return (
    <>
      <Title type="regular">Bonjour !</Title>
      <br />
      <Text>
        Pour vous présenter l’appartement qui vous correspond au mieux, on a
        besoin d’en savoir un peu plus.
      </Text>
      <br />
      {error && <Text>ERROR</Text>}
      <TextInput
        style={{ boxSizing: 'border-box' }}
        placeholder="300 000 €"
        type="number"
        name="budget"
        onChange={e => setValue(e.target.value)}
        value={value || ''}
      />
    </>
  )
}

export default BudgetStep
