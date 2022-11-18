import React, { useEffect, useState } from 'react'
import Loaders from '../../components/loading/loaders'
import BuiderContainer from '../../container/builder-container/builder-container'

/* eslint-disable-next-line */
export interface BuilderPageProps {}

export function BuilderPage(props: BuilderPageProps) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])
  return <div>{!isLoading ? <BuiderContainer /> : <Loaders />}</div>
}

export default BuilderPage
