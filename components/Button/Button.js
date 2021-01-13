import React from 'react'

const Button = ({ children, className }) => {
  return (
    <a href="#" className={`btn btn-primary ${className}`}>
      {children}
    </a>
  )
}

export default Button
