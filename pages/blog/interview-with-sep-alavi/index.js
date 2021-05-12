import React from 'react'

import PostLayout from 'components/PostLayout'
import MarketMeter from 'components/MarketMeter'
import SocialLink from 'components/SocialLink'
import usePost from 'utils/usePost'

const Interview = () => {
  const currentPost = usePost()

  return (
    <PostLayout isInterview meta={currentPost}>
      <div className="flex flex-col md:flex-row mb-20">
        <div
          className=" border-gray-300 border-1 p-8 w-full md:w-1/3"
          style={{ height: 'max-content' }}
        >
          <div>
            <img
              src="/images/investor-series/sep-alavi.jpg"
              alt="Sep Alavi"
              style={{ margin: '0', width: '100%', height: 'auto' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <p className="antialiased">Sep Alavi</p>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">White Star Capital Digital Asset Fund</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2020</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">New York, Montreal, Toronto, London, Paris</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">3</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">Blockchain, Digital Assets, Crypto Networks</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Seed – Series A</b>

          <div className="flex mt-5">
            <SocialLink to="https://whitestarcapital.com/digital-asset-fund/" />
            <SocialLink to="https://twitter.com/SepAlavi" icon="twitter" />
            <SocialLink to="https://www.linkedin.com/in/sep-alavi-63260b21/" icon="linkedin" />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            I started investing in private markets as a VC in 2014 after spending 12 years in
            Capital Markets. I saw an opportunity in tech and digital transformation, and launched
            Residence Ventures, a seed stage fund in late 2014. I quickly became passionate about
            backing entrepreneurs and helping them scale internationally. I was always an early
            adopter in all things tech and the notion of being the first investor in transformative
            ideas was very attractive to me. In 2017 I joined White Star Capital, a series A and B
            global venture fund to build on my conviction.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Backing great founders more than anything else
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            WBlockchain as a next-generation computing platform enabling new, secure,
            censorship-resistant and frictionless business models. As well as Digital Assets as a
            new asset class empowering users all over the world.
          </p>
          <p>
            The adoption of new technologies and the use of digital products and services have now
            hit the explosion we need as tech investors. Now, and in great part due to the current
            situation that we’re living in, these critical adoptions have finally become a norm and
            it’s not going to go away. So now more than ever we are very excited about investing in
            these companies that are tech enabled and that can scale to the mass market that we’re
            seeing in Latin America.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            ESG as much as possible – Financial inclusion (banking the unbanked) – Helping
            entrepreneurs achieve their dreams.
          </p>

          <p>
            We are investing in the most innovative companies, that are employing thousands, that
            are bringing technology and better products and services to our economies.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <ul className="font-lato antialiased tracking-wide text-black mt-5 list-disc">
            <li>Educating investors </li>
            <li>Saying no to entrepreneurs</li>
            <li>Keeping up with all the deal flow</li>
            <li>Achieving inbox zero</li>
          </ul>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Not having enough ownership in my winners.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            The Block, Messari, Token Terminal, CoinMetrics & Kaiko.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Electronic music production and DJing, Skiing, Triathlons
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Life After Google by George Gilder
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={10} />
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
