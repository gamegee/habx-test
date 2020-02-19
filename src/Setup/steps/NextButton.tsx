import * as React from 'react'

import { Button } from '@habx/ui-core'

interface NextButtonI {
  onClick: Function
  disabled?: boolean
}

const NextButton = ({ onClick, disabled }: NextButtonI) => {
  return (
    <Button disabled={disabled} onClick={() => onClick()} color="secondary">
      Suivant
    </Button>
  )
}

export default NextButton
