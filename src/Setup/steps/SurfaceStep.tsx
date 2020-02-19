import * as React from 'react'

import { Text, TextInput } from '@habx/ui-core'

const SurfaceStep = ({ value, setValue, error }) => {
  return (
    <>
      <Text>Combien de m2 souhaitez vous avoir?</Text>
      <br />
      {error && 'eror'}
      <TextInput
        placeholder=" 45 m2"
        type="number"
        name="budget"
        value={value || ''}
        onChange={e => setValue(e.target.value)}
      />
    </>
  )
}

export default SurfaceStep
