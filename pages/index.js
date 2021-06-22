import React, { useState } from 'react'
import Head from 'next/head'
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserHardHat,
  faBriefcase,
  faUniversity,
  faUsers,
  faRocket,
  faCogs,
} from '@fortawesome/pro-light-svg-icons'

import Button from 'components/Button'
import GroupBox from 'components/GroupBox/GroupBox'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SignupModal from 'components/SignupModal'
import Testimonials from 'components/Testimonials'

import FounderIcon from 'public/images/founder-icon.svg'
import InvestorIcon from 'public/images/investor-icon.svg'
import Newsletter from 'components/Newsletter/Newsletter'
import Layout from 'components/Layout'

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Layout>
      <Head>
        <title>
          Clockwork | Private Investment Intelligence Software for Founders and Investors
        </title>
        <meta
          name="description"
          content="Clockwork powers modern investor relations and management, improving transparency to drive results for founders and investors alike."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-20">
        <section className="container relative pb-12  2xl:py-24" id="hero">
          <div className="w-full">
            <div className="mt-20  md:mt-40 lg:mt-12 lg:flex lg:justify-between lg:items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="text-big font-raleway font-normal text-gray-700 max-w-sm lg:text-60 lg:max-w-2xl">
                  The evolution of portfolio operations.
                </h1>
                <p className="font-lato text-xl mt-6  text-black font-light lg:max-w-lg antialiased">
                  Clockwork Universe powers the actionable <br />
                  source of truth for investors and founders.
                </p>
                <div className="mt-10 mb-10 lg:mb-0">
                  <Button
                    onClick={() => {
                      setIsModalOpen(true)
                    }}
                    className="transition duration-500 transform inline-block bg-teal"
                  >
                    Try it for free
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_uuzrbscg.json"
                  background="transparent"
                  speed="0.6"
                  style={{ width: '100%', height: 'auto' }}
                  autoplay=""
                ></lottie-player>
              </div>
            </div>
          </div>
        </section>

        <section className="container bg-white mb-40  mt-32" id="meetClockwork">
          <div className=" flex flex-col lg:flex-row gap-6  w-full">
            <div className="flex flex-col w-full lg:w-4/12">
              <h2 className="leading-tight font-raleway font-normal text-gray-900 text-4xl lg:text-46 antialized">
                Meet Clockwork Universe
              </h2>
            </div>
            <div className="w-full lg:w-8/12 flex flex-col lg:flex-row">
              <GroupBox
                title="founders"
                legend="Upgrade your investor reporting and evolve your investor relationships."
                icon={<FounderIcon />}
                path="for-founders"
              />
              <GroupBox
                title="investors"
                legend="Modernize your portfolio operations and improve founder engagement."
                icon={<InvestorIcon />}
                path="for-investors"
              />
            </div>
          </div>
        </section>

        <section id="enhancing private investment efficienty" className="bg-blue py-32">
          <div className=" container m-auto flex 2xl:px-24 w-full flex-col">
            <h2 className="text-4xl lg:text-5xl text-center w-full capitalize text-white mb-4 font-raleway">
              The digital infrastructure <br />
              for private investment.
            </h2>
            <p className="text-white text-center font-normal font-raleway antialiased text-lg  w-full">
              Clockwork® enables better outcomes for founders and investors throughout the
              investment lifecycle.
            </p>

            <div className="tabs-container relative flex mt-20">
              <div className="tab-line hidden lg:block" />
              <div className="pt-16 pb-24 hidden lg:flex flex-col gap-10 w-1/4  max-w-sm justify-between">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementsByClassName('tab-line')[0].style.cssText =
                      'transform: translateY(0px)'
                    setActiveTab(0)
                  }}
                  className={classNames(
                    'cursor-pointer',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'pl-12',
                    'focus:outline-none',
                    'text-left',
                    { ['opacity-50']: activeTab !== 0 }
                  )}
                >
                  <h3 className="text-white text-26 font-normal capitalize font-raleway antialiased mb-3">
                    Dynamic Company Profile
                  </h3>
                  <p className="text-gray-200 text-md antialiased">
                    Track portfolio company operational and investment specific data.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    document.getElementsByClassName('tab-line')[0].style.cssText =
                      'transform: translateY(230px)'
                    setActiveTab(1)
                  }}
                  className={classNames(
                    'cursor-pointer',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'pl-12',
                    'focus:outline-none',
                    'text-left',
                    { ['opacity-50']: activeTab !== 1 }
                  )}
                >
                  <h3 className="text-white text-26 antialiased font-normal capitalize font-raleway mb-3">
                    Automated Investor Reporting
                  </h3>
                  <p className="text-gray-100 text-md">
                    Facilitate reporting and organization of investor communications.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    document.getElementsByClassName('tab-line')[0].style.cssText =
                      'transform: translateY(460px)'
                    setActiveTab(2)
                  }}
                  className={classNames(
                    'cursor-pointer',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'pl-12',
                    'focus:outline-none',
                    'text-left',
                    { ['opacity-50']: activeTab !== 2 }
                  )}
                >
                  <h3 className="text-white text-26 antialiased font-normal capitalize font-raleway mb-3">
                    Digital Private Investment Office
                  </h3>
                  <p className="text-gray-100 text-md">
                    Interactive portfolio overview and performance metrics.
                  </p>
                </button>
              </div>
              <div className="hidden lg:block w-3/4">
                <img
                  key="0"
                  className={`mx-auto pt-5 ${activeTab === 0 ? 'block' : 'hidden'}`}
                  width={1045}
                  height={822}
                  src="images/dynamic-company-profiles.svg"
                  alt="automated investor reporting"
                />
                <img
                  key="1"
                  className={`mx-auto pt-5 ${activeTab === 1 ? 'block' : 'hidden'}`}
                  width={1045}
                  height={822}
                  src="images/automated-investor-reporting.svg"
                  alt="automated investor reporting"
                />
                <img
                  key="2"
                  className={`mx-auto pt-5 ${activeTab === 2 ? 'block' : 'hidden'}`}
                  width={1045}
                  height={822}
                  src="images/digital-private-investing.svg"
                  alt="automated investor reporting"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col">
              <h3 className="text-white text-26 font-normal capitalize font-raleway antialiased mb-3">
                Dynamic Company Profile
              </h3>
              <p className="text-gray-200 text-md antialiased mb-5">
                Track portfolio company operational and investment specific data.
              </p>
              <img
                key="0"
                className="mx-auto animate__animated animate__fadeIn animate__fast mb-16 "
                width={1145}
                height={922}
                src="images/automated-investor-reporting.png"
                alt="automated investor reporting"
              />

              <h3 className="text-white text-26 antialiased font-normal capitalize font-raleway mb-3">
                Automated Investor Reporting
              </h3>
              <p className="text-gray-100 text-md mb-5">
                Facilitate reporting and organization of investor communications.
              </p>
              <img
                key="1"
                className="mx-auto animate__animated animate__fadeIn animate__fast mb-16 "
                width={1145}
                height={922}
                src="images/digital-private-investment.png"
                alt="automated investor reporting"
              />

              <h3 className="text-white text-26 antialiased font-normal capitalize font-raleway mb-3">
                Digital Private Investment Office
              </h3>
              <p className="text-gray-100 text-md mb-5">
                Interactive portfolio overview and performance metrics.
              </p>
              <img
                key="2"
                className="mx-auto animate__animated animate__fadeIn animate__fast mb-16 "
                width={1145}
                height={922}
                src="images/automated-investor-reporting.png"
                alt="automated investor reporting"
              />
            </div>
          </div>
        </section>

        <section className="container py-52">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col justify-center lg:mr-20">
              <h2 className="font-normal text-black mb-6 text-4xl lg:text-46 antialiased">
                Who we work with
              </h2>
              <p className="text-black font-normal text-base tracking-wide leading-8 max-w-md antialiased font-lato">
                Clockwork’s investor relations and portfolio monitoring technology drive value for
                all private market participants.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 grid-cols-1 grid-row-6 lg:grid-cols-3 lg:grid-rows-2 grid gap-7 px-0">
              <div className="flex  flex-col justify-center items-center md:items-start rounded-md bg-red text-white p-10">
                <FontAwesomeIcon icon={faUserHardHat} className="text-3xl" />

                <h3 className="text-lg mt-5 text-center md:text-left  text-white font-raleway font-light">
                  Founders & managements teams
                </h3>
              </div>

              <div className="justify-center items-center md:items-start lg:-mt-12 lg:mb-12 flex  flex-col rounded-md bg-blue text-white p-10">
                <FontAwesomeIcon icon={faBriefcase} className="text-3xl" />

                <h3 className="text-lg mt-5  text-white text-center md:text-left font-raleway font-light">
                  VC/PE Funds & Corporate Venture
                </h3>
              </div>

              <div className="justify-center items-center md:items-start flex  flex-col rounded-md bg-blue-light text-white p-10">
                <FontAwesomeIcon icon={faUniversity} className="text-3xl" />

                <h3 className="text-lg mt-5  text-white text-center md:text-left font-raleway font-light">
                  Institutional Limited Partners
                </h3>
              </div>

              <div className="justify-center items-center md:items-start flex  flex-col rounded-md bg-teal text-white p-10">
                <FontAwesomeIcon icon={faUsers} className="text-3xl" />

                <h3 className="text-lg mt-5  text-white text-center md:text-left font-raleway font-light">
                  Individuals & Family Offices
                </h3>
              </div>

              <div className="justify-center items-center md:items-start lg:-mt-12 lg:mb-12 flex  flex-col rounded-md bg-purple text-white p-10">
                <FontAwesomeIcon icon={faRocket} className="text-3xl" />

                <h3 className="text-lg mt-5  text-white text-center md:text-left font-raleway font-light">
                  Accelerators & Angel Groups
                </h3>
              </div>

              <div className="justify-center items-center md:items-start flex  flex-col rounded-md bg-yellow text-white p-10">
                <FontAwesomeIcon icon={faCogs} className="text-3xl" />

                <h3 className="text-lg mt-5  text-white text-center md:text-left font-raleway font-light">
                  Advisors & Intermediaries
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-dark w-full">
          <div className="container flex flex-col lg:flex-row justify-between items-center py-40">
            <div className="w-full lg:w-1/2">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_t04injmt.json"
                background="transparent"
                speed="2.5"
                style={{ width: '100%', height: 'auto' }}
                loop=""
                autoplay=""
              ></lottie-player>
            </div>

            <div className="flex flex-col w-full lg:w-1/2">
              <h3 className="text-white font-raleway text-4xl lg:text-5xl font-normal antialiased">
                We’re building the platform so you don’t have to.
              </h3>

              <p className="text-white font-normal font-lato tracking-wide leading-8 mt-10 antialiased">
                Clockwork Universe™ financial technology is designed for compatibility with your
                existing investment operations including the systems, processes, and information
                sources you already rely on. From self-serve technology to high-touch portfolio
                monitoring, our solutions can be tailored to fit your unique needs.
              </p>

              <Button
                onClick={() => {
                  setIsModalOpen(true)
                }}
                className="border-gray-200 tracking-normal flex items-center border-2 w-fit mt-12 w-max rounded uppercase font-normal text-sm antialiased bg-transparent py-3 px-6"
              >
                <span>Get started</span>
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
                    strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        <Testimonials />

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

        <Newsletter />

        <Footer />
        <SignupModal
          onHide={() => {
            setIsModalOpen(false)
          }}
          isOpen={isModalOpen}
        />
      </main>
    </Layout>
  )
}
