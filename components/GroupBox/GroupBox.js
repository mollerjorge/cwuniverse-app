import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const GroupBox = ({ title, legend, icon, path }) => {
  return (
    <Link href={path} passHref>
      <div className="group-box gradient focus:outline-none">
        {icon}
        <h3 className="capitalize text-26 font-normal text-gray antialiased font-raleway">
          {title}
        </h3>
        <p className="font-light text-gray-700 antialiased text-left">{legend}</p>
      </div>
    </Link>
  )
}

GroupBox.propTypes = {
  title: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  path: PropTypes.string.isRequired,
}

export default GroupBox
