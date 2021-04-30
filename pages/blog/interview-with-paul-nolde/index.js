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
              src="/images/Paul-Nolde.jpg"
              alt="alejandro"
              style={{ margin: '0', width: 'auto', height: '200px' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <p className="antialiased">Paul Nolde</p>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">Riverflow Growth Fund</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2020</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Richmond, VA</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">1</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">Health and Wellness</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Geographies
          </p>
          <b className="antialiased">Virginia, broader Mid-Atlantic</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Early to Late Seed</b>

          <div className="flex mt-5">
            <SocialLink to="www.riverflow.vc" />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          As a former retail and small business banker, and later wealth manager, I developed an admiration for, and curiosity in, founders scaling and exiting high growth companies. Why do they do it? How do they build a culture? When I left banking and ran a small family office making angel and seed stage investments, my interest extended into the dynamic between founders and funders. I enjoyed the non-linear approach of early stage, private equity investing vs. the more rigid, institutionalized practice of lending. At the end of the day, however, my good fortune to be doing what I do can be attributed to being at the right place, at the right time, knowing the right people.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Does the product or service (and associated industry / market) truly interest me? Obviously “team” and “size of market” are practically two of the most important criteria atthe seed stage, but I have to have a sincere interest in what I’m spending my time and money on...it has to “get me up in the morning” and instill a sense of sustained curiosity and excitement of what’s to come.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Telehealth, reimagining the workplace, supply chain management, edtech, pharmatech
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Bring greater awareness to the burgeoning entrepreneurial ecosystems across Virginia, and catalyze more early stage investing in this region.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Balancing the priorities of fundraising for the fund and maintaining a robust diligence cadence to uncover those “1 out of 100” investable opportunities.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Replacing a founding CEO at a later stage (typically Series A or later) for perfectly reasonable and company-first reasons is especially difficult when you’ve “been in the trenches” with that person for years, and have a mutual respect for each other.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Google (!), MedCity News (health), AVC (Fred Wilson’s blog), StrictlyVC, Venture Pulse
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Mountain biking
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          The Shadow in the Wind
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
