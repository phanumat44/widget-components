/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';
import { Animate } from "react-move";
import { easeQuadInOut } from "d3-ease";

const AnimatedProgressProvider = ({ valueStart = 0, valueEnd, duration, easingFunction, children }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(false);
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 0); // Small delay to ensure the state change triggers re-render
        return () => clearTimeout(timer);
    }, [valueEnd]);

    return (
        <Animate
            start={() => ({
                value: valueStart
            })}
            update={() => ({
                value: [
                    isAnimated ? valueEnd : valueStart
                ],
                timing: {
                    duration: duration * 1000,
                    ease: easingFunction
                }
            })}
        >
            {({ value }) => children(value)}
        </Animate>
    );
};

const ReactCircularProgressbar = ({ value,size=200 }) => {

    const sizeStyle = {
        width: `${size}px`,
        height: `${size}px`,
        
    };
    return (
        <div style={sizeStyle} className='flex justify-center items-center translate-x-24'>
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={value}
            duration={1.4}
            easingFunction={easeQuadInOut}
        >
            {animatedValue => {
                const roundedValue = Math.round(animatedValue);
                return (
                    <CircularProgressbar
                        value={animatedValue}
                        text={`${roundedValue}%`}
                        styles={buildStyles({ pathTransition: "none",width:100,height:100 })}
                    />
                );
            }}
            </AnimatedProgressProvider>
        </div>
    );
};

export default ReactCircularProgressbar;
