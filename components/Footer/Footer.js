import React from 'react'
import Button from '../Button'

const Footer = () => {
  return (
    <footer className='bg-white pt-20 pb-10'>
      <div className='container'>
        <div className='flex'>
          <div className='w-4/12 flex flex-col'>
            <img
              className=' max-w-6xl w-72'
              src='images/clockwork-logo.png'
              alt='clockwork logo'
            />

            <p className='text-md mt-10  text-gray-500 antialiased'>
              Charlottesville | NYC | Mexico City | Montevideo
            </p>

            <p className='text-md mt-5   text-gray-500 antialiased'>
              contact@clockwork.app
            </p>

            <a className='text-md mt-5 block  text-gray-500 antialiased'>
              clockwork.app
            </a>
          </div>
          <div className='w-2/12 pt-4 flex flex-col'>
            <p className='text-black uppercase antialiased text-xl'>
              Quick Links
            </p>
            <a className=' text-md mt-10 text-gray-500'>Home</a>
            <a className=' text-md mt-2 text-gray-500'>For founders</a>
            <a className=' text-md mt-2 text-gray-500'>For investors</a>
            <a className=' text-md mt-2 text-gray-500'>About us</a>
          </div>
          <div className='w-2/12 flex flex-col pt-4'>
            <a className=' text-md mt-16 pt-1 text-gray-500'>Home</a>
            <a className=' text-md mt-2 text-gray-500'>For founders</a>
            <a className=' text-md mt-2 text-gray-500'>For investors</a>
          </div>
          <div className='w-4/12'>
            <p className='text-black uppercase antialiased text-xl'>
              JOIN CLOCKWORK®
            </p>
            <p className='text-gray-500 antialiased text-md leading-8 mt-10'>
              We’re always on the lookout for the best and brightest. Discover
              open opportunities or create your own.
            </p>
            <div className='mt-20'>
              <Button className='transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block'>
                Apply Today
              </Button>
            </div>
          </div>
        </div>

        <div className='mt-20 flex justify-between'>
          <p className="text-sm text-gray-500 antialiased">© 2021 Clockwork. All Rights Reserved. Value over vanity.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
