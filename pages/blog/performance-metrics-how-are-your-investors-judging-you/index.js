import React from 'react'
import PostLayout from 'components/PostLayout'
import Image from 'next/image'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
        Established or nascent, public or private, a fundamental truism to businesses is that they
        require capital (in some form) to grow. Especially in the early stages of a company’s
        lifecycle, choosing investment partners can be a critical juncture in the ultimate success
        or failure of the business. Beyond the money, these partners can support as advisors,
        subject matter experts, networkers, and in the best cases, ardent advocates for the people
        and missions they are funding. However, putting aside the budding world of impact investing
        where investor returns are also judged by more subjective measures, investors invest in
        opportunities that they believe have a strong likelihood of generating attractive economic
        returns.
      </p>
      <p className="mb-10">
        As a founder, it can be intimidating dealing with the world of early-stage financing for the
        first time (or second, or third… does it ever get easier?). While it is normal to have a
        myopic focus on executing your own view of success, it is not always clear exactly what
        existing or prospective investors are looking for and how to best reward them for their
        belief and (capital) support. Here we attempt to demystify the investor-founder divide by
        looking at the type of return-oriented performance metrics that investors tend to focus on./
      </p>
      <p className="mb-10">
        First, the good news. You have some time! In most circumstances, early-stage investors
        expect that they will not realize any meaningful returns on their money for five to ten
        years. They are in it for the (relatively) long haul, expecting that there will be some
        bumps and bruises along the way to fame and fortune. Unlike public stock exchanges, once
        money is invested in a private company it is much more difficult to get it back. There are
        several common ways investors can realize returns.
      </p>

      <ul className="list-disc pl-5 mt-5">
        <li>
          <b>Exit:</b> This is the most common way for an investor to realize a gain on their
          investment. An exit occurs when all or a sizable portion of the company is sold to or
          acquired by a financial or strategic buyer. Financial buyers like VCs or private equity
          funds are considered less desirable than strategic buyers, who can often pay higher prices
          for a company due to some strategic or synergistic benefit your company can provide to
          their existing business, or vice versa.
        </li>
        <li>
          <b>IPO:</b> An Initial Public Offering (IPO) was long considered the holy grail but has
          become less attractive lately as successful private companies increasingly choose to
          remain so until later in their life cycle. During an IPO, all or a portion of the existing
          cap table sells their shares to an investment bank who in turn sells them to investors to
          be traded on a public exchange. IPOs are exceedingly rare.
        </li>
        <li>
          <b>Secondary Sale:</b> The process of finding another interested party and directly
          transferring one’s ownership to them at an agreed upon price. This is rare practice for a
          singular investor to engage in and can be prohibited or restricted by transaction
          documents.
        </li>
        <li>
          <b>Liquidation:</b> When a business fails, liquidation of a company’s assets serves as the
          last resort. Especially as companies operate with less and less hard assets, this will
          often leave very little to be distributed to investors. The liquidation schedule typically
          follows a “waterfall” priority list that prioritizes preferred note holders and creditors,
          leaving little left for the founding team and equity holders. While this scenario is
          unfavorable to all involved, it is not entirely unexpected from an investor’s perspective.
          Startups are inherently a risky business, and the 80/20 adage for VCs provides that 80% of
          returns will come from only 20% of their portfolio.
        </li>
      </ul>

      <div className="px-32 mt-20">
        <Image
          src="/images/high-five.jpg"
          alt="high five"
          layout="responsive"
          width={611}
          height={407}
        />
      </div>
      <h3 className="text-xl uppercase tracking-wide font-lato antialiased mt-10 mb-5">
        RETURN-ORIENTED METRICS
      </h3>
      <p className="mb-10">
        While return-oriented metrics vary in importance to any given investor based on the type of
        investor, life-cycle stage of the company, and individual investor preferences, they all
        focus on two fundamental questions; how much will I get in return for my investment and when
        will I get it? When looking at their financial performance, investors tend to boil it all
        down to four relatively simple metrics: Internal Rate of Return (IRR), Distributed to
        Paid-In Capital (DPI), Residual Value to Paid-In Capital (RVPI), and Multiple on Invested
        Capital (MOIC).
      </p>

      <ul className="list-disc pl-5">
        <li>
          <b>IRR:</b> Along with MOIC, IRR is the most common return metric applied by investors to
          measure the success of their individual investments or of their portfolio. It is the
          annually compounded rate of return from when they first invest to when they get their
          money back. All else equal, the longer it takes an investor to get the same amount of
          money back, the lower the IRR. Early-stage investors expect to be rewarded handsomely for
          their risky bet and target an annualized IRR anywhere from 20%-50%.
        </li>
        <li>
          <b>DPI:</b> A subcomponent of MOIC, DPI is the ratio of the capital distributed (realized
          gains) back to investors relative to the aggregate amount of their investment. This ratio
          is often expected to be zero or extremely low by the investor until the very end of the
          investment life cycle and is expressed in the following format: 0.50x.
        </li>
        <li>
          <b>RVPI:</b> A subcomponent of MOIC, RVPI is the ratio of the remaining value of their
          current investment (unrealized gains) relative to the aggregate amount of their
          investment. This ratio begins at one and tends to grow over the investment life cycle
          until dropping to zero once their investment is realized and is expressed in the following
          format: 1.00x.
        </li>
        <li>
          <b>MOIC:</b> Widely adopted for its simplicity, MOIC is just the ratio of an investment’s
          total realized and unrealized value to the aggregate amount of the original investment.
          Another way to think about it, MOIC is the sum of DPI and RVPI at any given time. In
          contrast to IRR, MOIC is a time-neutral measure of returns. It is expressed in the
          following format: 4.00x.
        </li>
      </ul>

      <p className="my-10">
        No one metric singlehandedly defines the success or failure of an investment from an
        investor perspective but will be viewed comprehensively as part of the bigger picture. That
        being said, all of these metrics really just boil down into a convoluted way of saying
        investors desire greater returns and they want them faster.
      </p>
    </PostLayout>
  )
}

export default Post
