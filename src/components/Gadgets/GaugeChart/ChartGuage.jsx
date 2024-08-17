/* eslint-disable react/prop-types */

import { useRef, useEffect } from "react";
import Gauge from "./Gauge";


function ChartGuage({value}) {
  const gaugeRef = useRef(null);
  useEffect(() => {
  
      gaugeRef.current.updateData(value);
    
 
  }, [value]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ width: "370px", height: "370px" }}>
        <Gauge ref={gaugeRef} id="gauge-1" max="150" min="0" />
      </div>
    </div>
  );
}


export default ChartGuage;