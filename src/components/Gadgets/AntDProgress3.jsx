import { Progress } from "antd"

// eslint-disable-next-line react/prop-types
function AntDProgress({value}) {
  return (
      <div className="w-full h-full flex justify-center translate-y-16 items-center"> 
          <Progress
              style={{width:'auto',height:'100%'}}
        status="active"
        strokeColor={{
          from: '#5BE12C',
          to: '#1677FF',
        }}
        size={[300, 50]}
              
              percent={value}
             
          />
    </div>
  )
}

export default AntDProgress