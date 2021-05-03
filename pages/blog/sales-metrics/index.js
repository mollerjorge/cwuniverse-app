import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      Broadly speaking, when it comes to tracking sales or business development related metrics it makes sense to break it down into two summary groups, 1) activities and 2) results. Stated differently, it is important to track the things you can control, aka what you are doing, and the outcomes of the actions you are taking. As stoicism dictates, you can’t control whether you will win the tennis match, but you can control how much you practice, etc. etc. So when it comes to sales, while it is certainly important to track wins and overall success, studying what goes into those end results is critical to continually tighten the approach and improve the efficiency of the overall sales engine.
      </p>
      <p className="mb-16">
      Here are a few activity and results oriented sales metrics to keep in mind...let me know if I miss any. It is helpful to track these metrics on both an overall team and individual salesperson basis.
      </p>
      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Activities
      </h2>
      <p className="mb-10">
      Again these are things you can control (usually by doing more), and might consider tracking. CRM’s are of course the gold standard for sales metrics tracking and general sanity management.
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
        Follow-ups % (should be very close to 100%)
        </li>
        <li>
        Breakdown of the above based on sales channel
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Results or Pipeline
      </h2>
      <p className="mb-10">
      Here are the metrics that are the outcomes of the activities your sales team is executing.
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
        PConversion Rate by Pipeline Stage
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
