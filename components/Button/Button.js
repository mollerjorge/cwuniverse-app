import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, ...rest }) => {
  return (
    <button type="button" className={`btn btn-primary ${className}`} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
}

export default Button
