import React, { useState } from 'react'
import Slider from 'react-input-slider'

import ChangingProgressProvider from './ChangingProgressProvider'

import BatteryGauge from './BatteryGauge'
import CoolantTempGauge from './CoolantTempGauge'
import DefLevelGauge from './DefLevelGauge'
import FuelLevelGauge from './FuelLevelGauge'
import OilPressureGauge from './OilPressureGauge'
import OilTempGauge from './OilTempGauge'
import StateOfChargeGauge from './StateOfChargeGauge'

export default function GaugeV5() {
  const [value, setValue] = useState<number>(50);
  const [playing, setPlaying] = useState<boolean>(true);

  const handleSliderChange = (x: number) => {
    setPlaying(false);
    setValue(x);
  };

  const SOCValues = (value: number, limit?: "start" | "end") => {
    const floatValue = value > 0 ? value / 100 : 0;
    let startValue = Math.pow(floatValue - 0.1, 3),
      endValue = Math.sqrt(floatValue);

    return Math.round(limit === "start" ? startValue * 100 : endValue * 100);
  };

  return (
    <div className="App relative flex  flex-col justify-center overflow-hidden bg-gray-50 ">
      
        <ChangingProgressProvider
          interval={100}
          values={Array.from(Array(100).keys())}
          play={playing}
        >
          {(progressValue: number) => (
            <>
              <h3 className="mb-2">Drag to set value</h3>
              <Slider
                axis="x"
                x={playing ? progressValue : value}
                onChange={({ x }) => handleSliderChange(x)}
                styles={{ track: { width: "100%" } }}
              />
              <button
                onClick={() => setPlaying(!playing)}
                className="py-1 px-4 bg-gray-100 mt-4 rounded-md border border-gray-300 mb-4"
              >
                {playing ? "Pause" : "Play"}
              </button>
        {/*       <div className="flex items-center justify-center p-4 space-x-6 w-full">
                <StateOfChargeGauge
                  startValue={SOCValues(
                    playing ? progressValue : value,
                    "start"
                  )}
                  endValue={SOCValues(playing ? progressValue : value, "end")}
                />
              </div> */}
              <div className="flex items-center justify-center p-4 space-x-6">
                
                <FuelLevelGauge value={playing ? progressValue : value} />
                <CoolantTempGauge
                  value={!playing ? value * 2.8 : progressValue * 1.8 + 100}
                />
                <BatteryGauge
                  value={!playing ? value * 0.15 : progressValue * 0.05 + 10}
                />
              </div>
              <div className="flex items-center justify-center p-4 space-x-6">
                <OilPressureGauge value={playing ? progressValue : value} />
                <OilTempGauge
                  value={!playing ? value * 3 : progressValue * 2 + 100}
                />
                <DefLevelGauge value={playing ? progressValue : value} />
              </div>
            </>
          )}
        </ChangingProgressProvider>
      
    </div>
  );
}
