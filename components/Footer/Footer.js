import React from 'react'
import Button from 'components/Button'

const Footer = () => {
  return (
    <footer className='bg-white pt-20 pb-10'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-4/12 flex flex-col'>
            <img
              width={300}
              height={32}
              src='/images/clockwork-logo.png'
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
          <div className='flex mt-10 lg:ml-10 lg:mt-0 lg:w-4/12'>
            <div className='w-full lg:w-full pt-4 flex flex-col'>
              <p className='text-black uppercase antialiased text-xl'>
                Quick Links
              </p>
              <a className=' text-md mt-10 text-gray-500'>Home</a>
              <a className=' text-md mt-2 text-gray-500'>For founders</a>
              <a className=' text-md mt-2 text-gray-500'>For investors</a>
              <a className=' text-md mt-2 text-gray-500'>About us</a>
            </div>
            <div className='w-full lg:w-full flex flex-col pt-4'>
              <a className=' text-md mt-16 pt-1 text-gray-500'>Blog</a>
              <a className=' text-md mt-2 text-gray-500'>Privacy Policy</a>
              <a className=' text-md mt-2 text-gray-500'>Terms of use</a>
            </div>
          </div>
          <div className='flex mt-10 lg:mt-0 lg:w-4/12'>
            <div className='w-full lg:w-full pt-4'>
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
        </div>

        <div className='mt-20 flex justify-between'>
          <p className='text-sm text-gray-500 antialiased'>
            © 2021 Clockwork. All Rights Reserved. Value over vanity.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
