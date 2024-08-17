import React from 'react'

import Gauge, { GaugeProps } from './Gauge'

type OilTempGaugeProps = Pick<GaugeProps, 'value'>

const OilTempGauge: React.FC<OilTempGaugeProps> = ({ value }) => {
  const options: Omit<GaugeProps, 'value'> = {
    alertHigh: 250,
    colors: {
      reverse: false,
      colorStops: {
        0: [45, 90, 180, 270, 315, 360],
        25: [45, 112.5, 216, 360, 360, 360],
        50: [0, 112.5, 180, 315, 360, 360],
        75: [0, 0, 0, 40, 247.5, 360],
        100: [0, 0, 0, 40, 216, 315]
      }
    },
    icon: '🌡',
    label: 'Oil Temp',
    min: 100,
    max: 300,
    minLabel: 'C',
    maxLabel: 'H',
    type: 'oilTemp',
    unit: 'F',
    valueSuffix: 'º'
  }
  return <Gauge {...options} value={value} />
}

export default OilTempGauge
