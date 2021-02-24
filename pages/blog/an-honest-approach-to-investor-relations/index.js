import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
        As a founder, you have a full plate when it comes to operating and growing your business. If
        you’ve raised capital from investors to support your company, congratulations! Fundraising
        is no doubt a challenging process, and securing any investment is an achievement worth
        celebrating. Now that you’ve landed some funding, you may be eager to focus all of your
        attention on putting those resources to good use and give investor relations a temporary
        backseat, especially if your next round is a long way off. However, if you aren’t thinking
        about how to maximize the value of your investor relationships beyond the transaction, you
        may be missing out on some significant value.
      </p>

      <h2 className="text-lg font-bold tracking-widest antialiased mt-10 mb-10 font-raleway">
        MORE COLLABORATIVE TIMES
      </h2>

      <p className="mb-5">
        The times of the “set it and forget it” transaction mentality are fading away, as more
        private investors attempt to bring a collaborative, entrepreneurial spirit to their approach
        with the founders they back. This trend makes sense given how many successful entrepreneurs
        dedicate portions of their exit wealth to private investing (in a variety of forms). By
        keeping investor relations in focus even when not actively fundraising, founders can unlock
        meaningful collaboration to further promote the success of their business.
      </p>

      <div className="p-10 my-20">
        <img src="/images/hands-on-notebook.jpg" alt="pyramid" width={611} height={407} />
      </div>

      <p className="mb-10">
        In some scenarios, investors can act as an extension of the founder’s team, bringing not
        only capital, but also expertise and networks that can be put to work on behalf of the
        company. An investor may bring knowledge of your specific market, or valuable managerial and
        operational experience. Both founders and investors are incentivized to want to see the
        business succeed, and investors are often very willing to contribute more than just their
        capital, especially as private investing is often regarded as a passion pursuit for many
        investors. Ultimately, if you can build a base of investors with relevant backgrounds,
        you’ll have even more collective knowledge to draw from when formulating strategies and
        navigating obstacles (and of course raising follow-on funding).
      </p>

      <h2 className="text-lg font-bold tracking-widest antialiased mt-10 mb-5 font-raleway">
        THE IMPORTANCE OF TRANSPARENCY
      </h2>

      <p className="mb-10">
        In an age where so much emphasis is placed on the importance of privacy, we wanted to make
        it a point to discuss how transparency can actually be one of your greatest allies.
        Transparency is key to gaining the most out of your investor relationships, as investors can
        be most helpful with advance notice of company developments and news, particularly if the
        news is bad.
      </p>

      <h2 className="text-lg font-bold tracking-widest antialiased mt-10 mb-10 font-raleway">
        WHEN CHALLENGES ARE OPENLY ADDRESSED, FOUNDERS MAXIMIZE THE POTENTIAL IMPACT OF THEIR
        INVESTOR BASE.
      </h2>

      <p className="mb-10">
        While it may be tempting to craft only the most optimistic narrative for investors, honest
        communication about the company’s status and needs will be more beneficial in the long-run
        as opposed to a “fake it ‘til you make it” mentality. Any negative news will land more
        softly if well-telegraphed ahead of time, and any investor would prefer to be in a position
        to help proactively navigate the business through turbulent times, rather than be told the
        business has run out of money or disaster has struck with no warning. Investors are well
        aware of the risks inherent to private investing (especially early stage), and they will
        appreciate both your candor and the opportunity to help if they can see the cards on the
        table right beside you.
      </p>

      <div className="p-10 my-20">
        <img src="/images/man-woman.jpg" alt="pyramid" width={611} height={407} />
      </div>

      <h2 className="text-lg font-bold tracking-widest antialiased mt-10 mb-10 font-raleway">
        INVESTORS HOLD KEYS, NOT JUST CHECKS
      </h2>

      <p className="mb-10">
        Investors are door-openers with network introductions, but only if they know which doors
        could be valuable and appropriate to open. Your investors will often be connected with other
        investors and communities, and can be helpful in cultivating prospects for future capital
        raises. Investors may also be able to contribute to business development efforts, connecting
        you to potential partners or customers. As you look to expand your team, investors can refer
        strong candidates for open positions, helping save time and energy in the discovery and
        vetting process. Founders can easily expand their reach by making these simple asks known as
        needs arise.
      </p>

      <h2 className="text-lg font-bold tracking-widest antialiased mt-10 mb-10 font-raleway">
        PLANTING SEEDS FOR VALUABLE RELATIONSHIPS
      </h2>

      <p className="mb-10">
        Even if not in the immediate term, you will be in a better position to secure any future
        fundraising if existing investors are consistently kept in the loop and feel positive about
        the relationship. Founders who communicate openly have a greater chance to secure follow-on
        capital if these relationships are well-nurtured, and to receive better warm introductions
        toward the same end. Further, when investors receive information on an ongoing basis, you
        may also find shortened diligence processes and timelines for investment decisions. It will
        be easier to bring investors up to speed if you’ve been attentive to investor reporting
        leading up to a round, and the formal opening of the round should not come at a surprise or
        raise any skeptical eyebrows.
      </p>

      <div className="p-10 my-20">
        <img src="/images/seeds.jpg" alt="pyramid" width={611} height={407} />
      </div>

      <p className="mb-10">
        Lastly, good communication habits will improve investors’ impressions of a founder, as
        investors report more favorable perceptions of founders they view as being honest,
        transparent, and responsive.
      </p>

      <blockquote className="flex flex-col border-l-4 border-blue pl-10 justify-center my-16">
        <p className="mb-5">
          “There seems to be a correlation between quality and frequency of updates and the goodness
          of the company and founders.”
        </p>
        <p className="">– Aaron Harris, Partner, Y Combinator</p>
      </blockquote>

      <p className="mb-10">
        In summary, investor communications can significantly enhance the reputations of both
        founders and the company itself. Even today, a surprisingly few entrepreneurs provide
        consistent reporting to their investors, so establishing an investor communications strategy
        is a simple way to stand out as a founder. In the context of opaque private markets where
        word-of-mouth drives a great deal of investment activity, you will no doubt benefit from
        establishing yourself as trustworthy and reliable.
      </p>
    </PostLayout>
  )
}

export default Post
