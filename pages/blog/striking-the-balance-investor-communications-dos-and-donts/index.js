import React from 'react'
import PostLayout from 'components/PostLayout'
import Image from 'next/image'
import usePost from 'utils/posts'

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

      <h2 className="text-2xl">Foundational Sections</h2>

      <p className="italic">
        Several sections are considered to be cornerstones in your investor updates. These sections
        should be relevant for companies of a wide range of shapes and sizes, and are of critical
        interest to investors. Start with these sections, and then incorporate your specific
        sections as desired.
      </p>

      <Image src="/images/pyramid.jpg" alt="pyramid" layout="responsive" width={611} height={407} />

      <h3>Introduction</h3>
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
      <h3>Key asks</h3>
      <p>
        Key asks are your opportunity to spotlight the ways in which your investor base can add
        value. These can include candidate referrals for active job listings, requests for warm
        introductions to key partners that fit a certain profile, requests for introductions to
        other prospective investors, or simply solicitations for advice and support on any business
        challenges. Don’t be afraid to make requests – you never know what help your investors may
        be able to provide.
      </p>
    </PostLayout>
  )
}

export default Post