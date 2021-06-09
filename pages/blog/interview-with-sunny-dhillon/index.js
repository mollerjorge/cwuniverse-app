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
              src="/images/investor-series/sunny-dhillon.jpg"
              alt="Sunny Dhillon"
              style={{ margin: '0', width: '100%', height: 'auto' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <b className="antialiased">Sunny Dhillon</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">Signia Venture Partners</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2012</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">SF / LA </b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">50+</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">E-Commerce, B2B Software, Consumer Products, Robotics, Decentralization, Interactive Entertainment</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Geographies
          </p>
          <b className="antialiased">Mainly US</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Pre / Seed </b>

          <div className="flex mt-5">
            <SocialLink to="https://signiaventurepartners.com/" />
            <SocialLink to="https://twitter.com/SunDhillon" icon="twitter" />
            <SocialLink to="https://www.linkedin.com/in/sundhillon/" icon="linkedin" />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Company formation at the inception stage is what I've always found most interesting. Working for big corporates and investment banks taught me one thing really well - these 800lb gorillas don't get startups nor do they have innovation in their DNA. They do have rich balance sheets to offer fat ARR-generating customer contracts to flocks of external innovators though - that's really where I wanted to come in. Helping startups get customer contracts from corporates who didn't (figuratively) speak their language. 
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">Team. Team. Team. You’re working together for 5-7 years on average before an exit event so we have to make sure we get along and can work well together. Is there a strong technical cofounder on the initial roster? Is the product one that has been thoroughly well researched before seeking funding? Has the team gleaned unique insights into the pitched market opportunity based upon prior, deep professional and relevant market experience? Do they have a bunch of spring-loaded customers ‘ready to go’ as soon as we invest? What are their organic marketing plans and unfair distribution advantages that de-risk our initial investment for a go-to-market plan?</p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">Vertical applications of computer vision to highly automatable, low-skilled, repetitive tasks - e.g. mowing lawns, parts of the home building process, packing groceries.  I also see disruption of traditional banks and financial infrastructure in crypto through flash loans, yield farming pools, and other DeFi initiatives as very interesting.</p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          The goal is to help expand our global production possibility frontier - only strides in technology can help make that happen during a single life time. Enriching quality of life and bringing communities closer together are absolutely other noble goals in the pursuit of strong returns for our fund investors. 
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          We're in the midst of fundraising for our new fund right now and the limited partner community is an incredibly opaque one. There's not an efficient way to know who is in market for early stage managers, how over/under-exposed to venture they may currently be, and/or when they might be ready to deploy additional dollars to new managers. We thankfully have pre-existing relationships that we have leveraged, but the LP part of our business is definitely inefficient in how it currently allocates capital. 
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I have a giant anti-portfolio. It's too depressing to dwell on this too much right now to be honest. :) In brief though, don't always worry about the market or product being pitched - sometimes just go off of your belief in a founder. Products pivot - integrity, drive, and intelligence don't. 
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Industry press (Techcrunch, WSJ, etc.), conferences, etc. 
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I go to Comic Con every year - I'm a huge geek! :) 
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Troublemakers by Leslie Berlin - Talks about the founding stories of Atari, Genentech, Apple, Roam, and other Silicon Valley companies.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={8} />
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
