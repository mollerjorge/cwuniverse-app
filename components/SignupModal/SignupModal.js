import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Modal from 'components/Modal'
import SelectBox from 'components/SelectBox'

const GROUP_TYPES = {
  FOUNDER: 'FOUNDER',
  INVESTOR: 'INVESTOR',
  OTHER: 'OTHER',
}

const SignupModal = ({ isOpen, onHide }) => {
  const [groupTypeSelected, setGroupTypeSelected] = useState('')

  const onSelectGroupType = (groupName) => {
    setGroupTypeSelected(groupName)
    if (groupName !== GROUP_TYPES.FOUNDER) {
      window.open('https://cwuniverse.app/access-request', '_blank')
    } else {
      window.open('https://cwuniverse.app/welcome', '_blank')
    }
  }

  return (
    <Modal show={isOpen} onHide={onHide}>
      <div className="flex justify-end absolute top-0 right-0 ">
        <button className="focus:outline-none mt-5 mr-5" onClick={onHide}>
          <span className="text-2xl text-black">&#215;</span>
        </button>
      </div>

      <Modal.Body className="py-24 px-32">
        <h1 className="font-raleway text-black tracking-wide text-3xl text-center font-medium antialiased">
          Get Started with Clockwork Universe!
        </h1>
        <p className="font-lato text-base mt-5 mb-16 font-normal text-center text-gray-600">
          Please select the type of account you would like to create.
        </p>

        <div className="flex flex-col md:flex-row mt-4">
          <SelectBox
            active={groupTypeSelected === GROUP_TYPES.FOUNDER}
            name={GROUP_TYPES.FOUNDER}
            onClick={onSelectGroupType}
          >
            <SelectBox.Image image="/images/founder.svg" />

            <SelectBox.Title>Founder</SelectBox.Title>
            <SelectBox.Description>
              You represent a company looking to manage communications with your investors and
              stakeholders.
            </SelectBox.Description>
          </SelectBox>

          <SelectBox
            active={groupTypeSelected === GROUP_TYPES.INVESTOR}
            name={GROUP_TYPES.INVESTOR}
            onClick={onSelectGroupType}
            className="mt-10 md:mt-0 md:ml-10"
          >
            <SelectBox.Image image="/images/investor.svg" />
            <SelectBox.Title>Investor</SelectBox.Title>
            <SelectBox.Description>
              You represent a group or individual looking to organize your private investment
              activities and manage communications about your investments.
            </SelectBox.Description>
          </SelectBox>

          <SelectBox
            active={groupTypeSelected === GROUP_TYPES.OTHER}
            name={GROUP_TYPES.OTHER}
            onClick={onSelectGroupType}
            className="mt-10 md:mt-0 md:ml-10"
          >
            <SelectBox.Image image="/images/other.svg" />

            <SelectBox.Title>Other</SelectBox.Title>
            <SelectBox.Description>
              You are an intermediary, advisor, or other group or individual involved in a private
              investment or investment portfolio.
            </SelectBox.Description>
          </SelectBox>
        </div>
      </Modal.Body>
    </Modal>
  )
}

SignupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default SignupModal
