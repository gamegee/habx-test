import { useQuery } from '@apollo/react-hooks'
import * as React from 'react'

import { projectQuery } from './Setup.query'
import { SetupContainer } from './Setup.style'
import SetupSteps from './steps/SetupSteps'
import { project } from './types/project'

const Setup: React.FunctionComponent<SetupInterface> = () => {
  const { data } = useQuery<project>(projectQuery)
  return (
    <SetupContainer>
      <SetupSteps setupProperties={data?.project?.properties} />
    </SetupContainer>
  )
}

interface SetupInterface {}

export default Setup
