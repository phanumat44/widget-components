import React from 'react'

import Gauge, { GaugeProps } from './Gauge'

type CoolantTempGaugeProps = Pick<GaugeProps, 'value'>

const CoolantTempGauge: React.FC<CoolantTempGaugeProps> = ({ value }) => {
  const options: Omit<GaugeProps, 'value'> = {
    alertHigh: 220,
    colors: {
      reverse: false,
      colorStops: {
        0: [45, 90, 180, 270, 315, 360],
        25: [45, 112.5, 216, 360, 360, 360],
        50: [0, 45, 112.5, 247, 360, 360],
        67: [0, 0, 0, 45, 212, 360],
        100: [0, 0, 0, 0, 45, 180]
      }
    },
    icon: '🌡',
    label: 'Coolant Temp',
    min: 100,
    max: 280,
    minLabel: 'C',
    maxLabel: 'H',
    type: 'coolantTemp',
    unit: 'F',
    valueSuffix: 'º'
  }
  return <Gauge {...options} value={value} />
}

export default CoolantTempGauge
