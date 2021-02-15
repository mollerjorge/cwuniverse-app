import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Button from 'components/Button'
import ReactCompareImage from 'react-compare-image'

import Footer from 'components/Footer'
import Header from 'components/Header'
import SignupModal from 'components/SignupModal'

const ForInvestors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>Clockwork Universe</title>
        <meta name="description" content="Clockwork universe, investment intelligence app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-20">
        <section className="container relative pb-12  2xl:py-24" id="hero">
          <div className="w-full">
            <div className="mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div>
                <h1 className="leading-tight capitalize text-39 lg:text-60 z-10 font-raleway font-normal text-gray-700 max-w-sm lg:text-6xl lg:max-w-2xl">
                  Clockwork Universe For{' '}
                  <span className="relative inline-block">
                    <span className="badge badge-green"></span>
                    Investors
                  </span>
                </h1>
                <p className="font-lato text-xl mt-6 leading-relaxed  text-gray-800 antialiased font-light lg:max-w-lg">
                  A better way to monitor your private investment portfolio. Easily organize and
                  engage with transparent portfolio company updates and investment data.
                </p>
                <div className="mt-8 mb-10 lg:mb-0">
                  <Button
                    onClick={() => {
                      setIsModalOpen(true)
                    }}
                    className="transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block py-5 px-12 text-lg antialiased"
                  >
                    Get started
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_svthmzu5.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '100%', height: 'auto' }}
                  autoplay=""
                ></lottie-player>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-20">
            <h2 className="text-center text-39 lg:text-46 text-gray">
              The evolution of investor relations.
            </h2>
            <div className=" w-full py-10 image-compare flex flex-col lg:flex-row justify-between">
              <div className="m-0 mb-5 lg:mb-0 lg:mr-24 lg:mt-10">
                <h3 className="uppercase tracking-widest text-center lg:text-right mb-5 font-light text-gray-600 antialiased text-sm">
                  static emails
                </h3>
                <p className=" max-w-xs leading-8 antialiased text-gray-700 text-center lg:text-right">
                  Unorganized, plain, inconsistent, and time consuming. Do investors even read
                  these?
                </p>
              </div>
              <div className="w-full lg:w-2/3">
                <ReactCompareImage
                  sliderLineColor="#143D69"
                  sliderLineWidth="6"
                  leftImage="images/oldemails.png"
                  rightImage="images/newemails.png"
                />
              </div>
              <div className="m-0 mt-10  lg:ml-24">
                <h3 className="uppercase text-center lg:text-left tracking-widest mb-5 font-light text-gray-600 antialiased text-sm">
                  Clockwork updates
                </h3>
                <p className="text-gray-700 text-center lg:text-left max-w-xs  leading-8">
                  Modern, flexible, and eye catching. Make your investor updates actionable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container relative  py-5 lg:py-16" id="hero">
          <div className="w-full">
            <div className="mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div>
                <h2 className="leading-tight  capitalize text-3xl lg:text-5xl z-10 font-raleway font-normal text-gray-700">
                  Portfolio Dashboard
                </h2>
                <p className="font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg mb-5">
                  Track aggregate portfolio performance from individual investment transactions.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  className="mt-10 max-w-2xl"
                  width="672px"
                  height="592px"
                  src="/images/portfolio-dashboard.svg"
                  alt="portfolio dashboard"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container relative  py-5 lg:py-16" id="hero">
          <div className="w-full">
            <div className="mt-20 flex flex-col-reverse lg:flex-row  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
                <Image
                  className="mt-10 max-w-2xl"
                  width="672px"
                  height="592px"
                  src="/images/company-index.svg"
                  alt="company index"
                  layout="responsive"
                />
              </div>
              <div className="m-0 lg:ml-20">
                <h2 className="leading-tight capitalize text-3xl lg:text-5xl z-10 font-raleway font-normal text-gray-700">
                  Company Index
                </h2>
                <p className="font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg">
                  Organize and filter active, prospective, and past investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container relative  py-5 lg:py-16" id="hero">
          <div className="w-full">
            <div className="mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div>
                <h2 className="leading-tight capitalize text-3xl lg:text-5xl z-10 font-raleway font-normal text-gray-700">
                  Portfolio Digest
                </h2>
                <p className="font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg">
                  Dynamic feed with portfolio company updates, news, and other information.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  className="mt-10 max-w-2xl"
                  width="672px"
                  height="592px"
                  src="/images/portfolio-digest.svg"
                  alt="company index"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-dark">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-5xl text-white antialiased text-center">
              Request a Demo Today
            </h2>
            <Button
              onClick={() => {
                setIsModalOpen(true)
              }}
              className="border-white flex items-center border-2 w-fit px-8 py-4 mt-8 w-max rounded-md uppercase font-normal antialiased bg-transparent"
            >
              <span className="font-bold">Get in touch</span>
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
        </section>

        <section className="py-40">
          <div className="container flex flex-col justify-center items-center">
            <h2 className="mb-16 text-center text-black text-4xl lg:text-5xl antialiased">
              Pricing
            </h2>
            <h3 className="text-2xl text-center text-gray antialiased mb-5 font-raleway">
              Your portfolio is unique and so are your needs.
            </h3>
            <p className="text-md text-gray-500 antialiased text-center mb-5 max-w-xl mx-auto">
              We don’t believe pricing should be a one-size-fits-all approach. Contact us to discuss
              what you’re looking for and nothing more.
            </p>

            <a
              className="text-black antialiased flex font-normal text-sm tracking-wider font-raleway text-md uppercase text-center"
              href="https://clockwork4.typeform.com/to/Ma9jZH"
            >
              Contact us{' '}
              <svg
                className="w-6 ml-5 text-gray-500 stroke-current"
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
            </a>
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
                  We are building the digital infrastructure for private investing.
                </h2>
                <Button
                  onClick={() => {
                    window.open('https://cwuniverse.app/access-request', '_blank')
                  }}
                  className="border-white flex items-center border-2 w-fit px-8 py-4 mt-12 w-max rounded-md uppercase font-normal antialiased bg-transparent z-50"
                >
                  <span className="font-bold">Request a demo</span>
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

      <Footer />
      <SignupModal
        onHide={() => {
          setIsModalOpen(false)
        }}
        isOpen={isModalOpen}
      />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </div>
  )
}

export default ForInvestors
