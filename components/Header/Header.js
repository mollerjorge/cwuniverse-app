import React from 'react'

const Header = () => {
  return (
    <header className='bg-white fixed w-full z-50'>
      <div className='container flex m-auto py-8  justify-between items-center md:justify-between'>
        <a href='/'>
          <img
            width='230px'
            height='48px'
            src='images/clockwork-logo.png'
            alt='clockwork logo'
          />
        </a>

        <nav className='hidden lg:block'>
          <ul className='flex'>
            <li>
              {' '}
              <a
                href='/for-founders'
                className='text-md font-light text-gray-900'
              >
                For Founders{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='/for-investors'
                className='text-md ml-10 font-light text-gray-900'
              >
                For Investors{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='/about-us'
                className='text-md ml-10 font-light text-gray-900'
              >
                About Us
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='/blog'
                className='text-md ml-10 font-light text-gray-900'
              >
                Blog
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='https://cwuniverse.app/sign-in'
                className='uppercase ml-16 text-sm text-blue-800 font-medium'
              >
                Sign in{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='https://cwuniverse.app/sign-un'
                className='uppercase ml-6 text-sm text-blue-800 font-medium border-blue-800 border-1 rounded-md px-4 py-2'
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
