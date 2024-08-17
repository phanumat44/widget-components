/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import cc from "classcat";
import { useGauge } from "use-gauge";
import { motion, MotionConfig } from "framer-motion";

const useSpeedTest = (props) => {
    const [value, setValue] = useState(props?.value || 0);

    useEffect(() => {
        setValue(props?.value);

        console.log("value: ", props?.value)
    }, [props?.value]);



    return {
        value: Math.min(value, 100)
    };
};

const Speed = ({ value }) => {
    const gauge = useGauge({
        domain: [0, 100],
        startAngle: 90,
        endAngle: 270,
        numTicks: 21,
        diameter: 400
    });

    const needle = gauge.getNeedleProps({
        value,
        baseRadius: 8,
        tipRadius: 2
    });

    return (
        <div>
            <svg className="w-full overflow-visible p-4" {...gauge.getSVGProps()}>
                <g id="ticks">
                    {gauge.ticks.map((angle) => {
                        const asValue = gauge.angleToValue(angle);
                        const showText = asValue % 20 === 0;

                        return (
                            <React.Fragment key={`tick-group-${angle}`}>
                                <line
                                    className={cc([
                                        "stroke-gray-300",
                                        {
                                            "stroke-green-300": asValue <= 20,
                                            "stroke-yellow-300": asValue >= 60 && asValue <= 80,
                                            "stroke-red-400": asValue >= 80
                                        }
                                    ])}
                                    strokeWidth={2}
                                    {...gauge.getTickProps({
                                        angle,
                                        length: 8
                                    })}
                                />
                                {showText && (
                                    <text
                                        className="fill-gray-400 font-medium"
                                        {...gauge.getLabelProps({ angle, offset: 20 })}
                                    >
                                        {asValue}
                                    </text>
                                )}
                            </React.Fragment>
                        );
                    })}
                </g>
                <g id="needle">
                    <motion.circle
                        className="fill-gray-200"
                        animate={{
                            cx: needle.base.cx,
                            cy: needle.base.cy
                        }}
                        r={12}
                    />
                    <motion.circle
                        className="fill-orange-400"
                        animate={{
                            cx: needle.base.cx,
                            cy: needle.base.cy
                        }}
                        r={6}
                    />
                    <motion.line
                        className="stroke-orange-400"
                        strokeLinecap="round"
                        strokeWidth={4}
                        animate={{
                            x1: needle.base.cx,
                            x2: needle.tip.cx,
                            y1: needle.base.cy,
                            y2: needle.tip.cy
                        }}
                    />
                </g>
            </svg>
        </div>
    );
}

const UseGauge = (props) => {
    const { value } = useSpeedTest(props);
    return (
        <MotionConfig transition={{ type: "tween", ease: "linear" }}>
            <Speed value={value} />
        </MotionConfig>
    );
}

export default UseGauge;
