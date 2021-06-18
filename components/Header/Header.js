import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false)
  const router = useRouter()

  const toggleNavigationBar = () => {
    setIsNavbarOpen((currentNavigationStatus) => !currentNavigationStatus)
  }

  return (
    <header className="bg-white fixed w-full z-index-9999">
      <div className="container flex m-auto py-8  justify-between items-center md:justify-between">
        <Link href="/">
          <img
            width="280px"
            src="/images/clockwork-light-r.svg"
            alt="clockwork logo"
            className="cursor-pointer"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex font-raleway antialiased text-blue-darkest">
            <li>
              <Link href="/for-founders">
                <span
                  className={classNames(
                    'text-15 font-normal cursor-pointer hover:text-blue-light',
                    { ['text-blue-light']: router.pathname === '/for-founders' }
                  )}
                >
                  For Founders
                </span>
              </Link>
            </li>
            <li>
              <Link href="/for-investors">
                <span
                  className={classNames(
                    'text-15 ml-10 font-normal cursor-pointer hover:text-blue-light',
                    { ['text-blue-light']: router.pathname === '/for-investors' }
                  )}
                >
                  For Investors
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-15 ml-10 font-normal cursor-pointer hover:text-blue-light"
              >
                <span
                  className={classNames(
                    'text-15 ml-10 font-normal cursor-pointer hover:text-blue-light',
                    { ['text-blue-light']: router.pathname === '/about-us' }
                  )}
                >
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-15 ml-10 font-normal cursor-pointer hover:text-blue-light"
              >
                <span
                  className={classNames(
                    'text-15 ml-10 font-normal cursor-pointer hover:text-blue-light',
                    { ['text-blue-light']: router.pathname === '/blog' }
                  )}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://cwuniverse.app/sign-in">
                <span className="uppercase ml-16 text-sm text-blue-link font-semibold antialiased cursor-pointer">
                  Sign in
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://cwuniverse.app/welcome">
                <span className="uppercase ml-6 text-sm text-blue-darkest border-blue-link font-semibold antialiased border-1 rounded px-4 py-2 cursor-pointer">
                  Sign up
                </span>
              </Link>
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
              <Link href="/for-founders">
                <span className="text-15 font-normal cursor-pointer hover:text-blue-light">
                  For Founders
                </span>
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/for-investors">
                <span className="text-15 font-normal cursor-pointer hover:text-blue-light">
                  For Investors
                </span>
              </Link>
            </li>
            <li className="mb-5">
              <Link
                href="/about-us"
                className="text-15 font-normal cursor-pointer hover:text-blue-light"
              >
                <span className="text-15 font-normal cursor-pointer hover:text-blue-light">
                  About Us
                </span>
              </Link>
            </li>
            <li className="mb-10">
              <Link
                href="/blog"
                className="text-15 font-normal cursor-pointer hover:text-blue-light"
              >
                <span className="text-15 font-normal cursor-pointer hover:text-blue-light">
                  Blog
                </span>
              </Link>
            </li>
            <li className="mb-10">
              <Link href="https://cwuniverse.app/sign-in">
                <span className="uppercase text-sm text-blue-link font-semibold antialiased cursor-pointer">
                  Sign in
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://cwuniverse.app/welcome">
                <span className="uppercase  text-sm text-blue-darkest border-blue-link font-semibold antialiased border-1 rounded px-8 py-4 cursor-pointer">
                  Sign up
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={toggleNavigationBar}
            className="flex flex-col focus:ring focus:ring-offset-8 focus:outline-none focus:ring-blue-light focus:ring-opacity-50"
          >
            <i className="w-6 h-0.5 mb-1  bg-gray-900" />
            <i className="w-6 h-0.5 mb-1  bg-gray-900" />
            <i className="w-4 h-0.5 bg-gray-900" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
