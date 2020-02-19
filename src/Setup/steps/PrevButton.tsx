import * as React from 'react'

import { Button } from '@habx/ui-core'

interface PrevButtonI {
  onClick: Function
  disabled?: boolean
}

const PrevButton = ({ onClick, disabled }: PrevButtonI) => {
  return (
    <Button
      link
      disabled={disabled}
      onClick={() => onClick()}
      color="secondary"
    >
      Précédent
    </Button>
  )
}

export default PrevButton
