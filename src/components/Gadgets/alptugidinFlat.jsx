/* eslint-disable react/prop-types */
import { Flat } from '@alptugidin/react-circular-progress-bar'
import { useEffect, useState } from 'react'

function AlptugidinFlat({ value }) {
  
  const [values, setValues] = useState(value)

  useEffect(() => {
    setValues(value);
  }, [value])

    return (
      <div className='w-72 h-full translate-x-10'>
      <Flat
          progress={values}
          text={'Lorem ipsum'}
          sx={{
              strokeColor: '#ff0000',
              barWidth: 3,
              valueWeight: 'bold'
          }}
            />
        </div>
  )
}

export default AlptugidinFlat