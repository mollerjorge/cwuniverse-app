import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      Unfortunately, we are currently experiencing a global economic recession. COVID-19 has taken a huge toll on businesses and economics around the world and most countries are struggling with rising unemployment, business bankruptcy and a significant reduction in aggregate demand.
      </p>
      <p className="mb-10">
      A recession is a period of downturn and decline in a country’s economic activity. When this happens, small businesses and startups usually take a big hit and face some challenges that can be hard to overcome such as accessing sources of external capital.
      </p>
      <p className="mb-10">
      Usually, venture capital (VC) funds raise money frequently. However, during a recession, high risk funds become less attractive to investors as they commonly opt for more conservative investment opportunities. If VCs have a harder time accessing capital, less money is available for them to invest in startups and cost of capital increases.
      </p>
      <p className="mb-10">
      As a startup founder, it is important you take this into consideration when managing cash. Although investment rounds are a great way to support growth and scale operations it is advisable not to rely too much on them in order to reduce exposure. Here are some good tips to play it safe and stay away from trouble:
      </p>
      <ul className="list-disc pl-5 mt-5 mb-10">
        <li>
        Raise and hold on to as much capital as possible.
        </li>
        <li>
        Spend more carefully and set priorities.
        </li>
        <li>
        Monitor budgets more frequently and adjust accordingly.
        </li>
        <li>
        Make yourself indispensable to customers and partners.
        </li>
        <li>
        Consider diversifying revenue streams.
        </li>
        <li>
        Lock-in long-term customer contracts.
        </li>
        <li>
        Evaluate alternative funding options.
        </li>
      </ul>
      <p className="mb-10">
      Having said that, a recession doesn’t necessarily mean your startup can’t grow. The real factors that determine whether a startup will succeed, or fail are heavily based on their founding team and their ability to solve problems. Yet, recession is also a good opportunity to leapfrog the competition and improve. During strong economies, companies barely have the time to assess operations and focus on product development so this might be a good time to do so.
      </p>
      <p className="mb-16">
      Bottom line, even though recessions create a harsh economic environment for all kinds of businesses, there are ways to mitigate financial risk and survive, or in some cases even thrive, during these difficult times.
      </p>

    </PostLayout>
  )
}

export default Post
