/* eslint-disable react/prop-types */
import React from "react";
import { useGauge } from "use-gauge";
import "./styles.css";

const START_ANGLE = 45;
const END_ANGLE = 325;

function UseGaugewithColor({ value }) {
     
    
    
    const AceSetting = {
        primary: { value: 50, class: "primary-stroke" },
        seconday: { value: 70, class: "second-stroke" },
        tertiary: { value: 100, class: "third-stroke" }
    };
    
    const { primary, seconday, tertiary } = AceSetting;

    const gauge = useGauge({
        domain: [0, 100],
        startAngle: START_ANGLE,
        endAngle: END_ANGLE,
        numTicks: 50,
        diameter: 220
    });
    const gauge2 = useGauge({
        domain: [0, 100],
        startAngle: START_ANGLE,
        endAngle: END_ANGLE,
        numTicks: 100,
        diameter: 320
    });

    const needle = gauge.getNeedleProps({
        value,
        baseRadius: 10,
        tipRadius: 2
    });
    const getClassByValue = (val) => {
        return val <= primary.value
            ? primary.class
            : val <= seconday.value
                ? seconday.class
                : tertiary.class;
    };

    return (
        <div className="p-4 d-none">
            <svg className="w-full overflow-visible p-2" {...gauge.getSVGProps()}>
                <defs>
                    <clipPath id="cut-off">
                        <circle cx="0" cy="50" r="100" />
                    </clipPath>
                    <linearGradient id="green">
                        <stop offset="0" stopColor="#63A313" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="#B4E28F" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <clipPath id="cut-off">
                        <circle cx="0" cy="50" r="100" />
                    </clipPath>
                    <linearGradient id="yellow">
                        <stop offset="0" stopColor="#EDC022" stopOpacity=".3"></stop>
                        <stop offset="100%" stopColor="#EDC022" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <clipPath id="cut-off">
                        <circle cx="0" cy="50" r="100" />
                    </clipPath>
                    <linearGradient id="red">
                        <stop offset="0" stopColor="#CD4641" stopOpacity=".3"></stop>
                        <stop offset="100%" stopColor="#CD4641" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <g id="ticksOut">
                    <path
                        {...gauge.getArcProps({
                            offset: 0,
                            startAngle: START_ANGLE,
                            endAngle: gauge.valueToAngle(primary.value)
                        })}
                        fill="none"
                        className={getClassByValue(primary.value)}
                        strokeLinecap="round"
                        strokeWidth={5}
                    />
                    <path
                        {...gauge.getArcProps({
                            offset: 0,
                            startAngle: gauge.valueToAngle(primary.value + 1),
                            endAngle: gauge.valueToAngle(seconday.value)
                        })}
                        fill="none"
                        className={getClassByValue(seconday.value)}
                        strokeLinecap="round"
                        strokeWidth={5}
                    />
                    <path
                        {...gauge.getArcProps({
                            offset: 0,
                            startAngle: gauge.valueToAngle(seconday.value),
                            endAngle: gauge.valueToAngle(tertiary.value)
                        })}
                        fill="none"
                        className={getClassByValue(tertiary.value)}
                        strokeLinecap="round"
                        strokeWidth={5}
                    />
                </g>
                <g id="ticks">
                    {gauge2.ticks.map((angle) => {
                        const asValue = gauge2.angleToValue(angle);
                        const showText = asValue === 11 || asValue === 20 || asValue === 30;

                        return (
                            <React.Fragment key={`tick-group-${angle}`}>
                                <line
                                    className="stroke-gray-300"
                                    strokeWidth={2}
                                    {...gauge2.getTickProps({ angle, length: showText ? 10 : 6 })}
                                />
                            </React.Fragment>
                        );
                    })}
                </g>
                <g id="arcs">
                    <path
                        {...gauge.getArcProps({
                            offset: 30,
                            startAngle: START_ANGLE,
                            endAngle: END_ANGLE
                        })}
                        fill="none"
                        className="stroke-gray-200"
                        strokeLinecap="round"
                        strokeWidth={24}
                    />

                    <path
                        {...gauge.getArcProps({
                            offset: 30,
                            startAngle: START_ANGLE,
                            endAngle: gauge.valueToAngle(value)
                        })}
                        fill="none"
                        className={getClassByValue(value)}
                        strokeLinecap="round"
                        strokeWidth={24}
                    />
                </g>

                <g id="needle">
                    <circle className="fill-gray-300" {...needle.base} r={20} />
                    <circle className="fill-gray-700" {...needle.base} />
                    <circle className="fill-gray-700" {...needle.tip} />
                    <polyline className="fill-gray-700" points={needle.points} />
                    <circle className="fill-white" {...needle.base} r={4} />
                    <text fontSize="22" x="0" y="100" textAnchor="middle">
                        {`${value}%`}
                    </text>
                </g>

                <svg x="-25" y="0">
                    <path
                        strokeWidth="4"
                        className={getClassByValue(value)}
                        d="m0 110 l50 0"
                    />
                </svg>
            </svg>
        </div>
    );
}

export default UseGaugewithColor;