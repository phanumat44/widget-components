/* eslint-disable react/prop-types */
import {  useMemo, useCallback } from "react";
import { animated } from "@react-spring/web";
import { useTheme } from "@nivo/core";
import { useTooltip } from "@nivo/tooltip";
import { RadialBar } from "@nivo/radial-bar";
import { BasicTooltip } from "@nivo/tooltip";

import "./styles.css";

const angleOffset = 130;
const steps = [50, 30, 20];
const colors = ["#B6CAFF", "#7FA1FF", "#2962FF"];

const CircularAxisCustom = ({ label, animated: animatedProps }) => {
    const theme = useTheme();

    if (![0, 100].includes(label)) {
        return null;
    }

    console.log(typeof label);

    return (
        <animated.g opacity={animatedProps.opacity}>
            <animated.text
                dx={animatedProps.textX}
                dy={animatedProps.textY}
                dominantBaseline="central"
                style={{
                    ...theme.axis.ticks.text,
                    fontSize: 16,
                }}
                textAnchor="middle"
            >
                {`${label}%`}
            </animated.text>
        </animated.g>
    );
};

const Metric = ({ center, value }) => {
    return (
        <text
            x={center[0]}
            y={center[1]}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontFamily: "roboto",
                fontWeight: "600",
                fontSize: 80,
                fill: "black",
            }}
        >
            {`${value}%`}
        </text>
    );
};

const Cursor = ({ center, outerRadius, innerRadius, value }) => {
    // Compute value color
    const color = useMemo(() => {
        const total = steps.reduce((acc, step) => acc + step, 0);

        return colors[
            steps.reduce(
                (acc, step, index) => (
                    (acc.sum += step),
                    acc.index === -1 && (value / total) * 100 <= (acc.sum / total) * 100
                        ? (acc.index = index)
                        : acc.index,
                    acc
                ),
                { sum: 0, index: -1 }
            ).index
        ];
    }, [value, colors]);

    const [x, y] = useMemo(() => {
        // Calcul de l'angle total
        const totalAngle = angleOffset * 2;

        // Calcul de l'angle pour la valeur donnée
        const normalizedValue = Math.max(0, Math.min(value, 100));
        const normalizedAngle = (normalizedValue / 100) * totalAngle;

        // Ajustement de l'angle pour l'orientation
        const angle = normalizedAngle - angleOffset - 90;

        // Calcul des coordonnées en fonction de l'angle
        const x =
            center[0] +
            (Math.cos(angle * (Math.PI / 180)) * (outerRadius + innerRadius)) / 2;
        const y =
            center[1] +
            (Math.sin(angle * (Math.PI / 180)) * (outerRadius + innerRadius)) / 2;

        return [x, y];
    }, [value, center, angleOffset, outerRadius, innerRadius]);

    // Tooltip
    const { showTooltipFromEvent, hideTooltip } = useTooltip();

    const renderTooltip = useMemo(
        // eslint-disable-next-line react/display-name
        () => () =>
        (
            <BasicTooltip
                enableChip={true}
                color={color}
                id="Valeur"
                value={`${value}%`}
            />
        ),
        [color, value]
    );

    const handleTooltip = useCallback(
        (event) => showTooltipFromEvent(renderTooltip(), event),
        [showTooltipFromEvent, renderTooltip]
    );

    const handleMouseEnter = useCallback(
        (event) => {
            showTooltipFromEvent(renderTooltip(), event);
        },
        [showTooltipFromEvent, renderTooltip]
    );

    const handleMouseLeave = useCallback(() => {
        hideTooltip();
    }, [hideTooltip]);

    return (
        <circle
            cx={x}
            cy={y}
            r={24}
            fill="white"
            stroke={color}
            strokeWidth={8}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleTooltip}
            onMouseLeave={handleMouseLeave}
        />
    );
};

function NivoGauge({value}) {


    const stepsSum = useMemo(() => steps.reduce((a, b) => a + b, 0), [steps]);

    return (
        <div className="App">
            <RadialBar
                width={360}
                height={360}
                valueFormat={(v) => `${v}%`}
                maxValue={stepsSum}
                startAngle={`-${angleOffset}`}
                endAngle={angleOffset}
                cornerRadius={0}
                margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
                innerRadius={0.7}
                padAngle={1}
                radialAxisStart={false}
                enableRadialGrid={false}
                enableCircularGrid={false}
                circularAxisOuter={{
                    tickSize: 0,
                    tickPadding: 24,
                    tickComponent: CircularAxisCustom,
                }}
                tooltip={({ bar }) => {
                    return (
                        <BasicTooltip
                            enableChip={true}
                            color={bar.color}
                            id={`Seuil n°${bar?.data?.index + 1}`}
                            value={bar.formattedValue}
                        />
                    );
                }}
                colors={(bar) => bar?.data?.color}
                tracksColor="transparent"
                data={[
                    {
                        id: "Seuil",
                        data: steps.map((step, index) => ({
                            index,
                            y: step,
                            x: `${step}%`,
                            color: colors[index],
                        })),
                    },
                ]}
                layers={[
                    "tracks",
                    "bars",
                    "grid",
                    (props) => <Metric {...props} value={value} />,
                    (props) => <Cursor {...props} value={value} />,
                ]}
            />

        </div>
    );
}


export default NivoGauge;