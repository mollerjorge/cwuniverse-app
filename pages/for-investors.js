import React from 'react'
import Head from 'next/head'
import Button from 'components/Button'
import ReactCompareImage from 'react-compare-image'
import Footer from 'components/Footer'
import Header from 'components/Header'

const ForInvestors = () => {
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
                <h1 className='leading-tight capitalize text-big z-10 font-raleway font-normal text-gray-700 max-w-sm lg:text-6xl lg:max-w-2xl'>
                  Clockwork Universe For{' '}
                  <span className='badge badge-green'>Investors</span>
                </h1>
                <p className='font-lato text-xl mt-6  text-gray-800 antialiased font-light lg:max-w-lg'>
                  A better way to monitor your private investment portfolio.
                  Easily organize and engage with transparent portfolio company
                  updates and investment data.
                </p>
                <div className='mt-20'>
                  <Button className='transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block'>
                    Get started
                  </Button>
                </div>
              </div>
              <img
                className='mt-10 max-w-2xl lg:w-full'
                width='672px'
                height='592px'
                src='images/investors-hero.svg'
                alt='home hero inphografic'
              />
            </div>
          </div>
        </section>

        <section>
          <div className='container py-20'>
            <h2 className='text-center'>
              The evolution of investor relations.
            </h2>
            <div className=' w-full py-10 image-compare flex justify-between'>
              <div className=' mr-24 mt-10'>
                <h3 className='uppercase tracking-widest text-right mb-5 font-light text-gray-600 antialiased text-sm'>
                  static emails
                </h3>
                <p className=' max-w-xs leading-8 antialiased text-gray-700 text-right'>
                  Unorganized, plain, inconsistent, and time consuming. Do
                  investors even read these?
                </p>
              </div>
              <div className=' w-2/3'>
                <ReactCompareImage
                  sliderLineColor='#143D69'
                  sliderLineWidth='6'
                  leftImage='images/oldemails.png'
                  rightImage='images/newemails.png'
                />
              </div>
              <div className=' ml-24 mt-10'>
                <h3 className='uppercase text-left tracking-widest mb-5 font-light text-gray-600 antialiased text-sm'>
                  Clockwork updates
                </h3>
                <p className='text-gray-700 text-left max-w-xs  leading-8'>
                  Modern, flexible, and eye catching. Make your investor updates
                  actionable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='container relative  py-16' id='hero'>
          <div className='w-full'>
            <div className='mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center'>
              <div>
                <h2 className='leading-tight capitalize text-5xl z-10 font-raleway font-normal text-gray-700'>
                  Portfolio Dashboard
                </h2>
                <p className='font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg'>
                  Track aggregate portfolio performance from individual
                  investment transactions.
                </p>
              </div>
              <img
                className='mt-10 max-w-2xl lg:w-full'
                width='672px'
                height='592px'
                src='images/portfolio-dashboard.svg'
                alt='home hero inphografic'
              />
            </div>
          </div>
        </section>

        <section className='container relative  py-16' id='hero'>
          <div className='w-full'>
            <div className='mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center'>
              <img
                className='mt-10 max-w-2xl lg:w-full'
                width='672px'
                height='592px'
                src='images/company-index.svg'
                alt='home hero inphografic'
              />
              <div className='ml-20'>
                <h2 className='leading-tight capitalize text-5xl z-10 font-raleway font-normal text-gray-700'>
                  Company Index
                </h2>
                <p className='font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg'>
                  Organize and filter active, prospective, and past investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='container relative  py-16' id='hero'>
          <div className='w-full'>
            <div className='mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center'>
              <div>
                <h2 className='leading-tight capitalize text-5xl z-10 font-raleway font-normal text-gray-700'>
                  Portfolio Digest
                </h2>
                <p className='font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg'>
                  Dynamic feed with portfolio company updates, news, and other
                  information.
                </p>
              </div>
              <img
                className='mt-10 max-w-2xl lg:w-full'
                width='672px'
                height='592px'
                src='images/portfolio-digest.svg'
                alt='home hero inphografic'
              />
            </div>
          </div>
        </section>

        <section className='py-20 bg-blue-dark'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-5xl text-white antialiased text-center'>
              Request a Demo Today
            </h2>
            <Button className='border-white flex items-center border-2 w-fit px-8 py-4 mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent'>
              <span className='font-bold'>Get in touch</span>
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
        </section>

        <section className='py-40'>
          <div className='container flex flex-col justify-center items-center'>
            <h2 className='mb-20 text-center text-5xl antialiased'>Pricing</h2>
            <h3 className='text-2xl text-center text-gray-700 antialiased mb-5 font-raleway'>
              Your portfolio is unique and so are your needs.
            </h3>
            <p className='text-md text-gray-500 antialiased text-center mb-5 max-w-xl mx-auto'>
              We don’t believe pricing should be a one-size-fits-all approach.
              Contact us to discuss what you’re looking for and nothing more.
            </p>

            <a
              className='text-gray-500 antialiased font-light text-md uppercase text-center'
              href='https://clockwork4.typeform.com/to/Ma9jZH'
            >
              Contact us
            </a>
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
                  We are building the digital infrastructure for private
                  investing.
                </h2>
                <Button className='border-white flex items-center border-2 w-fit px-8 py-4 mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent'>
                  <span className='font-bold'>Request a demo</span>
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
      </main>

      <Footer />
    </div>
  )
}

export default ForInvestors
