import Card from "./components/Card"
import { useState } from 'react'
import { SunFilled, MoonFilled } from '@ant-design/icons';
import { Switch, Slider, Row, Col, InputNumber, FloatButton } from 'antd';
import { MinusOutlined, PlusOutlined, ControlOutlined, QuestionCircleOutlined } from '@ant-design/icons';


// Gadgets
import {
  React_gauge_component,
  KbitsToMbits,
  Temperature,
  GaugeWithBlob,
  RadialGauge,
  GoogleGauge,
  D3Speedometer,
  Thermometers,
  AntDProgress,
  AntDProgress2,
  AntDProgress3,
  CustomGauge,
  CustomSilo,
  ReactCircularProgressbar,
  D3Gauge,
  AlptugidinFlat,
  AlptugidinHeat,
  AlptugidinNest,
  Arced,
  UseGauge,
  UseGaugeWithColor,
  TempRadialGauge,
  BatteryGauge,
  D3Guage2,
  GaugeV5,
  NivoGauge,
  GaugeChart,
  CustomGlass,


} from "./components/Gadgets"
import WaterTank from "./lab2";




function App() {

  const [value, setValue] = useState(50)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  // return random number 0-100

  const randomValue = () => {
    const ranNum = Math.floor(Math.random() * 100);
    console.log(ranNum)
    setValue(ranNum);
    /*  return Math.floor(Math.random() * 100); */
  }




  return (
    <div className="p-8 bg-white min-h-screen dark:bg-slate-800">

      <h1 className="text-3xl  text-black/90 dark:text-white font-bold text-center w-full mb-10 ">React Gadgets</h1>
      <Row justify={'center'}>

        <h3 className="text-lg text-black/90 dark:text-white font-bold">Value</h3>

        <Col span={5}>
          <Slider
            tooltip={{
              open: true,
            }}
            min={0}
            max={100}
            onChange={onChange}
            value={typeof value === 'number' ? value : 0}
          />
        </Col>

        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={value}
          onChange={onChange}
        />

      </Row>
      <div className="flex justify-center items-center my-5">
        <Switch
          checkedChildren={<MoonFilled />}
          unCheckedChildren={<SunFilled />}

          value={isDarkMode}
          onChange={(e) => toggleDarkMode(e)}
        />
      </div>
      <WaterTank value={value} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        <Card title="Simple Gauge." extra="https://www.npmjs.com/package/react-gauge-component">
          <React_gauge_component value={value} type={undefined} />
        </Card>
        <Card title="kbitsToMbits." extra="https://www.npmjs.com/package/react-gauge-component">
          <KbitsToMbits value={value} />
        </Card>
        <Card title="Temperature" extra="https://www.npmjs.com/package/react-gauge-component">
          <Temperature value={value} />
        </Card>
        <Card title="GaugeWithBlob" extra="https://www.npmjs.com/package/react-gauge-component">
          <GaugeWithBlob value={value} />
        </Card>
        <Card title="Radial Gauge." extra="https://www.npmjs.com/package/react-gauge-component">
          <RadialGauge value={value} />
        </Card>
        <Card title="google Gauge." extra="https://www.react-google-charts.com/examples/gauge">
          <GoogleGauge value={value} />
        </Card>
        <Card title="D3Speedometer" extra="https://www.npmjs.com/package/react-d3-speedometer">
          <D3Speedometer value={value} />
        </Card>
        <Card title="Thermometer." extra="https://zamarrowski.github.io/react-thermometer-component/">
          <Thermometers value={value} />
        </Card>
        <Card title="AntD Progress 1." extra="https://ant.design/components/progress">
          <AntDProgress value={value} type={'dashboard'} />
        </Card>
        <Card title="AntD Progress 2." extra="https://ant.design/components/progress">
          <AntDProgress2 value={value} type={'circle'} />
        </Card>
        <Card title="AntD Progress 3." extra="https://ant.design/components/progress">
          <AntDProgress3 value={value} />
        </Card>
        <Card title="Custom Gauge" extra="https://www.npmjs.com/package/react-liquid-gauge">
          <CustomGauge value={value} title={"Liquid Gauge"} />
        </Card>
        <Card title="Custom Silo" extra="#">
          <CustomSilo value={value} title={"Liquid Gauge"} />
        </Card>
        <Card title="React Circular Progressbar" extra="https://www.npmjs.com/package/react-circular-progressbar">
          <ReactCircularProgressbar value={value} />
        </Card>

        <Card title="D3 Gauge" extra="https://codesandbox.io/s/react-svg-gauge-66c4t?file=/src/Gauge.js:0-3225">
          <D3Gauge value={value} />
        </Card>

        <Card title=" flat progress." extra="https://alptugidin.github.io/react-circular-progress-bar/">
          <AlptugidinFlat value={value} />
        </Card>

        <Card title=" heat progress." extra="https://alptugidin.github.io/react-circular-progress-bar/">
          <AlptugidinHeat value={value} />
        </Card>

        <Card title=" nest progress." extra="https://alptugidin.github.io/react-circular-progress-bar/">
          <AlptugidinNest value={value} />
        </Card>

        <Card title="Arced" extra="https://www.npmjs.com/package/use-gauge">
          <Arced value={value} />
        </Card>

        <Card title="use gauge speedmeter" extra="https://www.npmjs.com/package/use-gauge">
          <UseGauge value={value} />
        </Card>

        <Card title="use gauge wth color" extra="https://codesandbox.io/s/gauge-chart-final-8m4s3l?file=/src/App.tsx:354-554">
          <UseGaugeWithColor value={value} />
        </Card>

        <Card title="React Temperature Gauge" extra="https://github.com/1995parham/react-canvas-gauges">
          <TempRadialGauge value={value} />
        </Card>

        <Card title="BatteryGauge" extra="https://github.com/Umerbhat/react-battery-gauge">
          <BatteryGauge value={value} />
        </Card>

        <Card title="D3Guage2" extra="https://codesandbox.io/s/gauge-hm2kdn">
          <D3Guage2 value={value} />
        </Card>

        <Card title="GaugeV5" extra="https://codesandbox.io/s/gauge-v5-hjoif1">
          <GaugeV5 value={value} />
        </Card>

        <Card title="NivoGauge" extra="https://codesandbox.io/s/progress-gauge-nivo-287376">
          <NivoGauge value={value} />
        </Card>

        <Card title="GaugeChart" extra="https://codesandbox.io/s/github/Dariush-Hassani/React-SVG-gauge-chart-with-real-time-updating-and-easing-animation/">
          <GaugeChart value={value} />
        </Card>

        <Card title="CustomGlass" extra="">
          <CustomGlass value={value} />
        </Card>

        <Card title="TEST" extra="">
          <div className="bg-[#f9f9f9] p-48 w-full h-full">
            <div className="w-36 h-36 rounded-full element">

            </div>
          </div>
        </Card>

       
      

      </div>
      <FloatButton.Group
        trigger="click"

        width={100}

        type="primary"
        style={{
          right: 24,
        }}
        icon={<ControlOutlined />}
      >
        <FloatButton onClick={(e) => { randomValue(e) }} icon={<QuestionCircleOutlined />} />
        <FloatButton disabled={value === 100} onClick={() => { setValue(value + 1) }} icon={<PlusOutlined />} />
        <FloatButton disabled={value === 0} onClick={() => { setValue(value - 1) }} icon={<MinusOutlined />} />
      </FloatButton.Group>
    </div>
  )
}

export default App
