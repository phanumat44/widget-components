/* eslint-disable react/prop-types */
import { Nested } from '@alptugidin/react-circular-progress-bar'


function AlptugidinNest({value}) {
    return (
        <div className='w-72 h-full translate-x-10'>
      <Nested
          circles={[
              { text: 'Javascript', value: value, color: '#fde047' },
              { text: 'Typescript', value: value-5, color: '#0ea5e9' },
              { text: 'HTML', value: value-10, color: '#c2410c' },
              { text: 'CSS', value: value-8, color: '#7c3aed' },
              { text: 'SASS', value: value, color: '#c026d3' }
          ]}
          sx={{
              bgColor: '#cbd5e1',
              fontWeight: 'bolder',
              fontFamily: 'Georgia'
          }}
            />
            </div>
  )
}

export default AlptugidinNest