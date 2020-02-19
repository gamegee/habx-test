import * as React from 'react'

import { ProjectPropertiesI } from '../types/project'

export default (properties: ProjectPropertiesI) => {
  const [budgetState, setBudgetState] = React.useState()
  const [surfaceState, setSurfaceState] = React.useState()
  const [typologyState, setTypologyState] = React.useState()
  const [exposureState, setExposureState] = React.useState()

  return {
    budget: {
      value: budgetState,
      setValue: setBudgetState,
      error:
        !!budgetState &&
        (budgetState < properties?.priceRange?.min ||
          budgetState > properties?.priceRange?.max),
    },
    surface: {
      value: surfaceState,
      setValue: setSurfaceState,
      error:
        !!surfaceState &&
        (surfaceState < properties?.surfaceRange?.min ||
          surfaceState > properties?.surfaceRange?.max),
    },
    typology: {
      value: typologyState,
      setValue: setTypologyState,
    },
    exposure: {
      value: exposureState,
      setValue: setExposureState,
    },
  }
}
