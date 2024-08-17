/* eslint-disable react/prop-types */
import { Heat } from '@alptugidin/react-circular-progress-bar'
import { useEffect, useState } from 'react'


function AlptugidinHeat({ value }) {
  
  const [values, setValues] = useState(value)

  useEffect(() => {
    setValues(value);
  }, [value])


    return (
        <div className='w-72 h-full translate-x-10'>
      <Heat
          progress={values}
          text={'Lorem ipsum'}
          sx={{
              bgColor: '#ffffff',
              barWidth: 10,
              valueSize: 27,
              valueColor: '#e66100',
              valueFamily: 'Arial Black',
              textColor: '#9141ac'
          }}
            />
            </div>
  )
}

export default AlptugidinHeat