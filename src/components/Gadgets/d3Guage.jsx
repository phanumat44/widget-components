/* eslint-disable react/prop-types */
// https://wattenberger.com/blog/gauge

import { format } from 'd3-format'
import { arc } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { useEffect, useState } from 'react'


const TAU = Math.PI * 2

const D3Gauge = ({ value = 50, min = 0, max = 100, label, units }) => {

    const [values, setValues] = useState(value)

    useEffect(() => {
        setValues(value);
    }, [value])


    const backgroundArc = arc()
        .innerRadius(0.75)
        .outerRadius(1)
        .startAngle(TAU * -0.25)
        .endAngle(TAU * 0.25)
        .cornerRadius(1)()

    const percentScale = scaleLinear()
        .domain([min, max])
        .range([0, 1])

    const percent = percentScale(values)

    const angleScale = scaleLinear()
        .domain([0, 1])
        .range([TAU * -0.25, TAU * 0.25])
        .clamp(true)

    const angle = angleScale(percent)

    const filledArc = arc()
        .innerRadius(0.75)
        .outerRadius(1)
        .startAngle(TAU * -0.25)
        .endAngle(angle)
        .cornerRadius(1)()

    const colorScale = scaleLinear()
        .domain([0, 1])
        .range(['#dbdbe7', '#4834d4'])

    const gradientSteps = colorScale.ticks(10).map(val => colorScale(val))

    return (
        <div className='w-72 h-full translate-x-10'>
        <div style={{ textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
            <svg viewBox={[-1, -1, 2, 1].join(' ')} style={{ overflow: 'visible' }}>
                <defs>
                    <linearGradient
                        id="Gauge__gradient"
                        gradientUnits="userSpaceOnUse"
                        style={{ transition: 'fill 1s'}}
                        x1={-1}
                        x2={1}
                        y2={0}
                    >
                        {gradientSteps.map((color, index, arr) => (
                            <stop
                                key={color}
                                stopColor={color}
                                offset={index / (arr.length - 1)}
                            />
                        ))}
                    </linearGradient>
                </defs>

                <path d={backgroundArc} fill="#dbdbe7" />
                <path d={filledArc} fill="url(#Gauge__gradient)" />

                <path
                    d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
                    transform={`rotate(${angle * (360 / TAU)}) translate(-0.2, -0.33)`}
                    fill="#6a6a85"
                />
            </svg>

            <div
                style={{
                    marginTop: '4rem',
                    fontSize: '3rem',
                    lineHeight: '1',
                    fontWeight: '900',
                    fontFeatureSettings: "'zero', 'tnum' 1"
                }}
            >
                    {format(',')(values)}
            </div>
            {!!label && (
                <div
                    style={{
                        color: '#8b8ba7',
                        marginTop: '1rem',
                        fontSize: '2rem',
                        lineHeight: '1',
                        fontWeight: '700'
                    }}
                >
                    {label}
                </div>
            )}
            {!!units && (
                <div
                    style={{
                        color: '#8b8ba7',
                        marginTop: '0.5rem',
                        fontSize: '1.25rem',
                        lineHeight: '1',
                        fontWeight: '300'
                    }}
                >
                    {units}
                </div>
            )}
            </div>
        </div>
    )
}
export default D3Gauge
