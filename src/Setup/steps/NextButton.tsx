import * as React from 'react'

import { Button } from '@habx/ui-core'

interface NextButtonI {
  onClick: Function
}

const NextButton = ({ onClick }: NextButtonI) => {
  return (
    <Button onClick={() => onClick()} color="secondary">
      Suivant
    </Button>
  )
}

export default NextButton
