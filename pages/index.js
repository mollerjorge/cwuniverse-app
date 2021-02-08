import React, { useState } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import GroupBox from '../components/GroupBox/GroupBox'
import FounderIcon from '../public/images/founder-icon.svg'
import InvestorIcon from '../public/images/investor-icon.svg'
import classNames from 'classnames'
import Flickity from 'react-flickity-component'

import 'flickity/css/flickity.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

const flickityOptions = {
  initialIndex: 1,
  prevNextButtons: false
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  const displayImage = () => {
    if (activeTab === 0) {
      return (
        <img
          key='0'
          className='mx-auto animate__animated animate__fadeIn animate__fast'
          width='762px'
          height='632'
          src='images/automated-investor-reporting.png'
          alt='automated investor reporting'
        />
      )
    }
    if (activeTab === 1) {
      return (
        <img
          key='1'
          className='mx-auto animate__animated animate__fadeIn animate__fast'
          width='762px'
          height='632'
          src='images/digital-private-investment.png'
          alt='automated investor reporting'
        />
      )
    }
    if (activeTab === 2) {
      return (
        <img
          key='2'
          className='mx-auto animate__animated animate__fadeIn animate__fast'
          width='762px'
          height='632'
          src='images/automated-investor-reporting.png'
          alt='automated investor reporting'
        />
      )
    }
  }

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

      <Header />

      <main className='pt-20'>
        <section className='container relative pb-12  2xl:py-24' id='hero'>
          <div className='w-full'>
            <div className='mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center'>
              <div className='w-1/2'>
                <h1 className='capitalize text-big font-raleway font-normal text-gray-700 max-w-sm lg:text-60 lg:max-w-2xl'>
                  Modern inverstor relations
                </h1>
                <p className='font-lato text-xl mt-6  text-black font-light lg:max-w-lg antialiased'>
                  Clockwork improves transparency to drive results for founders
                  and investors alike.
                </p>
                <div className='mt-10'>
                  <Button className='transition duration-500 transform inline-block bg-teal'>
                    Try it for free
                  </Button>
                </div>
              </div>
              <div className='w-1/2'>
                <lottie-player
                  src='https://assets10.lottiefiles.com/packages/lf20_uuzrbscg.json'
                  background='transparent'
                  speed='0.6'
                  style={{ width: '100%', height: 'auto' }}
                  autoplay=''
                ></lottie-player>
              </div>
            </div>
          </div>
        </section>

        <section className='container bg-white mb-40  mt-32' id='meetClockwork'>
          <div className=' flex gap-6  w-full'>
            <div className='flex flex-col w-4/12'>
              <h2 className='leading-tight text-xl font-raleway font-normal text-gray-900 lg:text-46 antialized'>
                Meet Clockwork Universe
              </h2>
              <p className='text-md font-light antialiased'>
                A new technology platform for collaborative private investing.
              </p>
            </div>
            <div className='w-8/12 flex'>
              <GroupBox
                title='founders'
                legend='Upgrade your investor reporting and evolve your investor relationships.'
                icon={<FounderIcon />}
              />
              <GroupBox
                title='investors'
                legend='Modernize your portfolio operations and improve founder engagement.'
                icon={<InvestorIcon />}
              />
            </div>
          </div>
        </section>

        <section
          id='enhancing private investment efficienty'
          className='bg-blue py-32 container'
        >
          <div className='m-auto flex 2xl:px-24 w-full flex-col'>
            <h2 className='text-5xl text-center w-full capitalize text-white mb-4 font-raleway'>
              enhancing private investment efficienty
            </h2>
            <p className='text-white text-center font-normal font-raleway antialiased text-lg  w-full'>
              Clockwork® enables better outcomes for founders and investors
              throughout the investment lifecycle.
            </p>

            <div className='tabs-container relative flex mt-20'>
              <div className='tab-line' />
              <div className='py-12 flex flex-col gap-10 w-1/4  max-w-sm'>
                <div
                  onClick={() => {
                    document.getElementsByClassName(
                      'tab-line'
                    )[0].style.cssText = 'transform: translateY(0px)'
                    setActiveTab(0)
                  }}
                  className={classNames(
                    'cursor-pointer',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'pl-12',
                    { ['opacity-50']: activeTab !== 0 }
                  )}
                >
                  <h3 className='text-white text-26 font-normal capitalize font-raleway antialiased mb-3'>
                    Dynamic Company Profile
                  </h3>
                  <p className='text-gray-200 text-md antialiased'>
                    Track portfolio company operational and investment specific
                    data.
                  </p>
                </div>

                <div
                  onClick={() => {
                    document.getElementsByClassName(
                      'tab-line'
                    )[0].style.cssText = 'transform: translateY(190px)'
                    setActiveTab(1)
                  }}
                  className={classNames(
                    'cursor-pointer',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'pl-12',
                    { ['opacity-50']: activeTab !== 1 }
                  )}
                >
                  <h3 className='text-white text-26 antialiased font-normal capitalize font-raleway mb-3'>
                    Automated Investor Reporting
                  </h3>
                  <p className='text-gray-100 text-md'>
                    Facilitate reporting and organization of investor
                    communications.
                  </p>
                </div>

                <div
                  onClick={() => {
                    document.getElementsByClassName(
                      'tab-line'
                    )[0].style.cssText = 'transform: translateY(373px)'
                    setActiveTab(2)
                  }}
                  className={classNames(
                    'cursor-pointer',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'pl-12',
                    { ['opacity-50']: activeTab !== 2 }
                  )}
                >
                  <h3 className='text-white text-26 antialiased font-normal capitalize font-raleway mb-3'>
                    Digital Private Investment Office
                  </h3>
                  <p className='text-gray-100 text-md'>
                    Interactive portfolio overview and performance metrics.
                  </p>
                </div>
              </div>
              <div className=' w-3/4'>{displayImage()}</div>
            </div>
          </div>
        </section>

        <section className='container py-52'>
          <div className='flex justify-between'>
            <div className='flex flex-col justify-center mr-20'>
              <h2 className='font-normal text-black text-48 antialiased'>
                Who we work with
              </h2>
              <p className='text-black font-normal text-base tracking-wide leading-8 max-w-md antialiased font-lato'>
                Clockwork’s investor relations and portfolio monitoring
                technology drive value for all private market participants.
              </p>
            </div>

            <div className='grid-cols-3 grid-rows-2 grid gap-7'>
              <div className='justify-center flex  flex-col rounded-md bg-red text-white p-10'>
                <svg
                  className='w-10 font-light'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <h3 className='text-lg mt-5  text-white font-raleway font-light'>
                  Founders & managements teams
                </h3>
              </div>

              <div className='justify-center -mt-12 mb-12 flex  flex-col rounded-md bg-blue text-white p-10'>
                <svg
                  className='w-10 font-light'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <h3 className='text-lg mt-5  text-white font-raleway font-light'>
                  VC/PE Funds & Corporate Venture
                </h3>
              </div>

              <div className='justify-center flex  flex-col rounded-md bg-blue-light text-white p-10'>
                <svg
                  className='w-10 font-light'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <h3 className='text-lg mt-5  text-white font-raleway font-light'>
                  Institutional Limited Partners
                </h3>
              </div>

              <div className='justify-center flex  flex-col rounded-md bg-teal text-white p-10'>
                <svg
                  className='w-10 font-light'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <h3 className='text-lg mt-5  text-white font-raleway font-light'>
                  Individuals & Family Offices
                </h3>
              </div>

              <div className='justify-center -mt-12 mb-12 flex  flex-col rounded-md bg-purple text-white p-10'>
                <svg
                  className='w-10 font-light'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <h3 className='text-lg mt-5  text-white font-raleway font-light'>
                  Accelerators & Angel Groups
                </h3>
              </div>

              <div className='justify-center flex  flex-col rounded-md bg-yellow text-white p-10'>
                <svg
                  className='w-10 font-light'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <h3 className='text-lg mt-5  text-white font-raleway font-light'>
                  Advisors & Intermediaries
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-blue-dark w-full'>
          <div className='container flex justify-between items-center py-40'>
            <div className='w-1/2'>
              <lottie-player
                src='https://assets9.lottiefiles.com/packages/lf20_t04injmt.json'
                background='transparent'
                speed='2.5'
                style={{ width: '100%', height: 'auto' }}
                loop=''
                autoplay=''
              ></lottie-player>
            </div>

            <div className='flex flex-col w-1/2'>
              <h3 className='text-white font-raleway text-5xl font-normal antialiased'>
                We’re building the platform so you don’t have to.
              </h3>

              <p className='text-white font-normal font-lato tracking-wide leading-8 mt-10 antialiased'>
                Clockwork Universe™ financial technology is designed for
                compatibility with your existing investment operations including
                the systems, processes, and information sources you already rely
                on. From self-serve technology to high-touch portfolio
                monitoring, our solutions can be tailored to fit your unique
                needs.
              </p>

              <Button className='border-gray-200 tracking-normal flex items-center border-2 w-fit mt-12 w-max rounded uppercase font-normal text-sm antialiased bg-transparent py-3 px-6'>
                <span>Get started</span>
                <svg
                  className='w-6 ml-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        <section className='py40'>
          <div class='container py-40'>
            <div>
              <h2 className='text-center mb-20 w-sm text-black'>
                What they're saying about us
              </h2>
            </div>
            <div className='flickity-container'>
              <Flickity
                options={{
                  initialIndex: 1
                }}
              >
                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-lg font-lato leading-8 antialiased text-gray-600 '>
                    “Working with Clockwork provides our team with easy,
                    centralized access to key data and updates from our
                    portfolio companies, and features like alerts and the weekly
                    digest help us better stay on top of our private
                    investments.”
                  </p>

                  <div className='flex justify-start flex-col items-start'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-32'
                        src='https://cdn.clockwork.app/wp-content/uploads/2020/10/28162051/Captura-de-Pantalla-2020-10-28-a-las-13.20.25-e1603902092836-300x158.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-normal w-full antialiased text-base text-gray-900'>
                        Jake Sargent, General Partner
                      </p>
                      <p className='text-gray-500 antialiased text-sm '>
                        Magic Hour
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-lg font-lato leading-8 antialiased text-gray-600 '>
                    “My investor communications have become more impactful with
                    Clockwork Universe. This has helped foster more
                    collaborative investor relationships as everyone is clearer
                    on what my needs are and how they can best support what
                    we’re building.”
                  </p>

                  <div className='flex justify-start flex-col items-start'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-24'
                        src='/images/ffora.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-normal w-full antialiased text-base text-gray-900'>
                        Lucy Jones, Founder
                      </p>
                      <p className='text-gray-500 antialiased text-sm '>
                        Ffora
                      </p>
                    </div>
                  </div>
                </div>
                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-lg font-lato leading-8 antialiased text-gray-600 '>
                    “I love that Clockwork Universe helps manage investor
                    communications in one place. I've noticed that investors are
                    more engaged with our updates, which has led to more
                    productive relationships overall.”
                  </p>

                  <div className='flex justify-start flex-col items-start'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-24'
                        src='/images/logo-cardboard.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-normal w-full antialiased text-base text-gray-900'>
                        Wilson Hunter, Founder
                      </p>
                      <p className='text-gray-500 antialiased text-sm '>
                        CardBoard Live
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-lg font-lato leading-8 antialiased text-gray-600 '>
                    “Working with Clockwork provides our team with easy,
                    centralized access to key data and updates from our
                    portfolio companies, and features like alerts and the weekly
                    digest help us better stay on top of our private
                    investments.”
                  </p>

                  <div className='flex justify-start flex-col items-start'>
                    <div className='flex flex-col'>
                      <p className='text-gray-500 antialiased text-sm '>
                        Moses Gates Holdings
                      </p>
                    </div>
                  </div>
                </div>
              </Flickity>
            </div>
          </div>
        </section>

        <section>
          <div className='relative'>
            <div
              class='wpb_row'
              style={{
                paddingTop: 'calc(100vw * 0.16)',
                paddingBottom: 'calc(100vw * 0.08)',
                width: '100%',
                height: '100%',
                position: 'relative',
                top: 0,
                left: 0
              }}
            >
              <div
                class='row-bg-wrap'
                data-bg-animation='none'
                data-bg-overlay='true'
              >
                <div
                  class='row-bg-overlay'
                  style={{
                    background: '#123861',
                    background:
                      'linear-gradient(135deg,#123861 0%,#2463af 100%)',
                    opacity: '1'
                  }}
                ></div>
              </div>
              <div
                class='nectar-shape-divider-wrap no-color '
                style={{ height: '250px' }}
                data-front=''
                data-style='curve_opacity'
                data-position='top'
              >
                <svg
                  class='nectar-shape-divider'
                  fill=''
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1000 100'
                  preserveAspectRatio='none'
                >
                  <path d='M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z'></path>
                  <path d='M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z'></path>
                  <path d='M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z'></path>
                </svg>
              </div>
                <div className='container flex flex-col justify-center items-center'>
                  <h2 className='text-center text-white z-50'>
                    Welcome to the future of private investing
                  </h2>
                  <Button className='border-white flex items-center border-2 w-fit px-8 py-4 mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent z-50'>
                    <span className='font-bold'>Get started</span>
                    <svg
                      className='w-6 ml-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </Button>
                </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
    </div>
  )
}
