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
              src="/images/investor-series/ariana-thacker.png"
              alt="Ariana Thacker"
              style={{ margin: '0', width: 'auto', height: '200px' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <b className="antialiased">Ariana Thacker</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">Conscience VC</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2020</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Los Angeles / Miami</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">“Consumer x Science” (Consumer Tech, Deep Tech, AI/ML)</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
          Focus Geographies
          </p>
          <b className="antialiased">North America</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Pre-Seed and Seed</b>

          <div className="flex mt-5">
            <SocialLink to="https://conscience.vc/"/>
            <SocialLink to="https://www.linkedin.com/company/conscience-vc" icon="linkedin" />
          </div>
        </div>

        <div className="w-full md:w-2/3 md:ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          In one word: founders.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I love working with founders -- they are the most ambitious people on the planet, and their work is incredibly underrated. Founders are solving the world’s toughest problems, driving the economy, creating new jobs, and continuously challenging the status quo to improve our way of life. Early in my career I fell in love with startups, and saw private investing as the best way to drive impact and support entrepreneurs in the innovation ecosystem.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I see my work as the combination of being a super-headhunter (you’re effectively “hiring” who you’d want to see running a company, voted for by your investment), a lifelong student (you never stop learning as an investor), and a customer service role (your job is to serve your founders and LPs, aka your “customers”) wrapped into one, supported by a business model that is much more scalable than a consulting practice (as an investor, you get to work with several founders concurrently).
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          It’s hard to pick just one, but the strength of the founder(s).
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5 mb-5">
          The intersection I’m currently pioneering - the convergence of consumer and science.
          </p>
          

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            BEYOND ECONOMIC RETURN, WHAT KIND OF IMPACT DO YOU HOPE TO MAKE WITH YOUR PORTFOLIO?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Not to sound cliche, as I mean this quite sincerely - expanding and enabling access to technology to better lives, drive environmental and social impact, and create new opportunities for all groups. The portfolio aligns well with these goals. In fact, the word “Conscience” is also fun word play for “conscious”, underlining that beyond seeking an economic return with our investment, we emphasize investing in an ethical and socially responsible way. To this end, over 50% of the portfolio to date has female or minority founders, and the investments often touch upon the United Nations’ 17 Sustainable Development Goals.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          The primary challenge, or constraint, at this stage, is around processing power as a solo-GP. In fund 2, I anticipate this problem manifesting as difficulty finding A+ investment talent that can thoughtfully diligence opportunities in this intersection. There really is a gap of investors able to underwrite consumer-science companies. There are many opportunities that I am fielding on a daily basis -- incredible investors that can navigate the wide landscape and quickly come to decisions are rare. I am constantly on the lookout for this talent.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          The strength of the founders and founding team is the most critical ingredient for success at the early stages. I find myself spending more time underwriting the founders’ psychology, and their relevant experiences, leadership abilities, and intrinsic motivations in diligence. Historically, I’ve prioritized and vetted technical defensibility and market, which are of course important too.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          I love podcasts - I often bounce between many investor and technology centric shows on my morning walks. Other than that, I absorb pertinent information from regularly meeting with other GPs and reading their content.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Writing poetry (I’ve created a mini book) and content (featured on my <a rel="noreferrer" className="text-blue-600 underline" href="https://arianathacker.com/" target="_blank">blog</a> and <a rel="noreferrer" className="text-blue-600 underline" href="https://www.linkedin.com/in/arianadthacker/" target="_blank">LinkedIn</a>).
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Disciplined Entrepreneurship by Bill Aulet is one of the most underrated books for entrepreneurs. I strongly recommend it.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={10} />
          <p className="font-lato antialiased tracking-wide text-black mt-5">
          Hmm, it’s difficult to assign a number as this really depends on where you operate (sector, stage, geography, and offering). For early-stage, particularly pre-seed venture capital, generally I am bullish. Where I am operating specifically in the ecosystem, a 10.
          </p>
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
