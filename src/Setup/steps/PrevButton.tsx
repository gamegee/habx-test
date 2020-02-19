import * as React from 'react'

import { Button } from '@habx/ui-core'

interface PrevButtonI {
  onClick: Function
}

const PrevButton = ({ onClick }: PrevButtonI) => {
  return (
    <Button onClick={() => onClick()} color="secondary">
      Précédent
    </Button>
  )
}

export default PrevButton
