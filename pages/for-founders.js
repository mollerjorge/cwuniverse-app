import React, { useState } from 'react'
import Head from 'next/head'
import Button from 'components/Button'
import ReactCompareImage from 'react-compare-image'

import Footer from 'components/Footer'
import Header from 'components/Header'
import SignupModal from 'components/SignupModal'
import Newsletter from 'components/Newsletter/Newsletter'

const ForFounders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Clockwork Universe for Founders</title>
        <meta
          name="description"
          content="Clockwork Universe™ is a streamlined investor and founder collaboration platform which seeks to increase visibility and transparency."
        />
      </Head>

      <Header />

      <main className="pt-20">
        <section className="container relative pb-12  2xl:py-24" id="hero">
          <div className="w-full">
            <div className="mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="leading-tight capitalize text-39 lg:text-60 z-10 font-raleway font-normal text-gray-700 max-w-sm lg:text-6xl lg:max-w-2xl">
                  Clockwork Universe For{' '}
                  <span className="relative inline-block">
                    <span className="badge badge-red"></span>
                    Founders
                  </span>
                </h1>
                <p className="font-lato text-xl mt-6 leading-relaxed  text-gray-800 antialiased font-light lg:max-w-lg">
                  Save time and build trust with better investor communications.
                </p>
                <div className="mt-8 mb-10 lg:mb-0">
                  <Button
                    onClick={() => {
                      setIsModalOpen(true)
                    }}
                    className="transition duration-500 transform hover:-translate-y-4 hover:shadow-2xl inline-block py-5 px-12 text-lg antialiased bg-teal"
                  >
                    Get started
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_2wikv69v.json"
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
          <div className="container pt-28 pb-10">
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

        <section className="container relative  py-5  lg:py-16" id="hero">
          <div className="w-full">
            <div className="mt-20 flex flex-col lg:flex-row  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div className="w-full lg:w-1/3">
                <h2 className="leading-tight capitalize text-3xl lg:text-5xl z-10 font-raleway font-normal text-gray-700">
                  Investor Relations Platform
                </h2>
                <p className="font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg">
                  Manage your company profile for communication and data sharing with current and
                  prospective investors and other key contacts. Send regular updates, quick
                  announcements, news, notes, and files, in a single place.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  width={672}
                  height={592}
                  src="/images/investor-relations.svg"
                  alt="home hero inphografic"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container relative py-5  lg:py-16" id="hero">
          <div className="w-full">
            <div className="mt-20 flex flex-col-reverse lg:flex-row  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div className="w-full lg:w-1/2">
                <img
                  width={672}
                  height={592}
                  src="/images/investor-updates.svg"
                  alt="home hero inphografic"
                />
              </div>
              <div className="m-0 lg:ml-20">
                <h2 className="leading-tight capitalize text-3xl lg:text-5xl z-10 font-raleway font-normal text-gray-700">
                  Investor Updates Templates
                </h2>
                <p className="font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg">
                  A structured approach to investor updates with standard and custom templates. Rely
                  on best practices to ensure you communicate what is needed without wasting your
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container relative  py-16" id="hero">
          <div className="w-full">
            <div className="mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div>
                <h2 className="leading-tight capitalize text-3xl lg:text-5xl z-10 font-raleway font-normal text-gray-700">
                  Systems Integrations
                </h2>
                <p className="font-lato mt-6 antialiased text-base text-gray-700 leading-8 max-w-lg">
                  Import data from systems you are already using for better and easier reporting.
                  Save time and build trust accuracy with investor communications and records.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  width={672}
                  height={592}
                  src="/images/integrations.svg"
                  alt="home hero inphografic"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-dark">
          <div className="flex flex-col justify-center items-center px-10 lg:p-0">
            <h2 className="text-4xl lg:text-5xl text-white antialiased text-center z-10">
              Sign Up{' '}
              <span className="relative inline-block">
                <span className="badge badge-blue -bottom-0"></span>
                Free
              </span>{' '}
              & Claim Your Profile
            </h2>
            <Button
              onClick={() => {
                setIsModalOpen(true)
              }}
              className="border-white flex items-center border-2 w-fit px-8 py-4 mt-8 w-max rounded-md uppercase font-normal antialiased bg-transparent"
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
        </section>

        <section className="py-40">
          <div className="container">
            <h2 className="text-center text-5xl antialiased mb-10">Pricing</h2>

            <div className="flex flex-col lg:flex-row justify-center gap-6">
              <div className="gradient w-full group lg:w-1/3 flex justify-center items-center flex-col border-1 border-gray-200 rounded-md hover:rounded-md text-gray-200 py-40 px-16">
                <span className="uppercase group-hover:text-white text-gray-500 text-md mb-5 font-raleway">
                  Try it now!
                </span>
                <h2 className="text-black group-hover:text-white antialiased text-5xl">Free</h2>
                <p className="text-gray-500 group-hover:text-white antialiased text-md text-center mb-20">
                  Create your Clockwork Universe profile and improve your investor relations.{' '}
                </p>

                <a
                  href="https://cwuniverse.app/welcome"
                  className="text-gray-600 group-hover:text-white flex items-center antialiased text-sm uppercase tracking-widest font-raleway"
                >
                  <span>Sign up now</span>
                  <svg
                    className="w-8 group-hover:text-white text-gray-400 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="gradient group w-full lg:w-1/3 flex justify-center items-center flex-col border-1 border-gray-200 rounded-md text-gray-200 py-40 px-16">
                <span className="uppercase group-hover:text-white text-gray-500 text-md mb-5 font-raleway">
                  NEED MORE HELP?
                </span>
                <h2 className="text-black group-hover:text-white antialiased text-5xl">Premium</h2>
                <p className="text-gray-500 group-hover:text-white antialiased text-md text-center mb-20">
                  Rely on our team for hands-on financial management and strategic support.
                </p>

                <a
                  href="https://clockwork4.typeform.com/to/Ma9jZH"
                  className="text-gray-600 group-hover:text-white flex items-center antialiased text-sm uppercase tracking-widest font-raleway"
                >
                  <span>Contact us</span>
                  <svg
                    className="w-8 group-hover:text-white text-gray-400 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
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
                  Improve your investor relations
                </h2>
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                  className="border-white flex items-center border-2 w-fit px-8 py-4 mt-5 lg:mt-8 w-max rounded-md uppercase font-normal antialiased bg-transparent z-50"
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

export default ForFounders
