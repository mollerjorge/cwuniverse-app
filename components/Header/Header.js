import React from 'react'

const Header = () => {
  return (
    <header className='bg-white fixed w-full z-50'>
      <div className='container flex m-auto py-8  justify-between items-center md:justify-between'>
        <a href='/'>
          <img
            width='230px'
            height='48px'
            src='/images/clockwork-logo.png'
            alt='clockwork logo'
          />
        </a>

        <nav className='hidden lg:block'>
          <ul className='flex font-raleway antialiased text-blue-darkest'>
            <li>
              {' '}
              <a href='/for-founders' className='text-15 font-normal hover:text-blue-light'>
                For Founders{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href='/for-investors' className='text-15 ml-10 font-normal hover:text-blue-light'>
                For Investors{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href='/about-us' className='text-15 ml-10 font-normal hover:text-blue-light'>
                About Us
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href='/blog' className='text-15 ml-10 font-normal hover:text-blue-light'>
                Blog
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='https://cwuniverse.app/sign-in'
                className='uppercase ml-16 text-sm text-blue-link font-semibold antialiased'
              >
                Sign in{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='https://cwuniverse.app/sign-un'
                className='uppercase ml-6 text-sm text-blue-darkest border-blue-link font-semibold antialiased border-1 rounded px-4 py-2'
              >
                Sign up{' '}
              </a>{' '}
            </li>
          </ul>
        </nav>

        <div className='lg:hidden'>
          <a href='#' className='flex gap-1 flex-col'>
            <i className='w-6 h-0.5  bg-gray-900' />
            <i className='w-6 h-0.5  bg-gray-900' />
            <i className='w-4 h-0.5 bg-gray-900' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
