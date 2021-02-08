import React from 'react'
import Head from 'next/head'
import Button from 'components/Button'
import ReactCompareImage from 'react-compare-image'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Flickity from 'react-flickity-component'

import 'flickity/css/flickity.css'

const flickityOptions = {
  initialIndex: 1,
  prevNextButtons: false
}

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

      <main className='py-20 pt-40'>
        <div className='about-us-overlay container py-12'>
          <h1 className=' leading-tight capitalize text-big font-raleway font-normal text-center text-gray-700  lg:text-6xl '>
            Transparency drives{' '}
            <span className='badge badge-green z-0'>Results</span>
          </h1>
        </div>

        <section>
          <div className='container py-40'>
            <h2 className='antialiased text-gray-800 text-5xl leading-tight mb-16'>
              Our mission starts with the belief that entrepreneurship is the
              driving force for global advancement.
            </h2>
            <div className='about-us-columns'>
              <p className='text-gray-700 antialiased leading-8 mb-5'>
                Progress on both an individual and systemic level has been the
                result of the enterprising pursuits of committed risk takers who
                have tirelessly leveraged innovation and capital to pave the way
                for improved quality of life for themselves and for society as a
                whole. It is this combination of entrepreneurial spirit and risk
                seeking capital that continues to drive advances in health,
                education, information accessibility, energy, infrastructure and
                just about every facet of modern life. And it is in this vein
                that Clockwork’s guiding principle is to increase the efficiency
                of private markets, with technology to facilitate the deployment
                of capital and foster global innovation.
              </p>
              <p className='text-gray-700 antialiased leading-8 mb-5'>
                Central to Clockwork’s pursuit is our focus on improved private
                market transparency, which we believe will play a critical role
                in building a better long term global economy.
              </p>
              <p className='text-gray-700 antialiased leading-8 mb-5'>
                With our collaborative, data-centric approach to the investment
                process, we endeavor to transform the culture around fundraising
                and enable better market outcomes for all participants involved,
                from entrepreneurs and their teams, to investors, intermediaries
                and end asset owners alike. As tremendous amounts of capital
                continue to flow into private markets, investors at all levels
                will increasingly rely on these allocations to generate the
                added returns needed to fund their respective missions and
                goals. And as this trend accelerates amidst increased
                systematization, we aim to be at the forefront of aligning the
                interests of participants throughout the private capital stack
                to further propel the world’s entrepreneurs forward.
              </p>
              <p className='text-gray-700 antialiased leading-8 mb-5'>
                We’re building financial technology to further align
                entrepreneur-investor interests by making transparent
                collaboration easy and desirable.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-blue-dark'>
          <div className='container py-36'>
            <span className='antialiased uppercase text-lg text-white font-light font-raleway tracking-wider mb-8 block'>
              Who we are
            </span>
            <div className='who-we-are'>
              <p className='text-2xl font-regular antialiased text-white font-raleway'>
                We are a team of business operators, investment analysts and
                software engineers building the digital infrastructure for
                private investment offices.
              </p>

              <p className='text-white mt-5 antialiased leading-8 text-base'>
                Clockwork emerged from an advisory business launched in 2015
                that established its track record by providing valuable
                financial, strategic and technical advice as a co-founder and
                partner to a range of ventures founded by subject matter
                experts, creatives and product visionaries.
              </p>

              <p className='text-white mt-5 antialiased leading-8 text-base'>
                From a diverse base of first-hand operator experiences,
                Clockwork evolved to become a trusted partner to private
                investors, leveraging our team’s general management prowess in
                transactional diligence, in turn leading to the development of
                our holistic, full-service portfolio monitoring offering. Today,
                we augment monitoring offerings with our proprietary
                collaboration platform, Clockwork Universe.
              </p>

              <p className='text-white mt-5 antialiased leading-8 text-base'>
                We are dedicated to making it easier to build, finance and grow
                private companies.
              </p>
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
          <div className='container py-40'>
            <h2 className='text-5xl font-regular text-gray-800 antialiased text-center'>
              Advancing global private markets...
            </h2>

            <p className='antialiased text-base text-gray-800 text-center'>
              We believe in blurring borders and boundaries and take a geo
              agnostic approach to building transparent, collaborative private
              markets for all.
            </p>
                
            <img className='mx-auto mt-16' src='images/map.svg' alt='maps' />
          </div>
        </section>

        <section>
          <div className='container py-40'>
            <h2 className='text-5xl font-regular text-gray-800 antialiased text-center'>
              Join Us !
            </h2>

            <p className='antialiased text-base text-gray-800 text-center'>
              We’re always on the lookout for the best and brightest. Discover
              open opportunities or create your own.
            </p>
            <div className='flex justify-center'>
              <Button className='mt-10 transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block mx-auto'>
                Apply Today
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-blue-dark py-36 '>
            <div className='container flex flex-col justify-center items-center'>
              <h2 className='text-center text-white'>
                Welcome to the future of private investing
              </h2>
              <Button className='border-white flex items-center border-2 w-fit px-8 py-4 mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent'>
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
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ForInvestors
