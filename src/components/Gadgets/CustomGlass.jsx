/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";




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


function CustomGlass({ value}) {

    const [values, setValues] = useState(value);
   
    
    const keyX = 5;

    function mapPercentage(percent) {
        const maxValue = 496.944;
   

        // Ensure the percent value is within the valid range
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;

        // Calculate the mapped value
        const mappedValue = maxValue - (percent / 100) * maxValue;

        return mappedValue;
    }
  
    let Y_axis = 0;

    Y_axis = mapPercentage(values);

  
    console.log("Y_axis", Y_axis);
 

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
               
            </div>
            
            <svg width="200" height="300" viewBox="0 0 494 551" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.89273 18.7109C0.879727 8.69671 8.74108 0 18.8064 0H475.194C485.259 0 493.12 8.69669 492.107 18.7109L442.237 511.711C441.359 520.393 434.05 527 425.324 527H68.6765C59.9501 527 52.641 520.393 51.7628 511.711L1.89273 18.7109Z" fill="#BBBBBB" />
                <path d="M23 0H472L425.03 486.633C424.189 495.349 416.865 502 408.109 502H86.8914C78.1352 502 70.8113 495.349 69.97 486.633L23 0Z" fill="white" />

                <clipPath id={`cut-half-${keyX}`}>
                    <rect x="0" y={`${Y_axis}`} width="100%" height="100%" style={{transition : 'all 2s linear'}} />
                </clipPath>

                <path d="M29 0H465L421.006 464.719C419.569 479.891 418.851 487.477 413.882 492.134C413.752 492.255 413.621 492.374 413.489 492.492C408.384 497 400.764 497 385.524 497H108.476C93.236 497 85.6162 497 80.5114 492.492C80.3786 492.374 80.2475 492.255 80.1183 492.134C75.1488 487.477 74.4307 479.891 72.9944 464.719L29 0Z"
                    fill={ColorLevel(parseInt(values), colorOption)} fillOpacity="0.41"
                    clipPath={`url(#cut-half-${keyX})`} />
            </svg>


                <div className="absolute bottom-1/2 left-1/2  transform -translate-x-1/2  w-[90%] flex flex-col items-center gap-2 justify-center">
                    <p
                        className="text-black text-5xl z-40"
                        style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.4)" }}>
                       {value} %
                    </p>
                </div>
         
           
            </div>
    )
}

export default CustomGlass