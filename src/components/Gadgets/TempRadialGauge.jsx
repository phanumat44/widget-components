/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import { RadialGauge } from 'react-canvas-gauges';


const TempRadialGauge = ({value}) => {
    const [temperature, setTemperature] = useState(value);

    useEffect(() => {
     /*    const newLimit = () => Math.random() * 50;
        let limit = newLimit();
        let currentTemp = 0;
        let directionUp = true;
 */
        // const interval = setInterval(() => {
        //     currentTemp = directionUp ? currentTemp + 1 : currentTemp - 1;

        //     if (
        //         (currentTemp >= limit && directionUp) ||
        //         (currentTemp <= limit && !directionUp)
        //     ) {
        //         const nextLimit = newLimit();
        //         directionUp = nextLimit >= currentTemp;
        //     }

        //     setTemperature(currentTemp);
        // }, 200);

        // return () => {
        //     clearInterval(interval);
        // };

        setTemperature(value);
    }, [value]);

    return (
        <div>
            <RadialGauge
                units="°C"
                title="Temperature"
                value={temperature}
                minValue={0}
                maxValue={360}
                majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
                minorTicks={2}
            />
        </div>
    );
};

export default TempRadialGauge;