import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const SelectBox = ({ children, onClick, name, active, className }) => {
  return (
    <button
      onClick={() => {
        onClick(name)
      }}
      type="button"
      className={classNames(
        'relative bg-transparent w-60 py-10 px-5 shadow-xl flex flex-col justify-start items-center rounded-md pointer transition-all transform scale-105 border-1 hover:border-blue',
        className,
        'select-box'
      )}
    >
      {children}
    </button>
  )
}

SelectBox.Image = ({ image }) => <img src={image} alt="group icon" width={64} />

SelectBox.Legend = ({ children }) => <div>{children}</div>

SelectBox.Title = ({ children }) => (
  <h2 className="text-base mt-5 uppercase mb-3 font-semibold font-lato antialiased text-black">
    {children}
  </h2>
)

SelectBox.Description = ({ children }) => (
  <p className="text-sm text-gray-500 text-center">{children}</p>
)

SelectBox.Image.displayName = 'Image'
SelectBox.Legend.displayName = 'Legend'
SelectBox.Title.displayName = 'Title'
SelectBox.Description.displayName = 'Description'

SelectBox.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

SelectBox.defaultProps = {
  active: false,
}

SelectBox.Image.propTypes = {
  image: PropTypes.string.isRequired,
}

SelectBox.Legend.propTypes = {
  children: PropTypes.node.isRequired,
}

SelectBox.Title.propTypes = {
  children: PropTypes.node.isRequired,
}

SelectBox.Description.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SelectBox
