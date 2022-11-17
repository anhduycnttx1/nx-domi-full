import { render } from '@testing-library/react'

import RunningPage from './running-page'

describe('RunningPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RunningPage />)
    expect(baseElement).toBeTruthy()
  })
})
