import { render } from '@testing-library/react'

import Loading from './loaders'

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Loading />)
    expect(baseElement).toBeTruthy()
  })
})
