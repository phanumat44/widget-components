import { Card as Cards } from 'antd'
import PropTypes from 'prop-types'

function Card({ children ,title, extra}) {
  return (
    <div className=" bg-white dark:bg-slate-500 rounded-lg overflow-hidden shadow-lg cursor-pointer flex justify-center  h-[339px]'  ">
      <Cards className='dark:bg-black/50 bg-white  min-h-[339px] mx-auto my-auto h-full dark:text-red' title={title || "No title"} extra={<a className='underline dark:text-white text-black' target='_blank' href={extra}>source</a>} style={{ width: '100%' }}>
              {children}
          </Cards>
    </div>
  )
}

// validtate the props
Card.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    extra: PropTypes.string.isRequired
}

export default Card