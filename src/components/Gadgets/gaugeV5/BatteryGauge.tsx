import React from 'react'

import Gauge, { GaugeProps } from './Gauge'

type BatteryGaugeProps = Pick<GaugeProps, 'value'>

const BatteryGauge: React.FC<BatteryGaugeProps> = ({ value }) => {
  const options: Omit<GaugeProps, 'value'> = {
    alertLow: 13,
    colors: {
      reverse: true,
      colorStops: {
        0: [45, 144, 360, 360, 360, 360],
        56: [45, 144, 360, 360, 360, 360],
        64: [0, 45, 214, 360, 360, 360],
        75: [0, 0, 0, 158, 315, 360],
        100: [0, 0, 0, 111, 248, 315]
      }
    },
    decimals: 1,
    icon: '⚡️',
    label: 'Battery',
    min: 10,
    max: 15,
    minLabel: 'L',
    maxLabel: 'H',
    type: 'battery',
    unit: 'Volts'
  }
  return <Gauge {...options} value={value} />
}

export default BatteryGauge
