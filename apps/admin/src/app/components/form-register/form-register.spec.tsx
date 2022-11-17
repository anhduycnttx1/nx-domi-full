import { render } from '@testing-library/react'

import FormRegister from './form-register'

describe('FormRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormRegister />)
    expect(baseElement).toBeTruthy()
  })
})
