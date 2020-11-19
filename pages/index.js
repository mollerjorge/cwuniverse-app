import Head from 'next/head'
import Button from '../components/Button'
import GroupBox from "../components/GroupBox/GroupBox"
import FounderIcon from '../public/images/founder-icon.svg'
import InvestorIcon from '../public/images/investor-icon.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clockwork Universe</title>
        <meta
          name='description'
          content='Clockwork universe, investment intelligence app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-white fixed w-full z-50'>
        <div className='max-w-7xl flex m-auto py-8 px-8 md:px-10  2xl:px-24  justify-between items-center md:justify-between'>
          <img
            width='230px'
            height='48px'
            src='images/clockwork-logo.png'
            alt='clockwork logo'
          />

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
                  hreg='https://cwuniverse.app/sign-in'
                  className='uppercase ml-16 text-sm text-blue-800 ml-10 font-medium'
                >
                  Sign in{' '}
                </a>{' '}
              </li>
              <li>
                {' '}
                <a
                  hreg='https://cwuniverse.app/sign-un'
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

      <main className='pt-20'>
        <section className='relative pb-12  2xl:py-24  bg-gray-100' id='hero'>
          <div className='max-w-7xl m-auto flex'>
            <div className='pl-10 pr-4   2xl:px-24 w-full'>
              <div className='mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center'>
                <div>
                  <h1 className='leading-tight text-big font-raleway font-normal text-gray-700 max-w-sm lg:text-6xl lg:max-w-5xl'>
                    Private Investment Intelligence
                  </h1>
                  <p className='font-lato text-xl mt-6 font-light  text-gray-800 lg:max-w-lg'>
                    Clockwork improves transparency to drive results for
                    founders and investors alike.
                  </p>
                  <div className='mt-20'>
                    <Button>Get started</Button>
                  </div>
                </div>
                {/* <img
                  className='mt-10 max-w-2xl lg:w-full'
                  width='672px'
                  height='592px'
                  src='images/home-hero-infographic.svg'
                  alt='home hero inphografic'
                /> */}
                <div className='hidden md:block absolute w-full left-0 lg:bottom-0'>
                  <svg
                    class='nectar-shape-divider'
                    fill='#ffffff'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1000 100'
                    preserveAspectRatio='none'
                  >
                    <path d='M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z'></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white min-h-screen mt-32' id='meetClockwork'>
          <div className='max-w-7xl m-auto flex gap-6  px-10 2xl:px-24 w-full'>
            <div className='flex flex-col'>
              <h2 className='leading-tight text-xl font-raleway font-normal text-gray-700 max-w-sm lg:text-5xl lg:max-w-5xl'>
                Meet Clockwork Universe
              </h2>
              <p className='text-md mt-6 font-light'>
                A new technology platform for collaborative private investing.
              </p>
            </div>

            <GroupBox
              title='founder'
              legend='Upgrade your investor reporting and evolve your investor relationships.'
              icon={<FounderIcon />}
            />
            <GroupBox
              title='investor'
              legend='Modernize your portfolio operations and improve founder engagement.'
              icon={<InvestorIcon />}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
