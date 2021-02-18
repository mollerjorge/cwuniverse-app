import React from 'react'
import PostLayout from 'components/PostLayout'
import Image from 'next/image'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p>
        When sitting down to build your next investor update, consider beginning by identifying the
        thematic areas you plan to address with your audience. Distilling your update into smaller,
        topic-based segments will make for a more approachable letter with a narrative that sticks.
        Ideally the structure stays consistent over time. Settle on a template that fits your unique
        business and style, and keep with that template for each letter. As you build your update,
        remember that investors will value transparency and candid disclosure, even when the news
        you have to deliver is less favorable.
      </p>
      <p>
        In this article we’ve included some suggested sections, which may be relevant to you
        depending on the stage and type of your business. Try mixing and matching the sections
        below, and any others that are company-specific, to formulate an outline for your updates.
        Find a structure that flows well for your company, and you may find that constructing future
        updates comes together more easily and in less time with a template in place.
      </p>

      <h2 className="text-2xl mt-10" style={{ fontFamily: 'Raleway' }}>
        Foundational Sections
      </h2>

      <p className="italic mt-10">
        Several sections are considered to be cornerstones in your investor updates. These sections
        should be relevant for companies of a wide range of shapes and sizes, and are of critical
        interest to investors. Start with these sections, and then incorporate your specific
        sections as desired.
      </p>
      <div className="p-20">
        <Image
          src="/images/pyramid.jpg"
          alt="pyramid"
          layout="responsive"
          width={611}
          height={407}
        />
      </div>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm mb-6">
        Introduction
      </h3>
      <p>
        Your introduction welcomes your audience and explicitly conveys the high-level thesis of
        your update. That thesis might be a nod to recent momentum, or a theme painting happenings
        and plans across the company. The rest of the update will provide the supporting details,
        but investors should be able to gather an immediate sense of the main takeaway to come. This
        section can be read as an executive summary. If written masterfully, an introduction can
        secure reader attention for the coming content (and investor asks!). In the case of major
        events (which we saw plenty of in 2020), this section is also an opportunity to reference
        any macro events and how they may shape the future of your company.
      </p>
      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        Key asks
      </h3>
      <p>
        Key asks are your opportunity to spotlight the ways in which your investor base can add
        value. These can include candidate referrals for active job listings, requests for warm
        introductions to key partners that fit a certain profile, requests for introductions to
        other prospective investors, or simply solicitations for advice and support on any business
        challenges. Don’t be afraid to make requests – you never know what help your investors may
        be able to provide.
      </p>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        Core metrics
      </h3>
      <p>
        Core metrics will vary from company to company, but should generally reflect overall status
        and traction. Spend some time thinking about which metrics your team should track, and
        summarize a few key indicators that you can share over time with investors. Be consistent
        with metrics sharing so that investors can observe emerging trends and track progress.
      </p>
      <p style={{ margin: '30px 0' }}>
        At a minimum, for each reporting period we recommend including:{' '}
      </p>
      <ul className="list-disc pl-10">
        <li style={{ marginBottom: '5px' }}>Revenues</li>
        <li style={{ marginBottom: '5px' }}>Net Income (Loss)</li>
        <li style={{ marginBottom: '5px' }}>Cash Balance</li>
      </ul>
      <p style={{ margin: '30px 0' }}>
        Additional KPIs decided on a company-by-company basis, for example:
      </p>
      <ul className="list-disc pl-10">
        <li style={{ marginBottom: '5px' }}>Customer numbers</li>
        <li style={{ marginBottom: '5px' }}>Contract numbers</li>
        <li style={{ marginBottom: '5px' }}>Engagement numbers</li>
        <li style={{ marginBottom: '5px' }}>Other figures that demonstrate execution</li>
      </ul>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        Team
      </h3>
      <p>
        A team section can detail updates regarding the team’s evolution and composition. Be sure to
        mention team size, full time vs. part time commitments, hiring plans, announcements of
        key/strategic hires, critical job openings, and so on. Remember, investors are not only
        supporting what you’re building, but the people behind it.
      </p>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        FUNDRAISING / RUNWAY
      </h3>
      <p>
        You can expect investors to be particularly interested in the cash reserves of the company
        and future capital needs. Keep your investors up-to-date on your cash balance and the rate
        at which you are burning through it. This will help investors get an idea of your runway,
        aka how long the company can operate without needing more capital infusions. Announce any
        active or approaching fundraising rounds, as applicable, including detail of how the
        fundraising will advance business goals. Take this opportunity to articulate your
        fundraising rationale, as this can serve as a critical marketing platform to appeal to
        existing investors who may be considering the investment opportunity for themselves and
        others within their network.
      </p>

      <div>
        <h2 className="text-2xl mt-10 mb-5" style={{ fontFamily: 'Raleway' }}>
          Business-Specific Sections
        </h2>
        <p>
          <i>
            <span className="italic">
              The next series of sections may or may not be relevant to your specific business,
              depending on industry, stage, type, or other factors. Consider which are most
              applicable and include several.
            </span>
          </i>
        </p>
        <div className="p-20">
          <Image
            src="/images/snow.jpg"
            alt="pyramid"
            layout="responsive"
            width={611}
            height={407}
          />
        </div>
      </div>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        PRODUCT / R&D
      </h3>
      <p>
        Share details on key product advancements, including a few screenshots or photos to show
        features and progress. Talk about major milestones, and be honest about hurdles. Help your
        audience understand the evolution and development of your product. What’s working? What’s
        taking longer than expected? What should your audience be excited about that’s coming soon
        or that recently launched? How can they engage and provide feedback, if desired?
      </p>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        SALES & MARKETING
      </h3>
      <p>
        Share details on key product advancements, including a few screenshots or photos to show
        features and progress. Talk about major milestones, and be honest about hurdles. Help your
        audience understand the evolution and development of your product. What’s working? What’s
        taking longer than expected? What should your audience be excited about that’s coming soon
        or that recently launched? How can they engage and provide feedback, if desired?
      </p>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        FINANCIAL PERFORMANCE
      </h3>
      <p>
        If enough financial traction exists to demonstrate trending performance, this section can
        hold some merit with the inclusion of charts, tables, or other figures with high-level
        commentary. Else, high level financial figures such as “revenue” or “cash balance” can be
        presented more plainly in a foundational section like Core Metrics.
      </p>

      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        Customer success
      </h3>
      <p>
        As you build a customer base, this section can cover strategies at play in supporting
        positive customer experiences and retention. Include information here on churn and any
        noteworthy customer satisfaction initiatives.
      </p>
      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        PRESS & PR
      </h3>
      <p>
        If your company has received notable press attention, it can be helpful to include a list of
        highlights with links to articles. If your company website has a Press page, you can also
        refer investors there to discover more. If the volume of press mentions is significant
        enough, it may also make sense to share metrics relating to impressions.
      </p>
      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        CORPORATE / LEGAL
      </h3>
      <p>
        A space to announce any changes in corporate structure or status, such as an entity
        conversion or any restructuring events. You can also detail any necessary legal notices or
        other advisory which may carry particular tax or other implications for your investors.
      </p>
      <h3 className="font-lato font-bold tracking-widest uppercase antialiased text-sm my-6">
        OPERATIONS / SYSTEMS
      </h3>
      <p>
        In this section, explore updates regarding key systems and operational processes you are
        using. This might include the implementation of new technology or software, or the selection
        of a new manufacturing facility. Explain how these changes will impact the business.
      </p>
      <div className="p-20">
        <Image
          src="/images/white-board.jpg"
          alt="pyramid"
          layout="responsive"
          width={611}
          height={407}
        />
      </div>

      <p className="mb-10">
        Hopefully this overview has given you an idea of the building blocks available to you to get
        started on your own update. Your investors will acknowledge and appreciate the time and
        attention you commit toward these letters, and you will find dividends returned to your
        business in unforeseen ways to reward your efforts. If you would like some assistance with
        settling on the right update template for your business, or a second set of eyes on a draft
        letter, our team at Clockwork is happy to review it with you. Please reach out to us at
        contact@clockwork.app and let us know how we can help.
      </p>
    </PostLayout>
  )
}

export default Post
