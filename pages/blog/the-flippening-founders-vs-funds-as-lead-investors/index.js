import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
        Is the age of institutional venture capital dwindling away? There might be a case to make as
        access to private capital expands across the fat tail of the private investment market among
        family offices and angels. Take a recent deal,{' '}
        <a
          rel="noreferrer"
          className="text-blue-600 underline"
          target="_blank"
          href="https://techcrunch.com/2021/04/15/altman-brothers-lead-b2b-payment-startup-routables-30m-series-b/"
        >
          B2B payment startup Routable’s $30MM Series B was easily filled without the support of VC
          firms{' '}
        </a>
        . Instead, co-founders Tom Harel and Omri Mor raised from a handful of high-profile angels,
        featuring brothers Sam Altman (CEO OpenAI, former president Y Combinator) and JackAltman
        (CEO of Lattice) as leads of the round. Other participants included Instacart co-founder Max
        Mullen, Airbnb co-founder Joe Gebbia, Box co-founder and CEO Aaron Leevie, Salesforce
        founder and CEO Marc Benioff, DoorDash’s Gokul Rajaram, etc.
      </p>

      <p className="mb-5">
        When asked about the rationale to partner with founders, Mor said the decision was
        intentional for Routable to benefit from their “deep enterprise and high-growth experience”
        leveraged from their leadership experience with prominent tech companies. If the networks,
        experience, and capital opportunities gained from partnering with VC funds continue to
        become more readily accessible elsewhere through a growing pool of successful founder
        investors, it is possible that Routable’s path will soon no longer stand among a minority.
      </p>

      <div className="p-6 py-0">
        <img
          className="w-full"
          src="/images/people-sunset.jpg"
          alt="pyramid"
          width={611}
          height={407}
        />
      </div>

      <p className="mb-10">
        Deals such as Routable’s amplify trends we’ve seen emerging over the past few years with the
        rise of solo capitalist investors representing a new investor class. The venture capital
        blog{' '}
        <a
          rel="noreferrer"
          className="text-blue-600 underline"
          target="_blank"
          href="https://nbt.substack.com/p/the-rise-of-the-solo-capitalists"
        >
          {' '}
          Next Big Thing published an article last July highlighting the competitive allure of
          financings led by individuals{' '}
        </a>
        , presenting new threats to traditional venture capital firms. A solo capitalist is the sole
        general partner of their funds, is the only member of the investment team, represents the
        brand of the fund through their brand as a prominent individual, and is competing to lead
        Seed, Series A, and later stage rounds with larger checks than angels or super angels.
        Arguments in favor of solo capitalists highlight their ability to make faster decisions than
        traditional venture funds, ease of founder-investor interfacing with a single individual,
        flexibility on ownership and board seat structures, and, perhaps most importantly, founders
        are more often now picking individual partners that they want to work with in a financing
        round, as opposed to a firm. Routable’s recent deal suggests the trend continues to show
        strength today.
      </p>

      <p className="mb-10">
        At{' '}
        <a
          rel="noreferrer"
          className="text-blue-600 underline"
          target="_blank"
          href="https://www.clockwork.app/"
        >
          {' '}
          Clockwork
        </a>
        , we’re building financial technology to further align entrepreneur-investor interests by
        making transparent collaboration easy. We believe that stories like Routable will become
        increasingly common as founders look to the knowledge capital of other successful founders
        to be as critically necessary as financial capital to build pathways toward success.{' '}
        <a
          rel="noreferrer"
          className="text-blue-600 underline"
          target="_blank"
          href="https://cwuniverse.app/sign-in"
        >
          Clockwork Universe
        </a>{' '}
        is helping support frictionless collaboration among these parties, fostering better
        communication, organization, automation, and transparency to ensure that administration is
        no longer stifling innovation.
      </p>

      <p>
        If you are a founder looking to improve your investor reporting for free, or an investor
        eager to gain a better handle on your managing and monitoring your private investments,
        reach out to us and let us show you how{' '}
        <a
          rel="noreferrer"
          className="text-blue-600 underline"
          target="_blank"
          href="https://cwuniverse.app/sign-in"
        >
          Clockwork Universe
        </a>{' '}
        is helping to redesign founder-investor dynamics to the benefit of the entire
        entrepreneurial ecosystem.
      </p>

      <div className="p-6 py-0">
        <img
          className="w-full m-0"
          src="/images/space.jpg"
          alt="pyramid"
          width={611}
          height={407}
        />
      </div>
    </PostLayout>
  )
}

export default Post
