import { Progress } from "antd"

// eslint-disable-next-line react/prop-types
function AntDProgress({value,type}) {
  return (
      <div className="w-full h-full flex justify-center  items-center"> 
          <Progress
              style={{width:'auto'}}
              type={type}
              size={200}
           
              percent={value}
              trailColor="rgba(0, 0, 0, 0.06)"
              strokeWidth={20}
          />
    </div>
  )
}

export default AntDProgress