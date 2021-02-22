import React from 'react'
import axios from 'axios'

const Newsletter = () => {
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setIsLoading(true)
    try {
      const userData = {
        role: 'lead',
        email,
      }

      await axios.post('/api/lead', { userData })
      setMessage('Thank you for signing up!')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const onChangeEmail = (event) => {
    setEmail(event?.target.value)
  }

  return (
    <section className="container my-10">
      <div
        className="bg-cover bg-no-repeat rounded-lg bg-blue shadow-md p-10"
        style={{ backgroundImage: "url('images/bg-newsletter.svg')" }}
      >
        <h1 className="text-white font-raleway text-center font-bold tracking-wide text-4xl mb-5">
          Join our newsletter
        </h1>
        <p className="text-white font-lato tracking-wide text-xl text-center">
          Subscribe to our newsletter to get the latest news and tips on ...
        </p>

        <form onSubmit={onSubmit} className="mt-10">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center flex-col lg:flex-row">
              <input
                className="rounded-md p-5 mb-5 lg:mb-0 lg:mr-5 lg:w-1/4 w-full focus:outline-none focus:ring-4 "
                placeholder="e.g. gavinbelson@hooli.com"
                onChange={onChangeEmail}
                value={email}
                type="email"
                required
              />
              <button
                type="submit"
                className="font-bold tracking-widest p-5 uppercase font-lato rounded-md text-white bg-teal disabled:bg-red-500"
                disabled={isLoading}
              >
                Subscribe
              </button>
            </div>
            {message && <p className="text-center text-white mt-10">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
