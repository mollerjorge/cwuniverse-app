import React from 'react'

import PostLayout from 'components/PostLayout'
import MarketMeter from 'components/MarketMeter'
import SocialLink from 'components/SocialLink'
import usePost from 'utils/usePost'

const Interview = () => {
  const currentPost = usePost()

  return (
    <PostLayout isInterview meta={currentPost}>
      <div className="flex mb-20">
        <div className=" border-gray-300 border-1 p-8 w-1/3" style={{ height: 'max-content' }}>
          <div>
            <img
              src="/images/vaughn-blake.jpeg"
              alt="Vaughn Blake"
              style={{ margin: '0', width: '100%', height: 'auto' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <p className="antialiased">Vaughn Blake</p>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">Blue Bear Capital</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2017</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Los Angeles, CA//Houston, TX</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">17</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">Software; Energy, Infra, Climate</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Geographies
          </p>
          <b className="antialiased">North America, Europe</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Seed through Series B</b>

          <div className="flex mt-5">
            <SocialLink to="https://bluebearcap.com/" />
            <SocialLink to="https://twitter.com/vaughnblake" icon="twitter" />
            <SocialLink
              to="https://www.linkedin.com/public-profile/in/vaughn-blake-13050a7?challengeId=AQEkkSGcthJy1AAAAXdAklwveMtc0Yg0P4GFZ7BagjstP34jgwTtNIwig-WS4c7wBKFcm-KbfM1I_bhpJGWqbSCNy3tfHmLkAg&submissionId=d0588538-09e5-5d16-6962-bb5053a6ea5b"
              icon="linkedin"
            />
          </div>
        </div>

        <div className="w-2/3 ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            I began making private investments in the early 2010s, mainly around the
            crypto/blockchain space. I love investing (especially venture) and grew up with an
            investors mindset, having my first public market (stock) portfolio around 2nd grade. My
            dad was an investment banker, then private equity investor and it was something that was
            discussed with me at an early age. It would be difficult to imagine a life where I
            wasn’t an investor.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">Asymmetry</p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            The energy transition, the next phases of the frontier-tech lifecycle, synthetic
            biology, collaboration tools.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Extend and improve upon the world’s collective quality of life.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Keeping track of what our actual investor rights are across the portfolio, valuations.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Never be thesis-constrained when you recognize a massive opportunity.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            FT, Axios, Bloomberg, FinTwit.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Family, snowboarding, tennis.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            The Book of Illusions, Paul Auster
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={5} />
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
