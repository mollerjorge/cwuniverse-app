import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      Broadly speaking, when it comes to tracking sales or business development related metrics it makes sense to break them down into two summary groups: 1) activities and 2) results. Stated differently, it is important to track the things you can control, i.e., what you are doing, and the outcomes of the actions you are taking. As stoicism dictates, you can’t control whether you will win the tennis match, but you can control how much you practice, etc. So when it comes to sales, while it is certainly important to track wins and overall success, studying the input efforts toward those end results is critical to continually tightening the approach and improving the efficiency of the overall sales engine.
      </p>
      <div className="pl-6 pr-6">
        <img
          className="w-full"
          src="/images/rktkn-BZ9z9ZeUjbI-unsplash.jpeg"
          alt="pyramid"
          width={611}
          height={407}
        />
      </div>

      <p className="mb-16">
      Here are a few activity and results-oriented sales metrics to keep in mind. It is helpful to track these metrics on both an overall team and individual salesperson basis.
      </p>
      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Activities
      </h2>
      <p className="mb-10">
      Activities represent things you can control (typically by doing more), and might consider tracking. Customer relationship management (CRM) platforms serve as the gold standard for sales metrics tracking and general sanity management. Use these tools to capture:      
      </p>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        New Prospects Added
        </li>
        <li>
        # Cold Outreach / # Warm Outreach
        </li>
        <li>
        Emails Sent
        </li>
        <li>
        Social Media Interactions 
        </li>
        <li>
        Calls Made (in some alternate universe where cold calls still work)
        </li>
        <li>
        Scheduled Meetings 
        </li>
        <li>
        Demos or Sales Presentations 
        </li>
        <li>
        Proposals Sent
        </li>
        <li>
        Follow-up % (should be very close to 100%)
        </li>
      </ul>
      <p className="mb-10">
      To add further granularity, you can explore breakdowns of the above based on the sales channel.
      </p>

      <div className="pl-6 pr-6">
        <img
          className="w-full"
          src="/images/mikail-mcverry--yBvef_mAaQ-unsplash.jpeg"
          alt="pyramid"
          width={611}
          height={407}
        />
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Results or Pipeline
      </h2>
      <p className="mb-10">
      The following metrics represent trackable outcomes of the activities your sales team may be executing:
      </p>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Total Sales ($, #) by Month / Quarter (obviously)
        </li>
        <li>
        Open Opportunities by Month / Quarter
        </li>
        <li>
        Closed Opportunities by Month / Quarter
        </li>
        <li>
        Average Length of Sales Cycle
        </li>
        <li>
        Average Contract Value (ACV) 
        </li>
        <li>
        Weighted Value of Pipeline by Month / Quarter
        </li>
        <li>
        Win Rate (by lead source)
        </li>
        <li>
        Conversion Rate by Pipeline Stage
        </li>
        <li>
        Response Rate by Pipeline Stage (including opens, responses, engagements)
        </li>
        <li>
        Average Convos for Won / Lost
        </li>
      </ul>

    </PostLayout>
  )
}

export default Post
