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
      As a follow up to our most recent instrument publication on <a rel="noreferrer" className="text-blue-600 underline" target="_blank" href="https://www.clockwork.app/blog/common-equity-an-overview">common equity</a>, this piece is meant to provide a brief overview of preferred equity, specifically as it pertains to and is commonly used in early-stage financing. As opposed to common equity, which is typically held by the founding partners of a new venture, preferred equity is often the favorite choice of the subsequent rounds of financial investors. Most <a rel="noreferrer" className="text-blue-600 underline" target="_blank" href="https://www.clockwork.app/blog/simple-agreement-for-future-equity-SAFE-an-overview">SAFE’s</a> and <a rel="noreferrer" className="text-blue-600 underline" target="_blank" href="https://www.clockwork.app/blog/convertible-notes-an-overview">convertible notes</a> specify that they will convert into preferred equity rather than common equity at the time of conversion. 
      </p>
      
      <p className="mb-10">
      The reason preferred equity is so commonly employed is that it provides several investor protections that are specifically intended to protect downside risk if things do not go exactly as well as those rosy financial projections say they will. The likelihood of bankruptcy or liquidation for new ventures is much higher relative to public companies with established business models and access to plenty of capital, so investors are more inclined to want protection from those worst-case scenarios. 
      </p>

      <p className="mb-16">
      As it is generally employed in venture capital, preferred equity entitles the owner to much of the same upside as common equity. While dependent on the specific terms of each stock purchase agreement, periodic dividend payments can be capped at a specific annualized rate. However, most early-stage ventures seeking preferred equity funding are often pre-profitability (and will be for some time). Additionally, early-stage preferred equity agreements often permit the holder the ability to share in enhanced dividends or convert on a 1:1 basis into common equity. Better downside protection with equal ownership and profit-sharing rights, what’s not to love? 
      </p>

      <div>
        <img
          className="w-full p-6"
          src="/images/preferred-equity-an-overview/review-report.jpg"
          alt="Reviewing documents and reports"
          width={611}
          height={407}
        />
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of Preferred Equity to Companies:
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-5">
        Can be a less dilutive source of financing than SAFEs or Convertible Notes
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-5">
        Aligns the interests of founders and investors
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-16">
        Preferred dividends are often non-cumulative and elective, meaning the preferred equity issuance does not require periodic cash outflows like debt financing
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of Preferred Equity to Companies:
      </h2>
      
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-5">
        Giving up financial ownership and influence over decision making
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-5">
        Requires increased diligence to properly price the shares
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-5">
        Preferred equity is senior in liquidation priority to common equity
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-16">
        Preferred dividends take precedence over dividends to common equity holders
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of Preferred Equity to Investors:
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-5">
        Aligns the interests of founders and investors
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-5">
        Can provide an investor with input over the decision making of the company
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-5">
        Enhanced downside protection
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faPlus} className="text-teal text-2xl mr-5" />
        <p className="mb-16">
        Unlimited upside 
        </p>
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of Preferred Equity to Investors:
      </h2>
      
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-5">
        Still junior to the claims of debtholders in the event of bankruptcy or liquidation
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faMinus} className="text-gray text-2xl mr-5" />
        <p className="mb-5">
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
      While preferred equity is a relatively standardized form of financing, the key terms that need to be agreed upon by founders and investors are as follows:
      </p>
    
      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        <strong>Investment Amount:</strong> The cash amount which the investor agrees to immediately give to the company
        </li>
        <li>
        <strong>Investment Date:</strong> The date on which this transfer will occur
        </li>
        <li>
        <strong>Pre-Money Valuation:</strong> The enterprise value of the company as agreed upon by the investor and the issuer, immediately prior to the aggregate infusion of capital
        </li>
        <li>
        <strong>Financing Amount:</strong> The aggregate amount of capital to be raised
        </li>
        <li>
        <strong>Post-Money Valuation:</strong> The enterprise value of the company immediately following the aggregate infusion of capital, equal to the pre-money valuation plus aggregate new financing
        </li>
        <li>
        <strong>Price Per Share (PPS):</strong> The agreed upon price at which the additional shares will be purchased
        </li>
        <li>
        <strong>Par Value of Shares:</strong> The value on which the dividend rate is calculated
        </li>
        <li>
        <strong>Dividend Rate:</strong> The annualized rate of contractual dividend payments
        </li>
        <li>
        <strong>Cumulative Dividends:</strong> Standard dividends are not contractually obligated to be paid on the agreed upon payment dates so there is limited repercussion to the founders for failing to pay quarterly dividends, whereas cumulative dividends are required to be paid and will accrue over time at the dividend rate until paid in full
        </li>
        <li>
        <strong>Authorized Shares:</strong> The aggregate number of new shares authorized to be issued by the company in conjunction with the current financing
        </li>
        <li>
        <strong>Shares Issued:</strong> The aggregate number of new shares actually issued by the company in conjunction with the current financing
        </li>
        <li>
        <strong>Fully Diluted Shares Outstanding (FDSO):</strong> The aggregate number of shares outstanding at any given time, including all outstanding dilutive securities that have not yet been exercised and converted
        </li>
        <li>
        <strong>Preemptive Rights:</strong> Preemptive rights give an investor the legal right to participate in future financing rounds to retain proportionate ownership 
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Example
      </h2>

      <p className="mb-10">
      Caroline invests in GreenStuff, LLC, an early-stage venture founded by Elizabeth that is attempting to turn its nascent battery technology into a successful enterprise. After some negotiation, they agree on a preferred equity investment with the following terms:
      </p>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        <strong>Investment Amount:</strong> $1MM
        </li>
        <li>
        <strong>Investment Date:</strong> June 10, 2021
        </li>
        <li>
        <strong>Pre-Money Valuation:</strong> $9MM
        </li>
        <li>
        <strong>Dividend Rate:</strong> 10%
        </li>
        <li>
        <strong>Cumulative Dividends:</strong> No
        </li>
        <li>
        <strong>Authorized Shares:</strong> 100k
        </li>
        <li>
        <strong>Shares Issued:</strong> 100k
        </li>
        <li>
        <strong>PPS:</strong> $10
        </li>
        <li>
        <strong>Par Value of Shares:</strong> $10
        </li>
        <li>
        <strong>Preemptive Rights:</strong> Included
        </li>
      </ul>

      <p className="mb-10">
      Prior to the investment, GreenStuff has 900k FDSO comprising 600k common equity shares held by founders and 300k preferred equity shares held by outside investors. Following Caroline’s $1MM investment, GreenStuff has a post-money valuation of $10MM and 1MM FDSO. With Caroline’s 100k preferred shares, she now holds a 10% ownership stake in the company. 
      </p>

      <p className="mb-10">
      Two years pass and GreenStuff has proven its technology with several large utility customers. In May of 2023, venture capital fund VentureStuff L.P. wants to make an investment of $5M for 250k shares at a PPS of $20 and a pre-money valuation of $20MM. With an expected total of 1.25MM shares outstanding, Caroline is given the option to exercise her preemptive rights to retain her proportionate 10% ownership by paying an additional $500k for 25k more shares. She declines, and VentureStuff invests the full $5MM for 20% of the company at a post-money valuation of $25MM. Caroline’s 100k shares have doubled in value to $2MM but her ownership has fallen to 8%. 
      </p>

      <p className="mb-16">
      GreenStuff is still pre-profitability and has electively chosen not to pay any of the $200k in dividends over the past two years. While Caroline’s price per share has increased to $20, the par value of the shares remains at $10. The preferred shares will continue to calculate dividends on the par value rather than the price per share. If GreenStuff fails and liquidates its assets, the preferred equity will be paid out based on the par value of the issuance after outstanding debt is paid back in full but before common equity receives any distribution.
      </p>
      
    </PostLayout>
  )
}

export default Post
