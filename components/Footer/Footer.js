import React from 'react'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/12 flex flex-col font-lato">
            <img width={300} height={32} src="/images/clockwork-logo.png" alt="clockwork logo" />

            <p className="text-md mt-10  text-gray-500 antialiased">
              Charlottesville | NYC | Mexico City | Montevideo
            </p>

            <p className="text-md mt-5 text-gray-500 antialiased">contact@clockwork.app</p>

            <a
              href="https://cwuniverse.app"
              className="text-md mt-5 block  text-gray-500 antialiased"
            >
              clockwork.app
            </a>
          </div>
          <div className="flex mt-10 lg:ml-10 lg:mt-0 lg:w-4/12">
            <div className="w-full lg:w-full pt-4 flex flex-col font-lato">
              <p className="text-black uppercase antialiased text-xl">Quick Links</p>
              <a href="/" className=" text-md mt-10 text-gray-500">
                Home
              </a>
              <a href="/for-founders" className=" text-md mt-2 text-gray-500">
                For founders
              </a>
              <a href="/for-investors" className=" text-md mt-2 text-gray-500">
                For investors
              </a>
              <a href="/about-us" className=" text-md mt-2 text-gray-500">
                About us
              </a>
            </div>
            <div className="w-full lg:w-full flex flex-col pt-4 font-lato">
              <a href="/blog" className=" text-md mt-16 pt-1 text-gray-500">
                Blog
              </a>
              <a href="/privacy-policy" className=" text-md mt-2 text-gray-500">
                Privacy Policy
              </a>
              <a href="/terms-of-use" className=" text-md mt-2 text-gray-500">
                Terms of use
              </a>
            </div>
          </div>
          <div className="flex mt-10 lg:mt-0 lg:w-4/12">
            <div className="w-full lg:w-full pt-4 font-lato">
              <p className="text-black uppercase antialiased text-xl">JOIN CLOCKWORK®</p>
              <p className="text-gray-500 antialiased text-md leading-8 mt-10">
                We’re always on the lookout for the best and brightest. Discover open opportunities
                or create your own.
              </p>
              <div className="mt-20">
                <Button
                  onClick={() => {
                    window.open('https://clockwork4.typeform.com/to/QIJxjP', '_blank')
                  }}
                  className="transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block"
                >
                  Apply Today
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between flex-col lg:flex-row">
          <p className="text-sm text-gray-500 antialiased">
            © 2021 Clockwork. All Rights Reserved. Value over vanity.
          </p>
          <div className="mt-5 lg:mt-0">
            <a
              href="https://twitter.com/clockworkapp"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/company/clockworkapp/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-500 ml-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
