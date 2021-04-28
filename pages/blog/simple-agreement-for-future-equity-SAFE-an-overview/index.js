import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      Simple Agreements for Future Equity (SAFEs) are one of the simplest and most common forms of fundraising employed by early-stage founders. SAFEs were pioneered by renowned accelerator Y Combinator in 2013 to provide a standardizedway for early-stage startups to raise capital cheaply and efficiently (see the SAFE templates from Y Combinator www.ycombinator.com/documents/). Aptly named, a SAFE is an agreement between founders and investors to provide capital now in exchange for ownership of the company at a later date. The catch is that both the amount of ownership and the date at which the investor receives it are unknown (and not guaranteed). SAFEs share many of the same characteristics as their big brother, the convertible note, but without some of the bells and whistles like interest and maturity dates that provide additional upside and protections to the investor.
      </p>
      <p className="mb-16">
      SAFEs are primarily used by less sophisticated private investors and their early-stage company counterparts for pre-revenue or early-revenue businesses. The standardized terms, low legal costs, and lack of need for complicated diligence and valuation techniques make them ideal for quick and easy capital infusions to flesh out an initial business model. Additionally, the lack of interest accumulation and maturity thresholds provide more flexibility for founders trying to avoid cash crunches or premature dilution. 
      </p>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
        Pros of SAFEs to Companies:
      </h2>
      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Simple
        </li>
        <li>
        Standardized
        </li>
        <li>
        Little to no legal costs
        </li>
        <li>
        Founder friendly form of investment
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of SAFEs to Companies:
      </h2>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Terms can be arbitrary
        </li>
        <li>
        Limited flexibility for unique circumstances
        </li>
        <li>
        Discount terms and valuation caps can result in more dilution than simple equity financing
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of SAFEs to Investors:
      </h2>

      <ul className="list-disc pl-5 mt-5 mb-5 mb-16">
        <li>
        Simple
        </li>
        <li>
        Little to no legal costs
        </li>
        <li>
        Lowers costs associated with underwriting the investment
        </li>
        <li>
        Perfect for early-stage companies where valuations are hard to define
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of SAFEs to Investors:
      </h2>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Founder friendly form of investment
        </li>
        <li>
        No mechanism to force conversion of SAFE into equity
        </li>
        <li>
        No time penalty for founders who delay priced equity rounds
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Key Terms and Definitions
      </h2>

      <p className="mb-10">
      While SAFEs are relatively standardized documents, the key terms that need to be agreed upon by founders and investors are as follows:      
      </p>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Investment Amount: The cash amount which the investor agrees to immediately give to the company
        </li>
        <li>
        Investment Date: The date on which this transfer will occur
        </li>
        <li>
        Valuation Cap: The maximum company valuation at which the equity exchange may occur (this provides enhanced upside potential to investors if the future equity financing occurs at an elevated price)
        </li>
        <li>
        Discount: The discount to the price per share of a future equity raise at whichthe SAFE will convert (if there is both a discount and a valuation cap, the more favorable to the investor is generally applied)
        </li>
        <li>
        Most Favored Nation (MFN) Clause: The MFN clause allows for a grandfathering of terms if any additional SAFEs or Convertible Notes are issued with more favorable terms prior to a priced equity round
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Example
      </h2>

      <p className="mb-10">
      Caroline invests in GreenStuff, LLC, an early-stage venture founded by Elizabeth that is attempting to turn its nascent battery technology into a successful enterprise. After some quick negotiation, they agree on a SAFE with the following terms:      
      </p>

      <ul className="list-disc pl-5 mt-5">
        <li>
        Investment Amount: $50k
        </li>
        <li>
        Investment Date: May 1, 2021
        </li>
        <li>
        Valuation Cap: $7MM
        </li>
        <li>
        Discount: 10%
        </li>
        <li>
        Most Favored Nation clause included
        </li>
        <li>
        Exchangeable for preferred equity
        </li>
      </ul>

      <p className="mb-10 mb-16">
      After six months, GreenStuff issues an additional SAFE with identical terms except for a 20% discount rate. Caroline writes Elizabeth to exercise her MFN clause to receive the 20% discount rate as well. Six months later, GreenStuff has begun to experience significant traction and raises a priced preferred equity round from a venture capital fund at a post-money valuation of $5MM, which results in 1MM shares outstanding at a PPS of $5.00. Because the post-money valuation is less thanthe valuation cap, the discount rate (rather than the valuation cap) will apply to the preferred equity exchange of the SAFE. A 20% discount to the PPS of $5.00 results in a PPS of $4.00. Caroline exchanges her $50k SAFE for 12,500 shares of preferred equity.
      </p>
      
    </PostLayout>
  )
}

export default Post
