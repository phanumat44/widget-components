import React from 'react'

import {
  GaugeColors,
  GaugeTypes,
  createGradientKeyframes,
  createGradientStopVariables,
  gradientColorArray,
  foregroundStyles
} from './Gauge'

export interface StateOfChargeGaugeProps {
  startValue: number
  endValue: number
  type?: GaugeTypes
}

const createLinearGradientStyles = (
  colors: GaugeColors
): React.CSSProperties => {
  if (!colors) return { backgroundColor: '#18CC6C' }
  return {
    backgroundColor: '#18CC6C',
    backgroundImage:
      colors &&
      `linear-gradient(
      90deg,
      ${gradientColorArray(colors, 'stateOfCharge')}
    )`
  }
}

const StateOfChargeGauge: React.FC<StateOfChargeGaugeProps> = ({
  startValue,
  endValue,
  type = 'stateOfCharge'
}) => {
  const colors: GaugeColors = {
    reverse: true,
    colorStops: {
      0: [0, 100, 100, 100, 100, 100],
      10: [0, 0, 100, 100, 100, 100],
      25: [0, 0, 50, 100, 100, 100],
      50: [0, 0, 0, 75, 100, 100],
      100: [0, 0, 0, 0, 50, 100]
    }
  }
  const gradientStyles: React.CSSProperties = createLinearGradientStyles(colors)
  const rangeStartValue = Math.max(startValue, 0)
  const rangeEndValue = Math.min(endValue, 100)
  return (
    <div className="flex w-full h-6 rounded-md bg-gray-100">
      <style>
        {`${createGradientStopVariables(colors, type)}`}
        {`@keyframes ${type} {`}
        {`${createGradientKeyframes(colors.colorStops, type)}`}
        {`}`}
      </style>
      <div style={{ width: `${rangeStartValue}%` }} className="h-6"></div>
      <div
        style={
          {
            '--gradientPositionDelay': `${rangeEndValue > 0 ? '-' : ''}${
              rangeEndValue - 1
            }s`,
            animationName: type,
            ...foregroundStyles,
            ...gradientStyles,
            width: `${rangeEndValue - rangeStartValue}%`
          } as React.CSSProperties
        }
        className="h-6 rounded-md bg-blue-500 text-white px-2 flex justify-between"
      >
        <span>{rangeStartValue}</span>
        <span>{rangeEndValue}</span>
      </div>
    </div>
  )
}

export default StateOfChargeGauge
