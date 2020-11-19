import React from 'react'

const GroupBox = ({ title, legend, icon }) => {
  return (
    <div className='group-box'>
      {icon}
      <h3 className='capitalize text-3xl font-light text-gray-800'>{title}</h3>
      <p className='font-light text-gray-700'>
        {legend}
      </p>
    </div>
  )
}

export default GroupBox
