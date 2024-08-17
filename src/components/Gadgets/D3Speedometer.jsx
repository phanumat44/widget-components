import ReactSpeedometer from "react-d3-speedometer"


// eslint-disable-next-line react/prop-types
function D3Speedometer({value}) {
  return (
      <div>
          <ReactSpeedometer
              width={400}
              needleHeightRatio={0.7}
              value={value * 10}
              currentValueText="Happiness Level"
              customSegmentLabels={[
                  {
                      text: 'Very Bad',
                      position: 'INSIDE',
                      color: '#fff',
                  },
                  {
                      text: 'Bad',
                      position: 'INSIDE',
                      color: '#fff',
                  },
                  {
                      text: 'Ok',
                      position: 'INSIDE',
                      color: '#fff',
                      fontSize: '19px',
                  },
                  {
                      text: 'Good',
                      position: 'INSIDE',
                      color: '#fff',
                  },
                  {
                      text: 'Very Good',
                      position: 'INSIDE',
                      color: '#fff',
                  },
              ]}
              ringWidth={47}
              needleTransitionDuration={3333}
              needleTransition="easeElastic"
              needleColor={'#90f2ff'}
              textColor={'#d8dee9'}
          />
      </div>
  )
}
export default D3Speedometer