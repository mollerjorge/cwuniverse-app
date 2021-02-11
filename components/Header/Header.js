import React from 'react'
import classNames from 'classnames'

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false)

  const toggleNavigationBar = () => {
    setIsNavbarOpen((currentNavigationStatus) => !currentNavigationStatus)
  }

  return (
    <header className="bg-white fixed w-full z-index-9999">
      <div className="container flex m-auto py-8  justify-between items-center md:justify-between">
        <a href="/">
          <img width="230px" height="48px" src="/images/clockwork-logo.png" alt="clockwork logo" />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex font-raleway antialiased text-blue-darkest">
            <li>
              {' '}
              <a href="/for-founders" className="text-15 font-normal hover:text-blue-light">
                For Founders{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="/for-investors" className="text-15 ml-10 font-normal hover:text-blue-light">
                For Investors{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="/about-us" className="text-15 ml-10 font-normal hover:text-blue-light">
                About Us
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="/blog" className="text-15 ml-10 font-normal hover:text-blue-light">
                Blog
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href="https://cwuniverse.app/sign-in"
                className="uppercase ml-16 text-sm text-blue-link font-semibold antialiased"
              >
                Sign in{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href="https://cwuniverse.app/sign-un"
                className="uppercase ml-6 text-sm text-blue-darkest border-blue-link font-semibold antialiased border-1 rounded px-4 py-2"
              >
                Sign up{' '}
              </a>{' '}
            </li>
          </ul>
        </nav>

        <nav
          className={classNames(
            { ['hidden']: !isNavbarOpen, ['block']: isNavbarOpen },
            'lg:hidden'
          )}
        >
          <ul className="flex px-5 font-raleway antialiased text-blue-darkest flex-col min-h-screen fixed w-full left-0 top-28 bg-white">
            <li className="mb-5">
              {' '}
              <a href="/for-founders" className="text-15 font-normal hover:text-blue-light">
                For Founders{' '}
              </a>{' '}
            </li>
            <li className="mb-5">
              {' '}
              <a href="/for-investors" className="text-15 font-normal hover:text-blue-light">
                For Investors{' '}
              </a>{' '}
            </li>
            <li className="mb-5">
              {' '}
              <a href="/about-us" className="text-15 font-normal hover:text-blue-light">
                About Us
              </a>{' '}
            </li>
            <li className="mb-5">
              {' '}
              <a href="/blog" className="text-15 font-normal hover:text-blue-light">
                Blog
              </a>{' '}
            </li>
            <li className="mt-10 mb-8">
              {' '}
              <a
                href="https://cwuniverse.app/sign-in"
                className="uppercase  text-sm text-blue-link font-semibold antialiased"
              >
                Sign in{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href="https://cwuniverse.app/sign-un"
                className="uppercase  text-sm text-blue-darkest border-blue-link font-semibold antialiased border-1 rounded px-8 py-4"
              >
                Sign up{' '}
              </a>{' '}
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={toggleNavigationBar}
            className="flex gap-1 flex-col focus:ring focus:ring-offset-8 focus:outline-none focus:ring-blue-light focus:ring-opacity-50"
          >
            <i className="w-6 h-0.5  bg-gray-900" />
            <i className="w-6 h-0.5  bg-gray-900" />
            <i className="w-4 h-0.5 bg-gray-900" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
