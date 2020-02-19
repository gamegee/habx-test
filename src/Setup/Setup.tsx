import { useQuery, useMutation } from '@apollo/react-hooks'
import * as React from 'react'

import { projectQuery, projectMutation } from './Setup.query'
import { SetupContainer } from './Setup.style'
import SetupSteps from './steps/SetupSteps'
import { project } from './types/project'

const Setup: React.FunctionComponent<SetupInterface> = () => {
  const { data } = useQuery<project>(projectQuery)
  const [onSave] = useMutation(projectMutation)

  return (
    <SetupContainer>
      <SetupSteps onSave={onSave} setupProperties={data?.project?.properties} />
    </SetupContainer>
  )
}

interface SetupInterface {}

export default Setup
