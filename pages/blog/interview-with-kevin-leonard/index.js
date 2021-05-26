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
              src="/images/investor-series/kevin-leonard.jpeg"
              alt="Kevin Leonard"
              style={{ margin: '0', width: 'auto', height: '200px' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <b className="antialiased">Kevin Leonard</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">MissionOG</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2013</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Philadelphia, PA</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">21 active</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">B2B Fintech, Data, Software</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Expansion stage, Series A to C</b>

          <div className="flex mt-5">
            <SocialLink to="https://missionog.com/" />
            <SocialLink to="https://www.linkedin.com/in/kevinmarcleonard" icon="linkedin" />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            I spent the first 7 years of my career in corporate banking at Wells Fargo, focusing on
            underwriting credit transactions and managing relationships with a portfolio of Fortune
            500 companies. While earning my MBA at Villanova, I took a class on entrepreneurship
            which piqued my interest in venture investing and the startup ecosystem. I really became
            passionate about working with disruptive, early-stage companies and CEOs to help
            accelerate their growth. After graduation, I was fortunate enough to get connected to
            MissionOG which was investing out of Fund I at the time. It was the right time and place
            and I haven’t looked back nearly 5 years later.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            A strong management team. We want to partner with a CEO/team that has an unique insight
            on the segment they are disrupting and have built out a complementary team that balances
            the strengths and weaknesses of the group. While there are many other factors that go
            into our investment criteria, management is one of the most crucial.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5 mb-5">
            Continued shift in consumer and business payments from paper-based payment methods
            (cash, check, money order) to digital payments (online, mobile, digital wallet, etc.).
          </p>
          <p className="mb-5">
            Growing importance of actively managing payments for enterprises – software embedded
            payments/payment facilitators, payments orchestration and payment fraud management.
          </p>
          <p className="mb-5">
            Enterprises searching for ways to gain a competitive advantage by harnessing their
            unstructured data to turn it into smart, actionable insights, and supplementing existing
            data with external sources.
          </p>
          <p className="mb-5">
            Growth of governance, risk and compliance (GRC) software solutions as the cost of
            getting it wrong (financial penalties, reputational and brand damage, competitive
            repercussions) becomes increasingly more significant for enterprises.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Because operating experience is in our DNA, we understand the challenges and see the
            opportunities that come with managing high-growth businesses. We partner with companies
            that are seeking more than just financial capital and who can leverage our platform to
            create business advantages. Examples of how we work with our companies include assisting
            with business development introductions, helping to source key talent, identifying
            potential value-added independent board members, guiding strategic planning and
            liquidity processes, and brokering introductions to potential acquirers and investors
            that could serve as the next stage of capital.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            We continue to evolve how we use data to diligence prospective companies and help
            support growth in our existing portfolio. While investing can often be more art than
            science, we are adding as much qualitative rigor to our processes to find, vet, and
            invest in the best companies to generate exceptional returns for our investors. However,
            harnessing the myriad data we have access to – from benchmarking studies, company pitch
            decks, our own portfolio, etc. – is continuing to advance.
          </p>

          <p className="mt-5">
            Additionally, since the majority of our models, dashboards, tracking sheets, return
            analysis, etc. live in Excel, we have been finding ways to streamline and simplify our
            workflows through software solutions.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            An important lesson learned has been the more cycles and touchpoints you have with a
            management team before investing, the better. Since investing can be like a marriage,
            it’s important to understand the party you will be partnering with, which is difficult
            to ascertain during an abbreviated diligence period. Strong management teams are vital
            to navigating companies through rough patches they will inevitably face. An extremely
            important characteristic for a company CEO is the self-awareness to acknowledge their
            strengths and weaknesses and surround themselves with complementary individuals. Often
            where there is smoke, there is fire, and the more interactions you have with a team
            before making an investment decision often lets negative and positive tendencies and
            personalities come to light.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Pitchbook, PE Hub Wire, a16z, Stratechery by Ben Thompson.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">Running</p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Endurance: Shackleton’s Incredible Voyage by Alfred Lansing. It’s the incredible story
            of the 1914 British expedition to cross Antarctica on foot.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={7} />
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
