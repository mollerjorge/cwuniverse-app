import React from 'react'
import axios from 'axios'
import { faTimes } from '@fortawesome/pro-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Newsletter = () => {
  const [email, setEmail] = React.useState('')
  const [successMessage, setSuccessMessage] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [hideNewsletter, setHideNewsletter] = React.useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setSuccessMessage('')
    setIsLoading(true)
    try {
      const userData = {
        role: 'lead',
        email,
      }

      await axios.post('/api/lead', { userData })
      setSuccessMessage('Thank you for submitting your email.')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const onChangeEmail = (event) => {
    setEmail(event?.target.value)
  }

  if (hideNewsletter) {
    return null
  }

  return (
    <>
      <div
        className="container rounded-none flex mx-auto flex-col md:flex-row md:items-center items-start justify-between md:h-14 bg-blue w-full fixed bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 transform md:rounded-lg"
        style={{ zIndex: 9999, maxWidth: '1089px', padding: '18px' }}
      >
        <div className="flex items-start md:items-center w-full md:w-3/5">
          <span role="img" aria-label="envelope" className="text-xl mr-2">
            ✉️
          </span>
          <p className="text-white font-lato tracking-wide text-md antialiased">
            <span className="font-bold">Signup for the Clockwork Orbit</span> for content on private
            investing and product tips!
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col md:flex-row w-full md:w-2/5">
          {!successMessage ? (
            <>
              {' '}
              <div className="flex flex-col md:flex-row relative mt-2 md:mt-0 ml-6 md:ml-0">
                <input
                  style={{ width: '272px', borderRadius: '4px' }}
                  className="email-input"
                  placeholder="example@example.com"
                  onChange={onChangeEmail}
                  value={email}
                  type="email"
                  required
                />
              </div>
              <button
                type="submit"
                className=" font-medium tracking-widest w-36 ml-6 md:w-auto  px-6 h-8 text-sm uppercase font-lato mt-2 md:mt-0 md:ml-2 rounded-md text-white bg-teal disabled:bg-red-500"
                disabled={isLoading}
              >
                Subscribe
              </button>
            </>
          ) : (
            <p className="text-white opacity-30 tracking-wide w-full text-right">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              {successMessage}
            </p>
          )}
        </form>
        <button
          type="button"
          onClick={() => {
            setHideNewsletter(true)
            document
              .getElementsByClassName('intercom-lightweight-app-launcher')[0]
              ?.classList.add('remove-bottom')
          }}
          className="focus:outline-none"
        >
          <FontAwesomeIcon
            icon={faTimes}
            style={{ width: '0.6875em' }}
            className="text-white absolute right-2 top-2 w-1"
          />
        </button>
      </div>
    </>
  )
}

export default Newsletter
