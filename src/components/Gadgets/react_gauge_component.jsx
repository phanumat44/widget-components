
import GaugeComponent from 'react-gauge-component'

function react_gauge_component({ value, type }) {

  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  return (
    <div className=' '>
    <GaugeComponent
      value={value}
        type={type}
    
      style={{width:'100%',height:'100%',color: isDarkMode ? 'white' : 'black'}}
      labels={{
        tickLabels: {
          type: "inner",
          ticks: [
            { value: 20 },
            { value: 40 },
            { value: 60 },
            { value: 80 },
            { value: 100 }
          ]
        }
      }}
      arc={{
        colorArray: ['#5BE12C', '#EA4228'],
        subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
        padding: 0.02,
        width: 0.3
      }}
      pointer={{
        elastic: true,
        animationDelay: 0
      }}
    />

    </div>
  )
}

export default react_gauge_component