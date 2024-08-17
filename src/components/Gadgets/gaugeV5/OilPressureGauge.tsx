import React from 'react'

import Gauge, { GaugeProps } from './Gauge'

type OilPressureGaugeProps = Pick<GaugeProps, 'value'>

const OilPressureGauge: React.FC<OilPressureGaugeProps> = ({ value }) => {
  const options: Omit<GaugeProps, 'value'> = {
    alertHigh: 65,
    alertLow: 25,
    colors: {
      reflect: true,
      reverse: true,
      colorStops: {
        0: [45, 90, 200, 220, 240, 260, 280, 300, 310, 330, 360],
        15: [0, 45, 140, 180, 240, 250, 270, 300, 310, 330, 360],
        25: [0, 0, 112, 150, 230, 250, 270, 300, 310, 330, 360],
        35: [0, 0, 0, 70, 210, 240, 270, 300, 310, 330, 360],
        45: [0, 0, 0, 0, 120, 185, 240, 280, 310, 330, 360],
        55: [0, 0, 0, 0, 0, 0, 110, 180, 270, 330, 360],
        65: [0, 0, 0, 0, 0, 0, 0, 0, 45, 330, 360],
        75: [0, 0, 0, 0, 0, 0, 0, 0, 0, 330, 360],
        85: [0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 360],
        100: [0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 315]
      }
    },
    icon: '🛢',
    label: 'Oil Pressure',
    decimals: 1,
    min: 0,
    max: 100,
    minLabel: 'L',
    maxLabel: 'H',
    type: 'oilPressure',
    unit: 'PSI'
  }
  return <Gauge {...options} value={value} />
}

export default OilPressureGauge
