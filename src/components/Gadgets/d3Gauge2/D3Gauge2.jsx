/* eslint-disable react/prop-types */
import "./styles.css";
import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";


function D3Guage2({value}) {

   
    const percentScale = scaleLinear().domain([0, 100]).range([0, 1]);
    const angleScale = scaleLinear()
        .domain([0, 1])
        .range([-Math.PI / 2 - 0.3, Math.PI / 2 + 0.3])
        .clamp(true);

    const angle = (percent) => angleScale(percentScale(percent));

    const green = arc()
        .innerRadius(0.92)
        .outerRadius(1)
        .startAngle(angle(0))
        .endAngle(angle(8))
        .cornerRadius(1)();

    const yellow = arc()
        .innerRadius(0.92)
        .outerRadius(1)
        .startAngle(angle(9))
        .endAngle(angle(49))
        .cornerRadius(1)();

    const red = arc()
        .innerRadius(0.92)
        .outerRadius(1)
        .startAngle(angle(50))
        .endAngle(angle(100))
        .cornerRadius(1)();

    const getCoordsOnArc = (angle, offset = 10) => [
        Math.cos(angle - Math.PI / 2) * offset,
        Math.sin(angle - Math.PI / 2) * offset
    ];

    const markerLocation = getCoordsOnArc(angle(value), 1 - (1 - 0.92) / 2);

    const getCircleStrokeColor = (value) => {
        if (value < 10) {
            return " #5BCB77";
        }
        if (value < 50 && value > 9) {
            return "#F59E0B";
        }
        return "#EF4444";
    };

    return (
        <div className="flex justify-center items-center">
        <div className="wrapper ">
            <div className="labels">
                <span className="number">{value}</span>
                <span className="desc">No risk</span>
            </div>
            <div className="hints">
                <span className="min">0</span>
                <span className="max">100</span>
            </div>
            <svg
                width="20em"
                height="16em"
                viewBox="-1.1 -1 2.2 1.5"
                style={{ }}
            >
                <path d={green} fill="#5BCB77" />
                <path d={yellow} fill="#F59E0B" />
                <path d={red} fill="#EF4444" />
                <circle
                    cx={markerLocation[0]}
                    cy={markerLocation[1]}
                    r="0.06"
                    stroke={getCircleStrokeColor(value)}
                    strokeWidth="0.04"
                    fill="white"
                />
            </svg>
            </div>
        </div>
    );
}

export default D3Guage2;
