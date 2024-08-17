/* eslint-disable react/prop-types */

import { BatteryGauge as BatteryGauges } from 'react-battery-gauge'
import { useState,useEffect } from 'react'

function BatteryGauge({ value }) {
    
    const [values, setValues] = useState(value)
    const [charging, setCharging] = useState(false)

    useEffect(() => {
        setValues(value);
        if (value > 10 && value < 40) {
            setCharging(true)
        }else{
            setCharging(false)
        }
    }
    , [value])

  return (
    

      <BatteryGauges value={values} charging={charging} />
  )
}

export default BatteryGauge