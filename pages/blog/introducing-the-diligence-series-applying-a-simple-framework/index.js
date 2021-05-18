import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      When analyzing a new private investment opportunity, you may ask yourself “where do I begin?” While gut feeling, personal interests, pre-existing relationships, and capital availability are all important factors, it is best practice to honor a standard, objective approach to your assessment framework which adds clarity to the benefits, risks, and red flags of any opportunity crossing your plate. This article marks the beginning of a multi-post series on due diligence.
      </p>
      <p className="mb-10">
      We begin by taking an elevated look at a simple and effective framework you can apply to keep your bias in check and to break down most venture investment opportunities into more easily digestible indicators. Future posts will spotlight select sections from the list below to explore deeper strategies to evaluate these facets of a business. 
      </p>
      <p className="mb-10">
      Although the audience focus for these posts is primarily tailored toward the private investor, founders may gain keen insights on how to better prepare themselves for due diligence by exploring the investor lens in this process.
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/introducing-the-diligence-series-applying-a-simple-framework/satellite.jpeg"
          alt="Satellite and view of the earth"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-5 font-semibold">
      Simple Framework at a Glance
      </h3>

      <p className="mb-10">
      The following building blocks offer a straightforward approach to analyzing a new private investment opportunity:
      </p>

      <ul className="list-disc pl-5 mt-5">
        <li>
        <b>Value Proposition:</b> What is the problem and/or opportunity identified by the company, and is it worthwhile to address?
        </li>
        <li>
        <b>Team:</b> Is this an attractive, appropriate, and capable team for the venture?
        </li>
        <li>
        <b>Market Context:</b> What are the market conditions faced by the company; are they promising or threatening?
        </li>
        <li>
        <b>Business Model:</b> Is the proposed business model sustainable and would it be expected to perform well as structured? If applicable, do past milestones and performance lend confidence to future success? How scalable is the business model as proposed?
        </li>
        <li>
        <b>Financial Analysis:</b> What do materials reflect about unit economics, breakeven, profitability, and other key metrics? Does past performance substantiate projected claims, if applicable? 
        </li>
        <li>
        <b>Exit and Valuation:</b> Is there a reasonable opportunity for a liquidity event to occur which will generate returns on the investment, and is the price offered to the investor enticing?
        </li>
        <li>
        <b>Investment Opportunity:</b> What are the specific details of current and prior fundraising, capital risks / opportunities, and equity holdings? How compelling is the overall opportunity, weighing the price versus all factors assessed throughout diligence?
        </li>
      </ul>

      <p className="mb-10">
      Applying these analyses individually and then bundling the key conclusions together to provide a holistic impression helps an investor to see the forest through the trees. The following sections represent other sample assessments that can supplement a core framework as detailed above. Apply occasionally as desired, and know that other factors can always be included.
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/introducing-the-diligence-series-applying-a-simple-framework/sunny-forest.jpeg"
          alt="View of a sunny forest"
          width={611}
          height={407}
        />
      </div>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-5 font-semibold">
      Representation Assessments
      </h3>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        <b>Factual Verification:</b> Is the company presenting information regarding the business, team member commitments, financial performance, market opportunity, and so on with factual accuracy?
        </li>
        <li>
        <b>Credibility:</b> Do the company and its founder(s) demonstrate credibility and trustworthiness? Are there articles or sources available on the internet which demonstrate disparaging press associated with the company, its founder(s), or their prior business ventures?
        </li>
      </ul>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-5 font-semibold">
      Optional Assessments
      </h3>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        <b>Product / Technology:</b> What technology is developed / under development that is critical to the success of the business? Does IP exist if applicable / relevant? What is the quality of the technical stack and those who are responsible for building and maintaining the product?
        </li>
        <li>
        <b>Social Impact:</b> How committed is the company to delivering social impact, what is the likelihood of achieving said impact, and how are they measuring the impact they create?
        </li>
      </ul>

    </PostLayout>
  )
}

export default Post
