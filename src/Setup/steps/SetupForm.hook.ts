import * as React from 'react'

import { ProjectPropertiesI, FormHookI } from '../types/project'

export default (properties: ProjectPropertiesI): FormHookI => {
  const [budgetState, setBudgetState] = React.useState(0)
  const [budgetIsDirty, setBudgetDirty] = React.useState()
  const budgetErrors =
    budgetState < properties?.priceRange?.min ||
    budgetState > properties?.priceRange?.max

  const [surfaceState, setSurfaceState] = React.useState(0)
  const [surfaceIsDirty, setSurfaceDirty] = React.useState()
  const surfaceErrors =
    surfaceState < properties?.surfaceRange?.min ||
    surfaceState > properties?.surfaceRange?.max

  const [typologyState, setTypologyState] = React.useState(1)
  const [exposuresState, setExposuresState] = React.useState(['north'])

  const currentStepInError = (): null | number => {
    if (budgetErrors) {
      return 0
    }
    if (surfaceErrors) {
      return 1
    }
    return null
  }

  return {
    budget: {
      value: budgetState,
      setValue: v => {
        if (!budgetIsDirty) {
          setBudgetDirty(true)
        }
        setBudgetState(parseInt(v))
      },
      error: budgetErrors,
      isDirty: budgetIsDirty,
    },
    surface: {
      value: surfaceState,
      setValue: v => {
        if (!surfaceIsDirty) {
          setSurfaceDirty(true)
        }
        setSurfaceState(parseInt(v))
      },
      error: surfaceErrors,
      isDirty: surfaceIsDirty,
    },
    typology: {
      value: typologyState,
      setValue: setTypologyState,
    },
    exposures: {
      value: exposuresState,
      setValue: newValue => {
        const valueExist = exposuresState.includes(newValue)
        const newExposuresState = valueExist
          ? exposuresState.filter(exp => exp !== newValue)
          : exposuresState.concat(newValue)
        setExposuresState(newExposuresState)
      },
    },
    currentStepInError: currentStepInError(),
    values: {
      budget: budgetState,
      surface: surfaceState,
      typology: typologyState,
      exposures: exposuresState,
    },
  }
}
