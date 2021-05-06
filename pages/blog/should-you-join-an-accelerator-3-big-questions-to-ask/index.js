import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-16">
      The decision to join an accelerator can be a difficult one, especially for first-time founders who are new to the startup world. While these programs offer great opportunities, it’s important to make a considered decision before jumping into an agreement. Here are some key questions to help frame your decision.
      </p>
      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      1. Where are you in your founder journey?
      </h2>
      <p className="mb-16">
      Not all accelerator programs are oriented towards the same type of participant. Some are designed to help turn an idea into a product. Others can help with growing sales. Still others may coach you through your fundraising cycle. To understand which accelerator makes sense for you as a founder, you first need to match your needs with the program type. Looking through previous cohorts can help you ascertain the target audience for a given program. This is also something to ask about during the application process.
      </p>
      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      2. What resources do you need and how does that align with the resources this accelerator offers?
      </h2>
      <p className="mb-16">
      Each founder and startup is different. Some founders have extensive entrepreneurial experience, some have access to capital. One common scenario might be a founder with extensive technical expertise who has never run a business. Take a quick inventory of the resources available to you. Try to be as realistic as possible about your strengths and weaknesses. Then, think about how an accelerator might complement those. An accelerator may make sense for a founder looking to leverage networking opportunities, or compete in a pitch competition to get funding. If your main constraint as a founder is a lack of time, consider hiring a team instead.
      </p>
      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      3. What is the cost?
      </h2>
      <p className="mb-16">
      Cost structures can vary significantly across accelerators. Accelerators may either take equity in the company, or cash compensation (or both). Make sure you have a clear understanding of exactly what the cost will be (and the long-term implications). While it may seem simple to offer a percentage of equity to your accelerator today, avoiding any cash payments, that accelerator will be on your cap table in perpetuity. Make sure any equity holders are trustworthy partners that you want alongside you throughout your business journey.
      </p>
      <p className="mb-16">
      These are just a few of the many questions that a founder considering an accelerator program should ask. Remember to be proactive with research and questions- consider reaching out to other founders who have been through the same program. Get their feedback on what they found most valuable in the experience, as well as any criticisms they have. An accelerator program can make all the difference in setting you up for success as a founder. Choose the right one and you can give your business a huge leg-up (and relieve some pressure on yourself!).
      </p>
    </PostLayout>
  )
}

export default Post
