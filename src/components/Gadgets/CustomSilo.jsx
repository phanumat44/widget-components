/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CountUp from "react-countup";



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


function CustomSilo({ value}) {

    const [values, setValues] = useState(value);
    const Y_axis = -1.75 * values + 205;
    
    const keyX = 5;
  

 

    let colorOption = {
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


   
    return (
        <div className="flex flex-col gap-2 items-center justify-center ">
     

      
                <div className="flex justify-center ">
                    <svg
                        className="pt-4"
                        width="81"
                        height="260"
                        viewBox="0 0 81 260"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 8C0 3.58172 3.58172 0 8 0H73C77.4183 0 81 3.58172 81 8V209.239C81 210.643 80.6303 212.023 79.9282 213.239L55.2403 256C53.8112 258.475 51.1702 260 48.312 260H35.4175C32.5594 260 29.9184 258.475 28.4893 256L1.0718 208.511C0.36965 207.295 0 205.916 0 204.511V8Z"
                            fill="#bababa"
                        />
                        <rect
                            x="4.5"
                            y="30.5"
                            width="72"
                            height="174"
                            rx="4.5"
                            fill="#5F625F"
                            fillOpacity="0.69"
                            stroke="#6D6D6D"
                        />
                        <clipPath id={`cut-top-${keyX}`}>
                            <rect
                                x="0"
                                y={`${Y_axis}`}
                                width="81"
                                height="180"
                                style={{ transition: "all 3s" }}
                            />
                        </clipPath>

                        <rect
                            className="transition"
                            style={{ transition: "all 1s" }}
                            x="4"
                            y="30.5"
                            width="73"
                            height="174"
                            rx="5"
                            fill={ColorLevel(parseInt(values), colorOption)}
                            clipPath={`url(#cut-top-${keyX})`}
                        />
                    </svg>
                </div>



                <div className="absolute bottom-1/2 left-1/2  transform -translate-x-1/2  w-[90%] flex flex-col items-center gap-2 justify-center">
                    <p
                        className="text-black z-40"
                        style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.4)" }}>
                        <CountUp end={value} duration={2} />%
                    </p>
                </div>
         
           
            </div>
    )
}

export default CustomSilo