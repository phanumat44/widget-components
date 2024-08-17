import GaugeComponent from "react-gauge-component"

// eslint-disable-next-line react/prop-types
function Gradientwitharrow({value}) {
  return (
      <GaugeComponent
          id="gauge-component4"
          arc={{
              gradient: true,
              width: 0.15,
              padding: 0,
              subArcs: [
                  {
                      limit: 15,
                      color: '#EA4228',
                      showTick: true
                  },
                  {
                      limit: 37,
                      color: '#F5CD19',
                      showTick: true
                  },
                  {
                      limit: 58,
                      color: '#5BE12C',
                      showTick: true
                  },
                  {
                      limit: 75,
                      color: '#F5CD19',
                      showTick: true
                  },
                  { color: '#EA4228' }
              ]
          }}
          value={value}
          pointer={{ type: "arrow", elastic: true }}
      />
  )
}

export default Gradientwitharrow