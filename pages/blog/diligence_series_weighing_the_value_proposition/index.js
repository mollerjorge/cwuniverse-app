import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-16">
      The first due diligence questions you will likely ask about any business are “what is it?”, “what does it do?”, “why does it exist?”, and, maybe, “who cares?” And it’s not difficult to see why. Our private investments represent a vote of confidence or support toward a future which contains the rewards of a venture’s success, whether those rewards be monetary gain, intrinsic value, impact-oriented, or some other inspiring tailwind. We, as investors, initially embark on due diligence with a core contemplation: “would I like to be a part of this journey?” In order to answer this question, we first seek to intimately understand the “what” and the “why” of the pursuit. 
      </p>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Introducing the Value Proposition
      </h3>

      <p className="mb-10">
      Value proposition analysis is intended to analyze the core nature of the venture to gauge justification for the business pursuit. From an investor perspective, the key interest here is clearly understanding what's being solved, why it is or is not important to solve, why the proposed product is the right solution, and perhaps why anyone should care. At a minimum, the reader should come away with a clear analysis of the following segments.
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence_series_weighing_the_value_proposition/white-frame.jpeg"
          alt="White frame"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Step 1: Framing of the Problem / Gap Opportunity
      </h3>

      <p className="mb-5">
      <b>Core Contemplations:</b>
      </p>

      <ul className="list-disc pl-5">
        <li>
        <b>What</b> is the problem solved or opportunity addressed? 
        </li>
        <li>
        <b>How</b> severe of a problem exists / significant of an opportunity exists? (here you may explore quantified metrics such as population impacted)
        </li>
        <li>
        <b>What</b> gap exists in the market and why is it important to satisfy this gap?
        </li>
      </ul>

      <p className="mb-10">
      Independent research sources should be used to validate the framing of the problem or gap opportunity. At times sources may be provided by the founder. It is important to validate founder-provided claims of the problem's magnitude as opposed to blindly accepting their figures. The goal here is to come away with clear answers to these questions which legitimize that some substantial problem or gap exists to be addressed. For example, perhaps a healthcare worker shortage crisis is detailed which limits the ability of providers to provide sufficient care, and the problem goes further to identify a root cause from staffing scheduling inefficiencies. Once the problem is framed, the stage will be set for the following contemplation: exploring the nature of the pursuit that tackles these challenges.
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence_series_weighing_the_value_proposition/circular-light.jpeg"
          alt="Hand holding circular light on the dark"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Step 2: Define Proposed Solution / Basis of Venture
      </h3>

      <p className="mb-5">
      <b>Core Contemplations:</b>
      </p>

      <ul className="list-disc pl-5">
        <li>
        <b>What</b> is the solution / pursuit?
        </li>
        <li>
        <b>What</b> unique features or approaches help to define the value proposition?
        </li>
        <li>
        <b>How</b> does / will it work? How will success be measured?
        </li>
      </ul>

      <p className="mb-10">
      Explaining the solution is not the same as defining a business model, which explores the pricing structure and details regarding revenue channels. The objective here is instead to explain the value proposition in reference to its ability to satisfy or address the proposed problem(s) or market gap(s). For example, a company's mobile app pursuit supporting the staffing scheduling of healthcare workers might explain their value proposition as follows: i) enabling healthcare providers to access a broad workforce and ii) helping healthcare workers to manage work schedules, all via a mobile staffing application which ultimately can help to address the healthcare worker shortage crisis previously explored in Step 1.
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/diligence_series_weighing_the_value_proposition/spinning-top.jpeg"
          alt="Slver spinning top"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-10 font-semibold">
      Step 3: Assess Relevance and Attractiveness of Opportunity-Solution Fit
      </h3>

      <p className="mb-5">
      <b>Core Contemplations:</b>
      </p>

      <ul className="list-disc pl-5">
        <li>
        <b>Why</b> is the proposed solution the right solution? 
        </li>
        <li>
        <b>Why</b> is the problem worth or not worth solving?
        </li>
        <li>
        <b>Why</b> is the opportunity worth the venture?
        </li>
      </ul>

      <p className="mb-10">
      If Steps 1 & 2 focus on definitions, Step 3 is focused upon analysis, which ultimately will drive the weighing of the entire value proposition as “worthwhile” or “unattractive”. Does the venture reach an attractive population, and what is the status quo for the market of those affected by the problem or benefiting from the opportunity? Is the timing right and compelling? Could you clearly explain the problem and proposed solution to someone else, and then objectively judge and argue the merits? Practicing these explorations will bring you closer to your own conclusions about whether this investment opportunity is a right fit for you. 
      </p>
      <p className="mb-16">
      Ultimately, these contemplations can be linked to how passionate you will or wouldn’t be about establishing a relationship with this company, and whether you believe it should exist – key facets which may lend clues to your level of engagement and the financial opportunity at hand. Having explored the contemplations around “what is it”, next week we’ll take a look into the next critical factor: “who's behind it?”
      </p> 

    </PostLayout>
  )
}

export default Post
