import React from 'react'

const GroupBox = ({ title, legend, icon }) => {
  return (
    <div className='group-box gradient'>
      {icon}
      <h3 className='capitalize text-26 font-normal text-gray antialiased font-raleway'>{title}</h3>
      <p className='font-light text-gray-700 antialiased'>
        {legend}
      </p>
    </div>
  )
}

export default GroupBox
