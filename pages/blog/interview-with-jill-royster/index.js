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
              src="/images/investor-series/jill-royster.jpg"
              alt="Jill Royster"
              style={{ margin: '0', width: '100%', height: 'auto' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <strong className="antialiased">Jill Royster</strong>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <p className="antialiased">My investment process is two-fold: I invest directly in companies as an Angel, and I’m also a Venture Partner at Powerhouse Capital, a media focused technology venture firm in Los Angeles, CA.</p>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <p className="antialiased">As an Angel, I invest in women-led and owned consumer businesses in the health/wellness sector.</p>
          <p className="antialiased">Powerhouse Capital is a tech-driven fund that focuses on the 4 key pillars of media: SIGHT (Visual), SOUND (audio), PLAY (gaming) and LIVE (experiences).</p>


          <div className="flex mt-5">
            <SocialLink to="https://www.powerhouse.vc/" />
            <SocialLink to="https://www.linkedin.com/company/powerhousecapital/" icon="linkedin"/>
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I started investing as a direct byproduct of helping sell a sports consultancy in 2016. I’m a marketer by training and having worked for both publicly traded (Time Warner, Gannett) and PE-owned companies (TH Lee), I am comfortable navigating highly complex, nuanced organizations with varying lines of business, differing priorities and multiple stakeholders. My role in the sales effort was essentially to network the opportunity and “gut check” the different options. To get up to speed, I needed to increase my own understanding of the traditional deal process. I joined an angel syndicate in NYC, I went through the 37 Angels Investor Bootcamp course, and I started building a network of trusted, like-minded folks to help me learn and become a better investor. The Wing was my very first direct investment, and that single opportunity has afforded me many new learnings over the course of five (5) years.   
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          It’s a tie between product market fit and the Founder(s).
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Using my Angel lens, I’d have to say more access to women with capital.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          From a media standpoint, the opportunity to truly know your customer…to create and scale globally through data-driven, D2C platforms (i.e. Netflix, Spotify). The extent to which media can be personalized now is remarkable and will only continue to improve with new technology.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Of course, returns are the primary reason we invest, but finding the right strategic partner to help you grow, meaningfully scale, and thrive (financially, culturally, purposefully) is the ultimate impact.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Valuations. They are too high, and too often, there isn’t enough proof of concept. To top it off, the very same people are making the decisions behind the valuations and determining the next “it” company. It’s a vicious cycle that’s been proven hard to break.  
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Be true to your investment thesis and don’t have FOMO
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Fitt Insider for all things health/wellness/nutrition.  
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Term Sheet, Strictly VC, The Hustle, Axios for all things investments.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I also read the NY Times, WSJ and The Post everyday. Physical copies. Call me crazy.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Travel. I’ve missed it terribly this past year. And hanging out with my niece and nephews.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Fiction: A Prayer for Owen Meany (John Irving). Be kind and appreciate each other’s differences.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Non-Fiction: Long Walk to Freedom (Nelson Mandela). A lesson in perseverance, leadership and the benefits of collaboration.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          It’s frothy, but I’m optimistic.  Right now I’m trying to balance that optimism with realism.  
          </p>
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
