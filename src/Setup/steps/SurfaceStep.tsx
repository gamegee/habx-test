import * as React from 'react'

import { Text, TextInput } from '@habx/ui-core'

import { FormHookItemI } from '../types/project'

const SurfaceStep = ({ value, setValue, error, isDirty }: FormHookItemI) => {
  return (
    <>
      <Text>Combien de m2 souhaitez vous avoir?</Text>
      <br />
      <TextInput
        placeholder=" 45 m2"
        type="number"
        name="budget"
        value={value || ''}
        onChange={e => setValue(e.target.value)}
      />
      {error && isDirty && (
        <Text style={{ marginTop: 10 }} type="caption" warning>
          Cette surface n'est pas valable sur le ce projet !
        </Text>
      )}
    </>
  )
}

export default SurfaceStep
