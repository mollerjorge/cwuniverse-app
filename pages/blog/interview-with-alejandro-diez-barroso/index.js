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
              src="/images/alejandro.jpg"
              alt="alejandro"
              style={{ margin: '0', width: 'auto', height: '200px' }}
              className="m-0 rounded-md"
            />
          </div>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Name</p>
          <p className="antialiased">Alejandro Diez Barroso</p>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Fund / Group
          </p>
          <b className="antialiased">DILA Capital</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Founded</p>
          <b className="antialiased">2013</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Location</p>
          <b className="antialiased">Mexico City</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Number of portfolio companies
          </p>
          <b className="antialiased">42 investments across 3 funds</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">
            Focus Areas
          </p>
          <b className="antialiased">Latin America, US Hispanic</b>

          <p className="uppercase mt-5 font-raleway tracking-widest font-light text-sm">Stage(s)</p>
          <b className="antialiased">Pre-Series A, Series A</b>

          <div className="flex mt-5">
            <SocialLink to="http://www.dilacapital.com/" />
            <SocialLink to="https://adiezbarroso.medium.com/" icon="medium" />
            <SocialLink
              to="https://www.linkedin.com/in/alejandro-diez-barroso-aa372416/?locale=es_ES"
              icon="linkedin"
            />
          </div>
        </div>

        <div className="w-2/3 ml-10">
          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            HOW AND WHY DID YOU GET STARTED IN PRIVATE INVESTING?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            I got into venture capital investing because I saw a need in the market. I think the
            simplest way to explain this is by telling you a little bit about my story. I started as
            an entrepreneur, I ran my company for four years and I went to look for capital, but
            there was no venture funding in the market back in 2004. There was not a single venture
            capital firm in Mexico, so I was obliged to sell my business and that’s when I realized
            that there was a great opportunity to invest in entrepreneurs in Latin America. So, as
            many entrepreneurs do, I started investing because I saw a problem and I was compelled
            to fix it.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE SINGLE MOST IMPORTANT THING YOU VALUE IN AN INVESTMENT OPPORTUNITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            If I had to choose just one value when analyzing investment opportunities it would have
            to be the Team. As time goes by, I am more and more convinced that venture capital
            investing, especially in early stages, is all about execution and teamwork. The team
            that you are investing in is the most important component when analyzing the capacity to
            execute.
          </p>

          <p>
            We, in DILA Capital, invest in people. We would much rather invest in the A team with
            the B business model than in the A business model with the B team. Ultimately we’re
            investing in people that are trying to make a difference so the thing I value most with
            our investments is the team behind the business. The team has to have passion, they have
            to have a purpose, and they have to be a diverse group. It is also really important to
            have a solid team with enough equity so they can maintain a sufficient equity percentage
            given the dilutions going forward.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE BEST INNOVATION THEMES THAT YOU SEE IN THE MARKET TODAY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            We are currently living in unprecedented times where digitalization and adoption of new
            technologies and e-commerce have hit a very important tipping point in Latin America.
            We, as venture capital investors, have been waiting for a moment like this for many
            years. We have seen tech companies in the US and Europe explode in the past decades, and
            while countries similar to Mexico such as India, China, Israel and Turkey have really
            taken off, our countries have been lagging. Even Brazil has grown exponentially in the
            past years, but other Latin American countries had not yet detonated despite having
            great internet and smart phone penetration. We are certain the time has come.
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
            In DILA, we look for companies that, rather than chasing short-term profits, are
            pursuing long-term value while generating well-being for people and the entire planet.
            Notice how I mentioned long term value first. It is extremely important to note that we
            do not look for companies that have an impact-first approach; we invest in companies
            that pursue profits for their shareholders. However, we do look for founders that have a
            longer-term perspective on their organization and its mission, looking beyond the next
            quarter or fiscal year to the next decade and generation.
          </p>

          <p>
            We’re investing in people who we believe will build companies capable of positively
            impacting millions, if not billions, of people, increasing the standard of living across
            the world. We are true believers that venture capital is one of the roads to the
            development of our developing countries.
          </p>

          <p>
            We are investing in the most innovative companies, that are employing thousands, that
            are bringing technology and better products and services to our economies.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE THE MOST PRESSING CHALLENGES OR PAIN POINTS IN MANAGING YOUR DAY-TO-DAY PRIVATE
            INVESTMENT ACTIVITY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Venture capital is still a new asset class in the Latam market. Our first investments
            have a 2013 vintage, so we have still not completed our investment cycles – this means
            our investment thesis is yet to be proven out. Many institutional investors want to see
            complete investment cycles before they commit capital to the asset class, so our biggest
            challenge today remains fundraising. All around the world pension funds, endowments,
            DFIs and foundations are the main providers of capital (Limited Partners) in VC funds,
            but in our countries these investors are still not investing in the asset class, and
            raising large VC fund remains a huge challenge. On the bright side, we are seeing more
            interest from these large buckets of capital and some have started invested, so while
            the challenge remains, the future looks bright.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT IS THE HARDEST INVESTMENT LESSON YOU’VE LEARNED AND/OR THE BIGGEST INVESTMENT
            MISTAKE YOU’VE MADE?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            We have learned a lot over these past 10 years. As pioneers in the space, we’ve
            definitely made a lot of mistakes and I can probably write an entire book on lessons
            learned, but I guess the message that I would give here is that all of these mistakes
            and errors have culminated in an ever-advancing understanding of our investment
            strategy. We are now implementing this knowledge into our new investment principles,
            which include standards around market sizing, desired founder equity stakes, requiring
            that founders be dedicating 100% of their time to the companies we are investing in,
            principles regarding our exit strategies, and so on.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            But another really tough lesson that we’ve learned is that we have limited capital and
            we, therefore, have limited opportunities to invest in. So we are definitely going to
            let go and say no to many terrific opportunities, and there are many great companies
            that we’re going to say no to that are going to be very very successful.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT ARE YOUR FAVORITE INDUSTRY INFORMATION SOURCES AND/OR SERVICES?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            I am subscribed to many newsletters and blogs, we are subscribed to Pitchbook, Preqin
            and other information sources.
          </p>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            However, our best sources are internal, we have alliances with the biggest tech
            companies around the world, we are part of AMEXCAP and LAVCA, and have a very solid
            relationship with our colleagues from Mexico, Latam and around the world.
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR FAVORITE NON-BUSINESS INTEREST OR HOBBY?
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            Running, Tennis, Meditation, Reading
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            PLEASE LEAVE US A BOOK RECOMMENDATION (BUSINESS OR OTHERWISE).
          </h3>
          <p className="font-lato antialiased tracking-wide text-black mt-5">
            The Hard Thing About Hard Things – Ben Horowitz
          </p>

          <h3 className="text-blue antialiased uppercase font-lato font-bold tracking-widest mt-10">
            WHAT’S YOUR TAKE ON THE PRIVATE MARKET OVERALL?
          </h3>
          <MarketMeter count={4} />
        </div>
      </div>
    </PostLayout>
  )
}

export default Interview
