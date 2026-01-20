import type { PropName } from './prop-name'

interface Example {
  id: number
  name: string
  isActive: boolean
}

type Result = PropName<Example>

// The expected type is 'id' | 'name' | 'isActive'
const testId: Result = 'id'
const testName: Result = 'name'
const testIsActive: Result = 'isActive'

void [testId, testName, testIsActive]

// The following lines should cause TypeScript errors if uncommented
// const testInvalid: Result = 'invalid' // Error: Type '"invalid"' is not assignable to type 'Result'.
