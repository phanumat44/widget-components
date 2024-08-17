import React from 'react'

import Gauge, { GaugeProps } from './Gauge'

type FuelLevelGaugeProps = Pick<GaugeProps, 'value'>

const FuelLevelGauge: React.FC<FuelLevelGaugeProps> = ({ value }) => {
  const options: Omit<GaugeProps, 'value'> = {
    alertLow: 10,
    colors: {
      reverse: true,
      colorStops: {
        0: [45, 90, 180, 270, 315, 360],
        10: [0, 60, 180, 270, 315, 360],
        50: [0, 0, 0, 90, 180, 315],
        100: [0, 0, 0, 45, 180, 315]
      }
    },
    icon: '⛽️',
    label: 'Fuel Level',
    min: 0,
    max: 100,
    minLabel: 'E',
    maxLabel: 'F',
    type: 'fuelLevel',
    valueSuffix: '%'
  }
  return <Gauge {...options} value={value} />
}

export default FuelLevelGauge
