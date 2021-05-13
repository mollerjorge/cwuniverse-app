import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'
import { faCheck, faMinus, faPlus, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      Unlike many of the more complicated transaction types often associated with private investments, common equity is about as straightforward as it gets. The verysame type of instrument as the public stocks you trade (probably far too frequently)in your brokerage account, at its most fundamental level common equity simply represents ownership of a company.
      </p>
      <p className="mb-10">
      As an owner of the company, a common equity holder is entitled to a proportionate share of the profits that are generated each quarter. The catch is that common equity is subordinate to every other type of financing in the payment and liquidationhierarchy. Before the profits are paid out to common equity holders, the company first pays any costs of production, taxes, interest and principal due on debt financing, and any preferred equity dividends. But while these equity payments are unknown, they also have the unique advantage of being uncapped. Whereas the return profile to debtholders is bound by the agreed upon interest rate, common equity is entitled to everything else.
      </p>
      <p className="mb-10">
      When a company generates a quarterly profit, management teams have three options for what they can do with the excess capital:
      </p>

      <ul className="list-decimal pl-5 mt-5 mb-10">
        <li>
        Return the profits to equity holders in the form of dividends
        </li>
        <li>
        Use the profits to buy back some of the outstanding equity shares (this has the effect of raising share price roughly equal to that of a proportionate dividend payment but without subjecting shareholders to realized earnings)
        </li>
        <li>
        Invest the profits back into the company
        </li>      
      </ul>

      <p className="mb-10">
      While options 1 and 2 are typical among more established public companies, privateentities tend to be cashflow negative in the early to middle stages of their life cycle.Rather than pursuing additional dilutive financing, management will therefore typically exercise option 3 to help grow the business organically whenever possible. A general rule of thumb is thatmanagement should return capital to shareholders through one of the first two options only if there are no positive Net Present Value (NPV) projects available that would represent a better internal use of that capital.
      </p>
      <p className="mb-10">
      Businesses like grocery stores and utilities may be constrained in their profitable investment opportunities, which is why these types of mature businesses generally return the majority of profits to shareholders. Alternatively, startups and emerging technologies generally face the opposite problem and have too many profitable investment opportunities and not enough profits with which to fund them.
      </p>
      <p className="mb-16">
      When choosing to raise capital, equity provides some unique pros and cons relative to other funding sources for both the issuer and the investor.
      </p>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of Common Equity to Companies:
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
        Can be a less dilutive source of financing than SAFEs or Convertible Notes
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
        Aligns the interests of founders and investors
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
        Straightforward terms
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-16">
        Common equity holders have a subordinate claim on the assets of the company
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of Common Equity to Companies:
      </h2>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-10">
        Giving up financial ownership and influence over decision making
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-16">
        Requires increased diligence to properly price the shares
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of Common Equity to Investors:
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
        Aligns the interests of founders and investors
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
        Can provide an investor with input over the decision making of the company
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
        Straightforward terms
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-16">
        Unlimited upside
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of Common Equity to Investors:
      </h2>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-10">
        Limited recourse in the event of default or bankruptcy
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-10">
        Dividend payments are unlikely to be substantial early in a company’s life cycle
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-16">
        Subject to dilution from future financing
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Key Terms and Definitions
      </h2>

      <p className="mb-10">
      While common equity is a relatively standardized form of financing, the key terms that need to be agreed upon by founders and investors are as follows:
      </p>


      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Investment Amount: The cash amount which the investor agrees to immediately give to the company
        </li>
        <li>
        Investment Date: The date on which this transfer will occur
        </li>
        <li>
        Pre-Money Valuation: The enterprise value of the company as agreed upon bythe investor and the issuer, immediately prior to the infusion of capital
        </li>
        <li>
        Financing Amount: The aggregate amount of capital to be raised
        </li>
        <li>
        Post-Money Valuation: The enterprise value of the company immediately following the infusion of capital, equal to the pre-money valuation plus aggregate new financing
        </li>
        <li>
        Price Per Share (PPS): The agreed upon price at which the additional shares will be purchased
        </li>
        <li>
        Authorized Shares: The aggregate number of new shares authorized to be issued by the company in conjunction with the current financing
        </li>
        <li>
        Shares Issued: The aggregate number of new shares actually issued by the company in conjunction with the current financing
        </li>
        <li>
        Fully Diluted Shares Outstanding (FDSO): The aggregate number of shares outstanding at any given time, including all outstanding dilutive securities that have not yet been exercised and converted
        </li>
        <li>
        Preemptive Rights: Preemptive rights give an investor the legal right to participate in future financing rounds to retain proportionate ownership
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Example
      </h2>

      <p className="mb-10">
      Caroline invests in GreenStuff, LLC, an early-stage venture founded by Elizabeth that is attempting to turn its nascent battery technology into a successful enterprise. After some negotiation, they agree on a common equity investment withthe following terms:
      </p>

      <ul className="list-disc pl-5 mt-5 mb-10">
        <li>
        Investment Amount: $1MM
        </li>
        <li>
        Investment Date: May 1, 2021
        </li>
        <li>
        Pre-Money Valuation: $9MM
        </li>
        <li>
        Authorized Shares: 100k
        </li>
        <li>
        Shares Issued: 100k
        </li>
        <li>
        PPS: $10
        </li>
        <li>
        Preemptive Rights: Included
        </li>
      </ul>

      <p className="mb-10">
      Prior to the investment, GreenStuff has 900k FDSO. Following Caroline’s $1MM investment, GreenStuff has a post-money valuation of $10MM and 1MM FDSO. With Caroline’s 100k shares, she now holds a 10% ownership stake in the company.      
      </p>
     
      <p className="mb-16">
      Two years pass and GreenStuff has proven its technology with several large utility customers. In May of 2023, venture capital fund VentureStuff L.P. wants to make an investment of $5M for 250k shares at a PPS of $20 and a pre-money valuation of $20MM. With an expected total of 1.25MM shares outstanding, Caroline is given the option to exercise her preemptive rights to retain her proportionate 10% ownership by paying an additional $500k for 25k more shares. She declines, and VentureStuff invests the full $5MM for 20% of the company at a post-money valuation of $25MM. Caroline’s 100k shares have doubled in value to $2MM but her ownership has fallen to 8%.
      </p>
      
    </PostLayout>
  )
}

export default Post
