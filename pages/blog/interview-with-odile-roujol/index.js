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
              src="/images/investor-series/odile-roujol.jpeg"
              alt="Odile Roujol"
              style={{ margin: '0', width: '100%', height: 'auto' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <b className="antialiased">Odile Roujol</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">Fab Ventures, Fund I</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">May 2020 (first closing)</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Los Angeles, San Francisco </b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">15 to 25</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">Conscious Fashion and Beauty, New Luxury</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            FOCUS GEOGRAPHIES
          </p>
          <b className="antialiased">United States</b>
          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            stage (s)
          </p>
          <b className="antialiased">Pre-Seed / Seed</b>

          <div className="flex mt-5">
            <SocialLink to="https://www.fabcocreationstudio.com/" />
            <SocialLink to="https://www.instagram.com/fabcocreationstudio/" icon="instagram" />
            <SocialLink
              to="https://www.linkedin.com/company/fab-co-creation-studio/?viewAsMember=true"
              icon="linkedin"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            As an ex CEO Lancôme, I’ve been a serial business angel in Europe then in the US/
            Silicon Valley, then launching a global Fab community (FaB fashion and beautytech)
            enabling founders and VCs/investors to share learnings:
            <a className="text-blue" href="https://www.beautytechcommunity.com/">
              https://www.beautytechcommunity.com/
            </a>
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Founders, purpose and data-driven, building communities, customer-centric. Working in a
            collaborative way.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Well-being and a more holistic approach to beauty (one of the deals under way),
            platforms enabling people to access content, being educated, having a feeling of
            belonging, not only services/products. In the sustainable fashion category, new material
            science companies, natural dyeing, new supply chain and closed loop.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Taking care of people’s health/self-care, and taking care of the planet, and social
            impact.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            I take time with founders, guiding them, helping them to grow. High touch, low number of
            startups. Happy to work with a financial back office to save my time (VMS, for
            reference).
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Too early to say, but I would say that I always try to add skills to the investment, and
            add value as not taking the lead.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Crunchbase, Cb insights, Forbes, Fast company… but best references are from founders and
            other VCs in my network understanding Fab’s positioning and unique promise, leveraging a
            powerful global network.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Hiking in California, Reading and writing short novels. And for sure traveling pre and
            past covid!
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Proust (as being French, a famous French writer in the 20th century) to remember the
            value of time (new luxury), discovering new people and culture, and sharing great
            moments, thus building great memories and connecting us to yourself.
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
