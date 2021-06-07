import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-16">
      If you’ve gathered a solid understanding of what exactly a particular business venture seeks to accomplish, the next questions that probably need addressing are “who’s building it?” and “who’s behind it?” Here, we embark on a journey to examine the legitimacy of the leaders seeking to bring their vision to fruition. Assessing team prowess is anything but straightforward, and one investor’s criteria will almost certainly differ from the next. Focal points will range from taking a look at personality-oriented factors like energy or charisma, passion, grit, and purpose to more concrete concepts like experience, technical know-how, industry connections, market expertise, skill set synergy, and many more factors.
      </p>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Assessing the Team at the Helm
      </h3>

      <p className="mb-10">
      Team assessments are intended to analyze the potential of those involved behind a particular pursuit to succeed at the venture. In other words, the attempt here is to gauge whether the team has a compelling mixture of people to solve the target problem and grow the business to a level where some financial return can be achieved. In many cases, team assessments can be the most important topic to explore as investors should be keenly interested in leadership ability to execute upon stated goals and vision. Also, most investors go further to say they care tremendously about personality because an investment itself constitutes establishing a relationship, and that it is important to build relationships that are fundamentally enjoyable. 
      </p>

      <p>
      Oftentimes, indicators will be explored. Founder track records of successful exits or traction are very helpful in evaluating execution ability. As important as it is to understand leaders on an individual basis, collective team dynamics and skill balance across the broader team can reveal further clues toward quality and favorability, not to mention more ambiguous measures such as the general “feel” of the group. 
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence-series-meeting-the-team/hiking.jpg"
          alt="Hiking on the mountains"
          width={611}
          height={407}
        />
      </div>

      <p>
      There is no one perfect team format, and as a result we’re better served here to 1) take a look at factors which clarify the team's alignment to successfully pursue the venture's objectives, 2) identify execution risks where present (e.g., "key person risk" or noticeable lack of key commitments), and 3) evaluate the depth and breadth of gaps (i.e., "hard" skill sets, subject matter expertise, advisory support). One could spend their entire life reading books on the bestseller lists which try to crack the code of the ingredients that make the best entrepreneurs, but sometimes it really can just come down to the plain and simple questions of “do I trust that these people will put their heart into this?”, “do I believe these people can bring returns on my investment?”, or “will I be satisfied having supported these people in their attempt regardless of the ultimate outcome?”
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence-series-meeting-the-team/spark.jpg"
          alt="A spark in the dark"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      A Moving Target: Criteria Evolves as the Business Ages
      </h3>

      <p>
      The earlier a company is in its life cycle, the less that factual verification of a business model and execution feasibility will be available to potential investors. At one extreme, less sophisticated angel investors tend to conduct relatively minimal due diligence, focusing primarily on idea feasibility, addressable market, and credentials of the founder. At this extreme in particular, researching the background, qualifications, and roles of each integral team member is essential to judging the potential success of the early-stage investment. Essentially, you are investing in the quality of people and their idea. For more established companies where tenured core executives have a proven ability to execute on the business model, previous experience becomes gradually less important. 
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence-series-meeting-the-team/writing.jpg"
          alt="Person drawing"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Core Contemplations:
      </h3>

      <p className="mb-5">
      To guide you through the contemplation of individual team members as well as the organization as a whole, consider the following questions:
      </p>

      <ul className="list-disc pl-5">
        <li>
        <b>Industry / Subject Matter Expertise:</b> Do Founders have expertise that you'd expect for the specific business (e.g., a fashion CEO with prior fashion or directly relevant product experience)? Do advisors or members of the oversight board possess relevant knowledge to complement the potential shortcomings of founders and senior executives? Is this an appropriate and capable team for the venture?
        </li>
        <li>
        <b>Functional Area Expertise:</b> Do Founders have positional experience that would be expected for the specific role within the business (e.g., CFO has accounting / corporate finance experience, designer has worked / studied as a designer and you can witness their work, etc.)? Does prior entrepreneurial experience exist on the core team?
        </li>
        <li>
        <b>Background +'s / –'s:</b> Other key points of mention (favorable or unfavorable) about career, biography or other background? Are there any notable gaps in functional roles?
        </li>
        <li>
        <b>Verification:</b> Are the biography materials shared by the company or provided by the individual truthful, accurate, and without any glaring omissions or issues that would make you question the integrity of the founders?
        </li>
        <li>
        <b>Commitment Level:</b> Are members largely committed full time and properly incentivized (how are they being compensated - cash, equity, other)? Is this accurately stated in company materials?
        </li>
        <li>
        <b>Press Exposure:</b> Any particularly impressive or disparaging social media / press presence that would seem noteworthy?
        </li>
      </ul>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence-series-meeting-the-team/dome.jpg"
          alt="Hole in the dome"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Possible Red Flags
      </h3>

      <p className="mb-10">
      It’s always important to keep an open mind toward hidden signals which may sour the entire impression of the opportunity. Here we compile a list of typical concerns you would be wise to keep an eye out for when evaluating a team:
      </p>

      <ul className="list-disc pl-5 mb-16">
        <li>
        <b>Malfeasance</b> by members of founding team in previous roles
        </li>
        <li>
        <b>Misrepresentation</b> of prior experience in company materials or personal statements from founders
        </li>
        <li>
        <b>Lack of financial alignment</b> between management and the company as a whole
        </li>
        <li>
        <b>Heavily diluted ownership</b> percentages among founders relative to key investors
        </li>
        <li>
        <b>Drastically unequal ownership</b> split among founders (there can be rationale for this such as one founder providing more startup capital or bringing more experience to the table, but the point here is that the situation should be evaluated to ensure proper motivation among all founders)
        </li>
        <li>
        <b>Lack of vesting periods</b> for ownership stakes offered to new hires
        </li>
        <li>
        <b>Excessive salary distributions</b> to early team members relative to seniority and experience
        </li>
        <li>
        <b>Repeated stagnation</b> of title or responsibility in previous roles
        </li>
      </ul>

    </PostLayout>
  )
}

export default Post
