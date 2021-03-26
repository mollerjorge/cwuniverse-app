import React, { useState } from 'react'
import Head from 'next/head'

import SignupModal from 'components/SignupModal'
import Button from 'components/Button'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Testimonials from 'components/Testimonials'
import Newsletter from 'components/Newsletter/Newsletter'

const ForInvestors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>About | Clockwork</title>
        <meta
          name="description"
          content="Clockwork Universe™ is a streamlined investor and founder collaboration platform which seeks to increase visibility and transparency."
        />
      </Head>
      <Header />
      <main className="py-20 pt-40">
        <div className="about-us-overlay py-12 relative z-0">
          <h1 className=" leading-tight capitalize text-big font-raleway font-normal text-center text-gray-700  lg:text-6xl z-10">
            Transparency drives{' '}
            <span className="relative inline-block ">
              <span className="badge badge-green"></span>
              Results
            </span>
          </h1>
        </div>

        <section>
          <div className="container py-40">
            <h2 className="antialiased text-black text-3xl lg:text-46 leading-tight mb-16">
              Our mission starts with the belief that entrepreneurship is the driving force for
              global advancement.
            </h2>
            <div className="about-us-columns">
              <p className="text-gray-700 antialiased leading-8 mb-5">
                Progress on both an individual and systemic level has been the result of the
                enterprising pursuits of committed risk takers who have tirelessly leveraged
                innovation and capital to pave the way for improved quality of life for themselves
                and for society as a whole. It is this combination of entrepreneurial spirit and
                risk seeking capital that continues to drive advances in health, education,
                information accessibility, energy, infrastructure and just about every facet of
                modern life. And it is in this vein that Clockwork’s guiding principle is to
                increase the efficiency of private markets, with technology to facilitate the
                deployment of capital and foster global innovation.
              </p>
              <p className="text-gray-700 antialiased leading-8 mb-5">
                Central to Clockwork’s pursuit is our focus on improved private market transparency,
                which we believe will play a critical role in building a better long term global
                economy.
              </p>
              <p className="text-gray-700 antialiased leading-8 mb-5">
                With our collaborative, data-centric approach to the investment process, we endeavor
                to transform the culture around fundraising and enable better market outcomes for
                all participants involved, from entrepreneurs and their teams, to investors,
                intermediaries and end asset owners alike. As tremendous amounts of capital continue
                to flow into private markets, investors at all levels will increasingly rely on
                these allocations to generate the added returns needed to fund their respective
                missions and goals. And as this trend accelerates amidst increased systematization,
                we aim to be at the forefront of aligning the interests of participants throughout
                the private capital stack to further propel the world’s entrepreneurs forward.
              </p>
              <p className="text-gray-700 antialiased leading-8 mb-5">
                We’re building financial technology to further align entrepreneur-investor interests
                by making transparent collaboration easy and desirable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-dark">
          <div className="container py-36">
            <span className="antialiased uppercase text-lg text-white font-light font-raleway tracking-wider mb-8 block">
              Who we are
            </span>
            <div className="who-we-are">
              <p className="text-2xl font-regular antialiased text-white font-raleway">
                We are a team of business operators, investment analysts and software engineers
                building the digital infrastructure for private investment offices.
              </p>

              <p className="text-white mt-5 antialiased leading-8 text-base">
                Clockwork emerged from an advisory business launched in 2015 that established its
                track record by providing valuable financial, strategic and technical advice as a
                co-founder and partner to a range of ventures founded by subject matter experts,
                creatives and product visionaries.
              </p>

              <p className="text-white mt-5 antialiased leading-8 text-base">
                From a diverse base of first-hand operator experiences, Clockwork evolved to become
                a trusted partner to private investors, leveraging our team’s general management
                prowess in transactional diligence, in turn leading to the development of our
                holistic, full-service portfolio monitoring offering. Today, we augment monitoring
                offerings with our proprietary collaboration platform, Clockwork Universe.
              </p>

              <p className="text-white mt-5 antialiased leading-8 text-base">
                We are dedicated to making it easier to build, finance and grow private companies.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />

        <section>
          <div className="container lg:py-40">
            <h2 className="text-3xl lg:text-5xl font-regular text-gray-800 antialiased text-center mb-6">
              Advancing global private markets...
            </h2>

            <p className="antialiased text-base text-gray-800 text-center">
              We believe in blurring borders and boundaries and take a geo agnostic approach to
              building transparent, collaborative private markets for all.
            </p>

            <img className="mx-auto mt-16" src="images/map.svg" alt="maps" />
          </div>
        </section>

        <section>
          <div className="container py-40">
            <h2 className="text-3xl lg:text-5xl font-regular text-gray-800 antialiased text-center mb-6">
              Join Us !
            </h2>

            <p className="antialiased text-base text-gray-800 text-center">
              We’re always on the lookout for the best and brightest. Discover open opportunities or
              create your own.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  window.open('https://clockwork4.typeform.com/to/QIJxjP', '_blank')
                }}
                className="mt-10 transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block mx-auto"
              >
                Apply Today
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="relative">
            <div
              className="wpb_row"
              style={{
                paddingTop: 'calc(100vw * 0.16)',
                paddingBottom: 'calc(100vw * 0.08)',
                width: '100%',
                height: '100%',
                position: 'relative',
                top: 0,
                left: 0,
              }}
            >
              <div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="true">
                <div
                  className="row-bg-overlay"
                  style={{
                    background: 'linear-gradient(135deg,#123861 0%,#2463af 100%)',
                    opacity: '1',
                  }}
                ></div>
              </div>
              <div
                className="nectar-shape-divider-wrap no-color "
                style={{ height: '250px' }}
                data-front=""
                data-style="curve_opacity"
                data-position="top"
              >
                <svg
                  className="nectar-shape-divider"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 100"
                  preserveAspectRatio="none"
                >
                  <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
                  <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
                  <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
                </svg>
              </div>
              <div className="container flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl lg:text-5xl text-white z-50 mt-16 lg:mt-0">
                  Welcome to the future of private investing
                </h2>
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                  className="border-white flex items-center border-2 w-fit px-8 py-4 mt-5 lg:mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent z-50"
                >
                  <span className="font-bold">Get started</span>
                  <svg
                    className="w-6 ml-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
      <SignupModal
        onHide={() => {
          setIsModalOpen(false)
        }}
        isOpen={isModalOpen}
      />
    </div>
  )
}

export default ForInvestors
