import Thermometer from 'react-thermometer-component'

// eslint-disable-next-line react/prop-types
function Thermometers({value}) {
  return (
    <div className="w-full h-full flex justify-center  items-center"> 
      <Thermometer
          theme="light"
          value={value.toString()}
          max="100"
          steps="3"
          format="°C"
          size="large"
      height="250"
      width="auto"
      />
      </div>
  )
}

export default Thermometers