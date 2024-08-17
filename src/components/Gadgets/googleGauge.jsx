import { Chart } from "react-google-charts";


function googleGauge({ value }) {
    
    const options = {
        width:" 100%",
        height: 200,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5,
    };
    const data = [
        ['Label', 'Value'],
        ['GPU', value],
    ];
    return (
      <div className="w-full h-full flex justify-center  items-center"> 
            <Chart
                style={{alignSelf:'center'}}
          chartType="Gauge"
          width="auto"
          height="200px"
          data={data}
          options={options}
            />
        </div>
  )
}

export default googleGauge