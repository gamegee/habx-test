/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project {
  __typename: 'Project'
  id: string | null
  name: string | null
  properties: ProjectPropertiesI
}

export interface ProjectPropertiesI {
  priceRange: RangeI
  surfaceRange: RangeI
  exposures: ExposuresI
  typologies: TypologiesI
}

export type ExposuresI = string[]
export type TypologiesI = number[]

export interface RangeI {
  min: number
  max: number
}

export interface project {
  project: project_project | null
}

export interface SetupStepsI {
  onNextStep: Function
  onPrevStep: Function
  isFirstStep: boolean
  isLastStep: boolean
  currentStep: number
}
