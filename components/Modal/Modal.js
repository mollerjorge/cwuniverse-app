import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ show, onHide, children, hideOnOustideClick }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setIsModalVisible(show)
  }, [show])

  const animation = {
    y: '-50%',
    x: '-50%',
    opacity: 1,
    transition: { duration: 0.5 },
  }

  const exitAnimation = {
    y: '-100%',
    x: '-50%',
    opacity: 0,
    transition: { duration: 0.5 },
  }

  return (
    <AnimatePresence>
      {isModalVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ background: 'rgba(0, 0, 0, 0.6)', zIndex: '9999' }}
          className="h-full left-0 top-0 fixed w-full"
          onClick={(event) => {
            event.stopPropagation()
            if (hideOnOustideClick) {
              onHide()
            }
          }}
        >
          <motion.div
            initial={{ y: '-100%', x: '-50%', opacity: 1 }}
            animate={animation}
            exit={exitAnimation}
            className="bg-white rounded-md flex flex-col left-1/2 top-1/2 fixed -translate-x-1/2"
            onClick={(event) => {
              event.stopPropagation()
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Modal.displayName = 'Modal'

Modal.Title = ({ children }) => <h1 className="text-white text-2xl m-0">{children}</h1>

Modal.Body = ({ children }) => <div className="py-16 px-20">{children}</div>

Modal.Body.displayName = 'ModalBody'
Modal.Title.displayName = 'ModalTitle'

Modal.Title.propTypes = {
  children: PropTypes.node.isRequired,
}

Modal.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Modal.Body.defaultProps = {
  className: '',
  children: null,
}

Modal.defaultProps = {
  className: '',
  hideOnOustideClick: true,
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hideOnOustideClick: PropTypes.bool,
}

export default Modal
