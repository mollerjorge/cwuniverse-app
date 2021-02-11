import React from 'react'
import PropTypes from 'prop-types'

import 'styles/tailwind.css'

const MyApp = ({ Component }) => {
  return <Component />
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
}

export default MyApp
