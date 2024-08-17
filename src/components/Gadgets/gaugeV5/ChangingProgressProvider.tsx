import React, { useState } from 'react'
import { useEffect } from 'react'

interface ChangingProgressProviderProps {
  children: (progressValue: number) => React.ReactNode | React.ReactNode
  interval?: number
  play?: boolean
  values: number[]
}

export const ChangingProgressProvider: React.FC<ChangingProgressProviderProps> = ({
  children,
  interval = 1000,
  play = true,
  values
}) => {
  const [valuesIndex, setValuesIndex] = useState(0)

  useEffect(() => {
    if (play) {
      const timerId = setInterval(() => {
        setValuesIndex((valuesIndex + 1) % values.length)
      }, interval)
      return () => clearInterval(timerId)
    }
  })

  return <>{children(values[valuesIndex])}</>
}

export default ChangingProgressProvider
