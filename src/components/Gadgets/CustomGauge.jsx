/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate'
import { FaRulerVertical, FaTemperatureLow } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";



const ColorLevel = (percent, colorOption) => {
    if (percent >= colorOption.min && percent <= colorOption.ll) {
        return "#ff0000";
    } else if (percent > colorOption.ll && percent <= colorOption.l) {
        return "#ffa700";
    } else if (percent > colorOption.l && percent <= colorOption.h) {
        return "#fff400";
    } else if (percent > colorOption.h && percent <= colorOption.hh) {
        return "#98de00";
    } else if (percent > colorOption.hh && percent <= colorOption.max) {
        return "#2cba00";
    }
};


function CustomGauge({value,title}) {

    const [values, setValues] = useState(value);

  
    const propsEl = ""

    const val = value;
    const startColor = '#35963b'; // cornflowerblue
    const endColor = '#9c1313'; // crimson
    const interpolate = interpolateRgb(startColor, endColor);
    const fillColor = interpolate(val / 100);

    let  colorOption = {
        min: 0,
        ll: 25,
        l: 50,
        h: 75,
        hh: 100,
        max: 100,
    };


    useEffect(() => {
        setValues(value);
    }, [value]);


    const gradientStops = [
        {
            key: '0%',
            stopColor: color(fillColor).darker(0.5).toString(),
            stopOpacity: 1,
            offset: '0%'
        },
        {
            key: '50%',
            stopColor: fillColor,
            stopOpacity: 0.75,
            offset: '50%'
        },
        {
            key: '100%',
            stopColor: color(fillColor).brighter(0.5).toString(),
            stopOpacity: 0.5,
            offset: '100%'
        }
    ];

  return (
      <button
        /*   onClick={() => {
              handleOpen(keyX);
          }} */
          key={1}
          className={`${propsEl} flex w-auto h-auto min-w-[266px]  md:h-[250px] hover:scale-105 transition-all duration-150 cursor-pointer`}
      >
          <div className="h-full px-10 py-10 md:py-4 w-full shadow rounded-md bg-[var(--color-fff)]   flex flex-col justify-center items-center">
              <h2 className="text-[var(--color-800)] text-4xl mb-8 font-bold">{ title || "No title"}</h2>
              <div className="flex flex-col md:flex-row gap-4">
                  <LiquidFillGauge
                      style={{ margin: "0 auto", transition: "all 3s" }}
                      width={150}
                      height={150}
                      gradientStops={gradientStops}
                      value={values}
                      textColor="var(--color-000)"
                      percent={true} // Display percentage
                      textSize={1}
                      textOffsetX={0}
                      textOffsetY={0}
                      textRenderer={(props) => {
                          const value = Math.round(props.value);
                          const radius = Math.min(props.height / 2, props.width / 2);
                          const textPixels = (props.textSize * radius) / 2;
                          const valueStyle = {
                              fontSize: textPixels,
                              fill: props.textColor,
                              transition: "all 3s",
                         

                          };


                          return (
                              <tspan>
                                  <tspan className="value" style={valueStyle}>
                                      {value}
                                  </tspan>
                                  <tspan style={valueStyle}>{props.percent ? "m" : ""}</tspan>
                              </tspan>
                          );


                      }}
                      riseAnimation
                      waveAnimation
                      waveFrequency={2}
                      waveAmplitude={1}
                      circleStyle={{
                          fill: "var(--color-700)",
                      }}
                      waveStyle={{
                          transition: "all 3s",
                          transitionTimingFunction: "linear",
                          fill: `${ColorLevel(value, colorOption)}`,
                      }}
                      textStyle={{
                          fill: "var(--color-000)",
                          fontFamily: "Arial",
                      }}
                      waveTextStyle={{
                          fill: 'rgb(255, 255, 255)',
                          fontFamily: 'Arial'
                      }}
                  />
                  <div className="flex flex-col  gap-4 justify-center items-start   w-36 h-full bg--500">
                      <div className="flex flex-row justify-between gap-7 ml-1 ">
                          <FaTemperatureLow size={20} />
                          <div>34 °C</div>
                      </div>

                      <div className="flex flex-row justify-between gap-7 ">
                          <FaRulerVertical size={20} />
                          <div>{(values).toFixed(2) + " m"}</div>
                      </div>

                      <div className="flex flex-row justify-between gap-7 ">
                          <FaDroplet size={20} />
                          <div>{(2.222).toFixed(2) + " %"}</div>
                      </div>
                  </div>
              </div>
          </div>
      </button>
  )
}

export default CustomGauge