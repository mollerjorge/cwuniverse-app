import React, { useState } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import GroupBox from '../components/GroupBox/GroupBox'
import FounderIcon from '../public/images/founder-icon.svg'
import InvestorIcon from '../public/images/investor-icon.svg'
import classNames from 'classnames'
import Flickity from 'react-flickity-component'

import 'flickity/css/flickity.css'
import Footer from "../components/Footer"
import Header from "../components/Header"

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
              <div>
                <h1 className='leading-tight capitalize text-big font-raleway font-normal text-gray-700 max-w-sm lg:text-6xl lg:max-w-2xl'>
                  Modern inverstor relations
                </h1>
                <p className='font-lato text-xl mt-6  text-black font-light lg:max-w-lg'>
                  Clockwork improves transparency to drive results for founders
                  and investors alike.
                </p>
                <div className='mt-20'>
                  <Button className='transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block'>
                    Try it for free
                  </Button>
                </div>
              </div>
              <img
                className='mt-10 max-w-2xl lg:w-full'
                width='672px'
                height='592px'
                src='images/home-hero-infographic.png'
                alt='home hero inphografic'
              />
            </div>
          </div>
        </section>

        <section className='container bg-white mb-40  mt-32' id='meetClockwork'>
          <div className=' flex gap-6  w-full'>
            <div className='flex flex-col w-2/3'>
              <h2 className='leading-tight text-xl font-raleway font-normal text-gray-700 lg:text-5xl '>
                Meet Clockwork Universe
              </h2>
              <p className='text-md font-light'>
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

        <section
          id='enhancing private investment efficienty'
          className='bg-blue py-32'
        >
          <div className='container m-auto flex  px-10 2xl:px-24 w-full flex-col'>
            <h2 className='text-5xl text-center w-full capitalize text-white mb-1 font-raleway'>
              enhancing private investment efficienty
            </h2>
            <p className='text-gray-400 text-center font-normal font-raleway text-lg  w-full'>
              Clockwork® enables better outcomes for founders and investors
              throughout the investment lifecycle.
            </p>

            <div className='tabs-container relative flex mt-16'>
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
                    'gap-6',
                    'justify-center',
                    'pl-12',
                    { ['opacity-75']: activeTab !== 0 }
                  )}
                >
                  <h3 className='text-white text-2xl font-normal capitalize font-raleway'>
                    Dynamic Company Profile
                  </h3>
                  <p className='text-gray-100 text-md'>
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
                    'gap-6',
                    'justify-center',
                    'pl-12',
                    { ['opacity-75']: activeTab !== 1 }
                  )}
                >
                  <h3 className='text-white text-2xl font-normal capitalize font-raleway'>
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
                    'gap-6',
                    'justify-center',
                    'pl-12',
                    { ['opacity-75']: activeTab !== 2 }
                  )}
                >
                  <h3 className='text-white text-2xl font-normal capitalize font-raleway'>
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
            <div className='flex flex-col justify-center mr-32'>
              <h2 className='max-w-md'>Who we work with</h2>
              <p className='text-gray-900 font-light tracking-wide leading-8 max-w-sm'>
                Clockwork’s investor relations and portfolio monitoring
                technology drive value for all private market participants.
              </p>
            </div>

            <div className='grid-cols-3 grid-rows-2 grid gap-10'>
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
                  Founders & managements teams
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
                  Founders & managements teams
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
                  Founders & managements teams
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
                  Founders & managements teams
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
                  Founders & managements teams
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-blue-dark w-full'>
          <div className='container flex justify-between items-center py-40'>
            <img src='images/notebook.svg' alt='notebook' className=' w-1/2' />

            <div className='flex flex-col w-1/2'>
              <h3 className='text-white font-raleway text-5xl font-normal antialiased'>
                We’re building the platform so you don’t have to.
              </h3>

              <p className='text-white font-light tracking-wide leading-8 mt-10'>
                Clockwork Universe™ financial technology is designed for
                compatibility with your existing investment operations including
                the systems, processes, and information sources you already rely
                on. From self-serve technology to high-touch portfolio
                monitoring, our solutions can be tailored to fit your unique
                needs.
              </p>

              <Button className='border-white flex items-center border-1 w-fit mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent'>
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
              <h2 className='text-center mb-20 w-sm'>
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
                  <p className='text-xl leading-8 antialiased text-gray-600 '>
                    “Working with Clockwork provides our team with easy,
                    centralized access to key data and updates from our
                    portfolio companies, and features like alerts and the weekly
                    digest help us better stay on top of our private
                    investments.”
                  </p>

                  <div className=' mt-10 flex justify-start items-center'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-24'
                        src='https://cdn.clockwork.app/wp-content/uploads/2020/10/28162051/Captura-de-Pantalla-2020-10-28-a-las-13.20.25-e1603902092836-300x158.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col ml-5'>
                      <p className='font-regular w-full'>
                        Jake Sargent, General Partner
                      </p>
                      <p className='text-gray-500 antialiased'>Magic Hour</p>
                    </div>
                  </div>
                </div>
                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-xl leading-8 antialiased text-gray-600 '>
                    “Working with Clockwork provides our team with easy,
                    centralized access to key data and updates from our
                    portfolio companies, and features like alerts and the weekly
                    digest help us better stay on top of our private
                    investments.”
                  </p>

                  <div className=' mt-10 flex justify-start items-center'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-24'
                        src='https://cdn.clockwork.app/wp-content/uploads/2020/10/28162051/Captura-de-Pantalla-2020-10-28-a-las-13.20.25-e1603902092836-300x158.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col ml-5'>
                      <p className='font-regular w-full'>
                        Jake Sargent, General Partner
                      </p>
                      <p className='text-gray-500 antialiased'>Magic Hour</p>
                    </div>
                  </div>
                </div>
                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-xl leading-8 antialiased text-gray-600 '>
                    “Working with Clockwork provides our team with easy,
                    centralized access to key data and updates from our
                    portfolio companies, and features like alerts and the weekly
                    digest help us better stay on top of our private
                    investments.”
                  </p>

                  <div className=' mt-10 flex justify-start items-center'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-24'
                        src='https://cdn.clockwork.app/wp-content/uploads/2020/10/28162051/Captura-de-Pantalla-2020-10-28-a-las-13.20.25-e1603902092836-300x158.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col ml-5'>
                      <p className='font-regular w-full'>
                        Jake Sargent, General Partner
                      </p>
                      <p className='text-gray-500 antialiased'>Magic Hour</p>
                    </div>
                  </div>
                </div>
                <div className='border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 '>
                  <p className='text-xl leading-8 antialiased text-gray-600 '>
                    “Working with Clockwork provides our team with easy,
                    centralized access to key data and updates from our
                    portfolio companies, and features like alerts and the weekly
                    digest help us better stay on top of our private
                    investments.”
                  </p>

                  <div className=' mt-10 flex justify-start items-center'>
                    <div className='object-cover'>
                      <img
                        className='rounded-full w-24'
                        src='https://cdn.clockwork.app/wp-content/uploads/2020/10/28162051/Captura-de-Pantalla-2020-10-28-a-las-13.20.25-e1603902092836-300x158.png'
                        alt='client image'
                      />
                    </div>
                    <div className='flex flex-col ml-5'>
                      <p className='font-regular w-full'>
                        Jake Sargent, General Partner
                      </p>
                      <p className='text-gray-500 antialiased'>Magic Hour</p>
                    </div>
                  </div>
                </div>
              </Flickity>
            </div>
          </div>
        </section>

        <section>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              style={{
                margin: 'auto',
                background: '#ffffff',
                display: 'block',
                zIndex: '1',
                position: 'absolute'
              }}
              width='100%'
              height='100'
              preserveAspectRatio='xMidYMid'
              viewBox='0 0 2559 100'
            >
              <g transform='translate(1279.5,107.5) scale(1,-1) translate(-1279.5,-107.5)'>
                <linearGradient
                  id='lg-0.20635883215799877'
                  x1='0'
                  x2='1'
                  y1='0'
                  y2='0'
                >
                  <stop stop-color='#143D69' offset='0'></stop>
                  <stop stop-color='#143D69' offset='1'></stop>
                </linearGradient>
                <path d='' fill='url(#lg-0.20635883215799877)' opacity='0.4'>
                  <animate
                    attributeName='d'
                    dur='10s'
                    repeatCount='indefinite'
                    keyTimes='0;0.333;0.667;1'
                    calcmod='spline'
                    keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                    begin='0s'
                    values='M0 0L 0 171.97458653735504Q 255.9 151.85834634388112  511.8 120.63184673687084T 1023.6 100.74228661211286T 1535.4 147.03114708903212T 2047.2 108.36728825985494T 2559 98.87406064385559L 2559 0 Z;M0 0L 0 124.2653415931346Q 255.9 202.32322711820376  511.8 172.20722769512946T 1023.6 156.42329922468255T 1535.4 156.65790178694226T 2047.2 119.59138370179156T 2559 138.46907219587433L 2559 0 Z;M0 0L 0 126.99089578137466Q 255.9 189.0773247614132  511.8 154.5474867251874T 1023.6 152.56079003302867T 1535.4 137.59893897828184T 2047.2 86.20961470438343T 2559 113.73596648978352L 2559 0 Z;M0 0L 0 171.97458653735504Q 255.9 151.85834634388112  511.8 120.63184673687084T 1023.6 100.74228661211286T 1535.4 147.03114708903212T 2047.2 108.36728825985494T 2559 98.87406064385559L 2559 0 Z'
                  ></animate>
                </path>
                <path d='' fill='url(#lg-0.20635883215799877)' opacity='0.4'>
                  <animate
                    attributeName='d'
                    dur='10s'
                    repeatCount='indefinite'
                    keyTimes='0;0.333;0.667;1'
                    calcmod='spline'
                    keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                    begin='-2s'
                    values='M0 0L 0 152.38854850344353Q 255.9 200.21882176045872  511.8 154.1616901054495T 1023.6 168.16073272262534T 1535.4 168.9366391111426T 2047.2 83.69508939368963T 2559 105.89776826700883L 2559 0 Z;M0 0L 0 104.46669397954398Q 255.9 114.31347643120459  511.8 78.63839770480372T 1023.6 75.8276298751744T 1535.4 158.67864951757298T 2047.2 91.6302779680669T 2559 147.19370073976452L 2559 0 Z;M0 0L 0 162.27411259114353Q 255.9 101.3363191603172  511.8 86.85709169540813T 1023.6 115.71592275621762T 1535.4 172.54694270581177T 2047.2 122.99549481988295T 2559 89.84632036164271L 2559 0 Z;M0 0L 0 152.38854850344353Q 255.9 200.21882176045872  511.8 154.1616901054495T 1023.6 168.16073272262534T 1535.4 168.9366391111426T 2047.2 83.69508939368963T 2559 105.89776826700883L 2559 0 Z'
                  ></animate>
                </path>
                <path d='' fill='url(#lg-0.20635883215799877)' opacity='0.4'>
                  <animate
                    attributeName='d'
                    dur='10s'
                    repeatCount='indefinite'
                    keyTimes='0;0.333;0.667;1'
                    calcmod='spline'
                    keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                    begin='-4s'
                    values='M0 0L 0 149.18885379965957Q 255.9 115.7218505882717  511.8 81.43959577937872T 1023.6 130.9280948075098T 1535.4 145.37396281596529T 2047.2 132.49631072899768T 2559 119.97479297115285L 2559 0 Z;M0 0L 0 116.51863030922671Q 255.9 127.61974723555784  511.8 114.803170506067T 1023.6 114.44089384392848T 1535.4 89.43335995294483T 2047.2 139.46039873420605T 2559 107.27299791676461L 2559 0 Z;M0 0L 0 160.0702767731686Q 255.9 181.11180863382933  511.8 162.9573376493296T 1023.6 79.19077420685477T 1535.4 117.87934728971938T 2047.2 89.226912502148T 2559 73.99742287143252L 2559 0 Z;M0 0L 0 149.18885379965957Q 255.9 115.7218505882717  511.8 81.43959577937872T 1023.6 130.9280948075098T 1535.4 145.37396281596529T 2047.2 132.49631072899768T 2559 119.97479297115285L 2559 0 Z'
                  ></animate>
                </path>
                <path d='' fill='url(#lg-0.20635883215799877)' opacity='0.4'>
                  <animate
                    attributeName='d'
                    dur='10s'
                    repeatCount='indefinite'
                    keyTimes='0;0.333;0.667;1'
                    calcmod='spline'
                    keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                    begin='-6s'
                    values='M0 0L 0 174.8759569746838Q 255.9 197.73918299561993  511.8 157.7612516461512T 1023.6 110.67999560361503T 1535.4 72.22837690781085T 2047.2 137.5886344303905T 2559 96.39668355030477L 2559 0 Z;M0 0L 0 104.38642231329733Q 255.9 188.32876862354632  511.8 170.76905562039363T 1023.6 146.08342138934296T 1535.4 127.94626659339004T 2047.2 118.5776386701915T 2559 90.23342227053895L 2559 0 Z;M0 0L 0 170.83868972921158Q 255.9 210.29805968107985  511.8 177.12899063368963T 1023.6 117.19006866359058T 1535.4 150.7307115420415T 2047.2 163.4473938562458T 2559 90.99593307805277L 2559 0 Z;M0 0L 0 174.8759569746838Q 255.9 197.73918299561993  511.8 157.7612516461512T 1023.6 110.67999560361503T 1535.4 72.22837690781085T 2047.2 137.5886344303905T 2559 96.39668355030477L 2559 0 Z'
                  ></animate>
                </path>
                <path d='' fill='url(#lg-0.20635883215799877)' opacity='0.4'>
                  <animate
                    attributeName='d'
                    dur='10s'
                    repeatCount='indefinite'
                    keyTimes='0;0.333;0.667;1'
                    calcmod='spline'
                    keySplines='0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1'
                    begin='-8s'
                    values='M0 0L 0 93.13107487568331Q 255.9 180.15139241842422  511.8 140.80791528364406T 1023.6 142.91429338953503T 1535.4 120.99586437387028T 2047.2 157.96166445607776T 2559 174.5874857749195L 2559 0 Z;M0 0L 0 164.9031239652624Q 255.9 132.78507310114787  511.8 86.58028707482762T 1023.6 172.4504624408161T 1535.4 140.0615611659836T 2047.2 103.103898889568T 2559 149.86670536665127L 2559 0 Z;M0 0L 0 143.71285701313604Q 255.9 167.5688315910754  511.8 142.94303247566316T 1023.6 127.8577281313046T 1535.4 109.62675432190792T 2047.2 105.056448761299T 2559 133.19716149739605L 2559 0 Z;M0 0L 0 93.13107487568331Q 255.9 180.15139241842422  511.8 140.80791528364406T 1023.6 142.91429338953503T 1535.4 120.99586437387028T 2047.2 157.96166445607776T 2559 174.5874857749195L 2559 0 Z'
                  ></animate>
                </path>
              </g>
            </svg>

            <div className='bg-blue-dark pt-60 pb-36 '>
              <div className='container flex flex-col justify-center items-center'>
                <h2 className='text-center text-white'>
                  Welcome to the future of private investing
                </h2>
                <Button className='border-white flex items-center border-2 w-fit px-8 py-4 mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent'>
                  <span className="font-bold">Get started</span>
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
    </div>
  )
}
