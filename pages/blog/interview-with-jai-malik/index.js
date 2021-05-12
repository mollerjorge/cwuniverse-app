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
              src="/images/kevin-leonard.jpeg"
              alt="alejandro"
              style={{ margin: '0', width: 'auto', height: '200px' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <p className="antialiased">Jai Malik</p>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">Countdown Capital</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2020</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Columbia, Missouri (USA)</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">4</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">Deep / Hard Tech</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
          Focus Geographies
          </p>
          <b className="antialiased">USA</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Pre-Seed, Seed</b>

          <div className="flex mt-5">
            <SocialLink to="https://www.countdown.capital/" />
            <SocialLink to="https://www.linkedin.com/in/jai-malik/" icon="linkedin" />
            <SocialLink to="https://twitter.com/jai__malik" icon="twitter" />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I started my career as an operator at two seed-stage tech startups, both of which are alive and thriving today. I first joined the team at Accrete.AI, where we were building machine learning-powered products to monitor market movements. After Accrete began to scale, I joined Forge.AI, where I helped the team analyze and detect market anomalies and create data-driven product use cases for government and banks. 
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          As I worked with these early stage teams, I became interested in venture capital, primarily because I wanted to see how things looked on the other side of the table and wanted to support an entire cohort of entrepreneurs (as opposed to a single one). I also understood the ins and outs of private marketing investing since I received part of my undergraduate degree from NYU Stern, so I thought I would make a decent investor one day. With tons of networking, I was able to make the switch over to VC. I first landed an investment position at Rocana Ventures and now serve as Founder & General Partner at Countdown Capital.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I’m looking primarily for a founding team that has put in the work and has conducted 100s of customer interviews to scope out and understand their market supremely well.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5 mb-5">
          I’m seeing renewed interest in innovating in bread & butter industries: construction, manufacturing, semiconductors, aerospace, and other industrial sectors. This is going to be supremely important, as I believe our country is entering a new Cold War with China and will require industrial innovation to compete and maintain our pole position in the world.
          </p>
          

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          At Countdown, our entire focus is helping our portfolio companies weave engineering and machine ethics into product development and the overall vision of the Company. The impact we hope to make is to bolster our national security and mitigate some of the most harmful aspects of emerging technology (e.g., labor displacement, lack of data privacy, etc.) by working with entrepreneurs who are committed to building a more humane future with bleeding edge technology.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Since we are a solo GP firm, admin and marketing tasks can take up a chunk of time. Writing emails, doing interviews, organizing financials, etc. are all time consuming and take away from pure investment and portfolio support bandwidth.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          That the failure rate for VC-backed deep tech / hard tech companies is quite high, especially compared to VC-backed software or consumer companies. Things have been changing recentlywith more capital entering the ecosystem, but scaling a capital intensive product is extremely difficult.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Payload (space news), evtol.com, Pitchbook & Crunchbase, TechCrunch, Twitter (my personal favorite)
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Tennis! I’m an avid tennis player and love watching both ATP and WTA tournaments. My favorite player on both tours today is Dominic Thiem.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Philosophical Investigations by Ludwig Wittgenstein. Not for the faint of heart, but truly a perspective changing read.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={3} />
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
