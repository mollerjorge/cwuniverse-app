import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
      Convertible notes are the investor-friendly version of SAFEs, with the addition of features designed to enhance investor interests like maturity dates and interest rates. They are at their core simply a loan from an investor to an early-stage company. The problem is that loaning to pre-revenue and pre-profitability companies is a risky endeavor because they rarely have the cash on hand to pay back investors. The key difference between a convertible note and a regular term loan then revolves around the expectation that the investor will be compensated with proportionate ownership in the company rather than a repayment of cash at the end of the note term. It is common for this ownership to come in the form of preferred equity or common equity. 
      </p>

      <p className="mb-10">
      The addition of maturity dates provides a time limit by which a conversion must occur to prevent the note from remaining outstanding in perpetuity. However, in practice it is rarely advantageous for the investor to force conversion or return of capital on the maturity date if a qualified financing has not yet occurred, which often leads to maturity amendments that amend the note to extend the maturity date. The addition of interest rates provides compensation to the investor for the lending of capital and provides an economic disincentive for founders to unnecessarily delay conversion of the notes. Interest due on convertible notes is almost always deferred so that it may be accumulated and added to the conversion amount of the note for more investor ownership.
      </p>

      <p className="mb-16">
      In addition to enhanced upside, convertible notes protect investor downside as well. Whereas SAFEs are typically treated pari passu with preferred equity in the liquidation hierarchy, convertible notes are senior debt instruments that stake first claim to any assets or intellectual property. In practice, a defaulted early-stage company will rarely have significant real assets, so the latter becomes the more important consideration to investors.
      </p>

      <h3 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of Convertible Notes to Companies:
      </h3>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Relatively standardized terms
        </li>
        <li>
        Access to cash that founders are not expected to pay back
        </li>
      </ul>

      <h3 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of Convertible Notes to Companies:
      </h3>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Enhanced investor return and protections relative to SAFEs
        </li>
        <li>
        Issuing debt often leaves founders with subordinate claims to the assets of their own company
        </li>
        <li>
        Discount terms, valuation caps, and interest rates can result in more dilution than simple equity financing
        </li>
      </ul>

      <h3 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Pros of Convertible Notes to Investors:
      </h3>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Penalizes founders for delaying the conversion of the note with interest return
        </li>
        <li>
        Includes a maturity date, after which investors could force the conversion of the note
        </li>
        <li>
        Enhanced seniority of legal claims in the event of default or liquidation by the company
        </li>
      </ul>

      <h3 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Cons of Convertible Notes to Investors:
      </h3>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        In practice, the investor-friendly terms of a convertible note are often less enforceable than they legally appear
        </li>
        <li>
        Can require more diligence and return scenario modeling than a SAFE or equity investment
        </li>
      </ul>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Key Terms and Definitions
      </h2>

      <p className="mb-10">
      While convertible notes are relatively standardized documents, the key terms that need to be agreed upon by founders and investors are as follows:
      </p>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Investment Amount: The cash amount which the investor agrees to immediately give to the company
        </li>
        <li>
        Investment Date: The date on which this transfer will occur
        </li>
        <li>
        Maturity Date: The date by which the qualified financing and conversion of notes into equity or preferred equity must have occurred
        </li>
        <li>
        Interest Rate: The rate, typically expressed as an annual percentage, at which interest accrues
        </li>
        <li>
        Interest Accrual Method: Typically, interest due on the note accrues on a day count basis of Actual/365 or 30/360 and will accrue using simple (only on the initial principal amount) or compounding (interest also accrues on accumulated interest) methods
        </li>
        <li>
        Discount: The discount to the price per share of a future equity raise at which the convertible note will convert (if there is both a discount and a valuation cap, the more favorable to the investor is generally applied)
        </li>
        <li>
        Valuation Cap: The maximum company valuation at which the equity exchange may occur (this provides enhanced upside potential to investors if the future equity financing occurs at an elevated price)
        </li>
        <li>
        Qualified Financing Threshold: The fundraising amount which triggers the automatic conversion of the convertible note into equity or preferred equity
        </li>
      </ul>

      <h3 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
      Example
      </h3>

      <p className="mb-10">
      Caroline invests in GreenStuff, LLC, an early-stage venture founded by Elizabeth that is attempting to turn its nascent battery technology into a successful enterprise. After some negotiation, they agree on a convertible note with the following terms:
      </p>

      <ul className="list-disc pl-5 mt-5 mb-16">
        <li>
        Investment Amount: $50k
        </li>
        <li>
        Investment Date: May 1, 2021
        </li>
        <li>
        Maturity Date: May 1, 2024
        </li>
        <li>
        Interest Rate: 10%
        </li>
        <li>
        Interest Accrual Method: Simple interest with an Actual/365 day count basis
        </li>
        <li>
        Interest Payout: Deferred
        </li>
        <li>
        Discount: 20%
        </li>
        <li>
        Valuation Cap: $7MM
        </li>
        <li>
        Qualified Financing Threshold: $2MM
        </li>
        <li>
        Exchangeable for preferred equity
        </li>
      </ul>

      <p className="mb-10">
      Seven months later, on December 1, 2021, GreenStuff issues additional convertible notes to multiple investors with a cumulative par balance of $700k. At this time, Caroline’s investment has accrued $2,932 in interest over 214 days, but Caroline has not received any cash compensation due to the deferred interest payout. This financing round does not meet the qualified financing threshold and does not trigger a conversion of the notes.
      </p>
      <p className="mb-16">
      Seventeen months later, on May 1, 2023, GreenStuff has begun to experience significant traction and raises a priced preferred equity round from a venture capital fund at a post-money valuation of $5MM, which results in 1MM shares outstanding at a PPS of $5.00. Because the post-money valuation is less than the valuation cap, the discount rate (rather than the valuation cap) will apply to the preferred equity exchange of the convertible note. A 20% discount to the PPS of $5.00 results in a PPS of $4.00. Caroline’s initial investment of $50k has grown to $60k over two years using simply compounded annual interest of 10%. Caroline exchanges her $50k principal and $10k interest for 15,000 shares of preferred equity in GreenStuff and the convertible note is cancelled.
      </p>

    </PostLayout>
  )
}

export default Post
