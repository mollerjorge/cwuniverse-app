import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'
import { faCheck, faMinus, faPlus, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      As the Venture Capital (VC) ecosystem continues to experience strong growth globally, even despite the pandemic, it is important to call attention to a new promising player, LatAm.
      </p>
      
      <p className="mb-10">
      Latin America has historically played a secondary role in the VC ecosystem, as investors were risk averse and considered LatAm as high risk, with few mega startup wins to showcase. Luckily, this seems to be changing as developing countries such as Brazil, Mexico, Argentina, Colombia, and Chile are currently experiencing a positive momentum that is serving to foster trust in the region while nurturing the necessary talent for entrepreneurial ventures to scale.
      </p>

      <p className="mb-10">
      Latin America tells a positive population story. The region is home to more than 600 million people across 20 countries and has a combined GDP of $5.7 Trillion USD - the opportunity to invest in exceptional businesses in LatAm is large, as indicated by the success stories of the region's 16 startup unicorns (4 unicorns were minted so far in 2021 alone) and counting.
      </p>

      <p className="mb-16">
      The region’s favorable conditions and economic environment have prompted venture capital to take off as of late. Despite the pandemic, Latin American startups had a record number of VC deals in 2020 with startup valuations exceeding levels ever seen before.
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/venture-backed-in-latin-america-a-booming-ecosystem/Record_Deals.jpg"
          alt="Venture capital transactions in Latin America rose despite the pandemic"
          width={611}
          height={407}
        />
      </div>

      <p className="mb-10">
      Among the most successful unicorns venture capital has helped fuel as of late include NuBank, dLocal, Loft, Kavak, Bitso, and Clip. Brazil-based fintech Nubank is valued at $30 billion, Uruguayan payment provider dLocal is now worth $5 billion, Brazilian proptech Loft has a nearly $3 billion valuation and Clip became the third Mexican startup to reach the "unicorn" milestone in the past year alongside Kavak and Bitso.
      </p>

      <p className="mb-16">
      While venture investment in all of the region’s industries has increased over the last few years, fintech holds the top spot as the sector receiving the largest amount of investment dollars in Latin America, accounting for 40% of Venture Capital invested in 2020, followed by e-commerce, super apps, and proptech. Meanwhile, as a result of the pandemic, healthtech and edtech industries thrived as digital usage of remote learning, telemedicine, and associated services skyrocketed.
      </p>

      <div>
        <img
          className="pl-6 pr-6 pb-0"
          src="/images/venture-backed-in-latin-america-a-booming-ecosystem/VC_Top_Sectors.jpg"
          alt="Top Capital Invested - 2020 Top Sectors"
          width={611}
          height={407}
        />
      </div>

      <p className="italic mb-16">
      Source: LAVCA’s 2021 Review of Tech Investment in Latin America Report
      </p>

      <p className="mb-16">
      With all of this said, it is clear that the future of venture capital in LatAm is looking optimistic and attractive. Latin America has promising industries, population and growth prospects to come, and we are bullish that the region will continue to warrant international interest and investment.
      </p>

      
    </PostLayout>
  )
}

export default Post
