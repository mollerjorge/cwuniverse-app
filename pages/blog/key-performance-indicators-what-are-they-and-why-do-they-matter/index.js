import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
        Across nearly every vertical of the investment industry investors and funds focus on a few
        key performance and return-oriented metrics, such as IRR and MOIC, to gauge the success of
        their work. But while these metrics are useful to investors, they provide little meaning to
        portfolio company founders. So, what should you as a founder be focused on? Key Performance
        Indicators (KPI’s) provide quick and easy objective windows into the real-time health of
        your business.
      </p>
      <p className="mb-10">
        Operational KPIs tend to be a much less standardized form of performance measurement as they
        can vary wildly in their adoption and appreciation across industries and investors – while
        engagement rate may be a core focus in digital advertising, it’s not going to tell you much
        about how that manufacturing plant down the road is doing. On top of this, volatility in
        growth trajectories of early-stage companies can lead to very little continuity or
        predictability of these metrics. Public companies may not grow or shrink quarterly revenue
        by 50% at a time, but this can be commonplace for new founders where a new partnership can
        deliver overnight expansion.
      </p>
      <p className="mb-10">
        That said, there are two prominent groups of metrics which emerge as consistent in their
        appreciation by investors across industries: Customer Metrics and Financial Metrics.
      </p>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-5 font-semibold">
        Customer Metrics
      </h3>

      <p className="mb-10">
        Three of the most universally adopted customer metrics are Customer Acquisition Cost (CAC),
        Customer Churn, and Customer Lifetime Value (CLTV).
      </p>

      <h4 className="text-sm tracking-widest uppercase font-raleway antialiased mt-10 mb-5">
        CUSTOMER ACQUISTION COST (CAC)
      </h4>

      <p className="mb-10">
        CAC represents the direct costs associated with acquiring a new customer. For an insurance
        company (an industry with a notoriously sticky customer base), this cost could comprise the
        marketing spend to get a customer interested in the company, the salary of the insurance
        agent who goes door to door, or any other marketing-related costs like materials and postage
        stamps associated with the onboarding process. For a food delivery company, these costs
        might include promotional discounts or local offers that the company pays for to entice you
        to use their service rather than the other five already on your phone.
      </p>

      <p className="mb-10">
        Generally, as with all costs a business may incur, the lower the CAC the better. While a
        high initial CAC may appear unsustainable or unattractive, securing early clients bodes well
        for proving traction and product-market fit. Therefore, CAC should be taken with a grain of
        salt for early-stage companies seeking aggressive expansion and scale. Later stage companies
        with established sales processes, however, are better candidates to be held accountable to
        their industry-standard CAC benchmarks.
      </p>

      <p className="my-10">
        There are two competing philosophies for CAC: it should either increase or decrease over the
        long term. Both conclusions have merit depending on the industry vertical, client base, and
        growth trajectory.
      </p>

      <p className="mb-10">
        Mature industries with stagnant customer bases may face rising CAC due to heavy competition
        from proven incumbents – many players fighting over a finite customer base. By capturing the
        low-hanging-fruit, each additional client will be more difficult to acquire. Conversely, new
        and emerging industries with expanding customer bases will lead to decreasing CAC. If the
        growth of customers outpaces the growth of service providers, then conditions may exist for
        limited competition for sales. Newer markets also have fewer incumbents, such that new
        market entrants can build brand value and trust within industry verticals without needing to
        displace nested behemoths.
      </p>

      <h4 className="text-sm tracking-widest uppercase font-raleway antialiased mt-10 mb-5">
        CUSTOMER CHURN
      </h4>

      <p className="mb-10">
        Customer churn represents the rate of lost customers. This can be tracked on any basis –
        monthly and annual churn are the most common. These rates will vary by industry and also
        function differently depending on revenue models. For example, SaaS companies with annual
        contracts will experience high rates of churn on 12-month cycles when contracts expire. On
        the other hand, SaaS companies with 1-month contracts will experience varied churn rates
        throughout the year. The rate of resubscription may also be prone to seasonality and broader
        economic conditions.
      </p>

      <p className="mb-10">
        Keeping with the insurance company example, customer churn could represent the proportion of
        customers who no longer pay insurance premiums one year after they paid their initial
        premium. Sophisticated analysis for established companies will look at churn rates over many
        years to identify issues with the retention structure and incentivize loyalty (e.g.,
        incremental annual discounts on insurance premiums the longer a customer has been with the
        company).
      </p>

      <h4 className="text-sm tracking-widest uppercase font-raleway antialiased mt-10 mb-5">
        CUSTOMER LIFETIME VALUE (CLTV)
      </h4>

      <p className="mb-10">
        As the counterpart to CAC, which represents the cost of acquiring the customer, CLTV
        represents the value to the company of having the customer once they have been acquired.
        While CAC tends to be a relatively simple point-in-time measurement, CLTV is much more
        complex because it attempts to measure the value of a customer acquisition far into the
        future.
      </p>

      <p className="mb-10">
        Because we are looking at value per customer, CLTV is a measure of lifetime contribution
        (profit, rather than revenue) each incremental customer is expected to bring to the company,
        measured in today’s dollars. Customer contribution from far in the future will count
        significantly less towards this measure than contribution received today, and anticipated
        churn rates decrease the value of these future contributions further by
        probability-weighting the likelihood that they occur at all.
      </p>

      <p className="mb-10">
        Because we are looking at value per customer, CLTV is a measure of lifetime contribution
        (profit, rather than revenue) each incremental customer is expected to bring to the company,
        measured in today’s dollars. Customer contribution from far in the future will count
        significantly less towards this measure than contribution received today, and anticipated
        churn rates decrease the value of these future contributions further by
        probability-weighting the likelihood that they occur at all.
      </p>

      <table border="1">
        <tbody>
          <tr>
            <th>Premium Month</th>
            <th>Periodic Churn Rate</th>
            <th>Cumulative Retention</th>
            <th>Average Premium</th>
            <th>Ongoing Service Cost</th>
            <th>Periodic Contribution</th>
            <th>Discount Factor (at 2%)</th>
            <th>Periodic CLTV</th>
          </tr>
          <tr>
            <td>1</td>
            <td>10%</td>
            <td>90,0%</td>
            <td>$&nbsp;100</td>
            <td>$&nbsp;30</td>
            <td>$&nbsp;70</td>
            <td>1,02</td>
            <td>$&nbsp;68,6</td>
          </tr>
          <tr>
            <td>2</td>
            <td>10%</td>
            <td>81,0%</td>
            <td>$&nbsp;100</td>
            <td>$&nbsp;29</td>
            <td>$&nbsp;71</td>
            <td>1,04</td>
            <td>$&nbsp;68,2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>10&nbsp;%</td>
            <td>72,9&nbsp;%</td>
            <td>$&nbsp;100</td>
            <td>$&nbsp;28</td>
            <td>$&nbsp;72</td>
            <td>1,06</td>
            <td>$&nbsp;67,8</td>
          </tr>
          <tr>
            <td>4</td>
            <td>10%</td>
            <td>65,6%</td>
            <td>$&nbsp;100</td>
            <td>$&nbsp;27</td>
            <td>$&nbsp;73</td>
            <td>1,08</td>
            <td>$&nbsp;67,4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>10&nbsp;%</td>
            <td>59,0&nbsp;%</td>
            <td>$&nbsp;100</td>
            <td>$&nbsp;26</td>
            <td>$&nbsp;74</td>
            <td>1,10</td>
            <td>$&nbsp;67,0</td>
          </tr>
          <tr className="tfooter">
            <td>
              <b>Total</b>
            </td>
            <td></td>
            <td></td>
            <td>$&nbsp;500</td>
            <td>$&nbsp;140</td>
            <td>$&nbsp;360</td>
            <td></td>
            <td>
              <b>$&nbsp;339,2</b>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="my-10">
        A general rule of thumb is that a company should not be pursuing a customer if the cost to
        acquire them is greater than the long-term value they bring to the company. In this example,
        if CAC is greater than $339.2, growth becomes unprofitable. Investors across industries use
        these metrics in conjunction with one another to identify companies with substantial
        high-margin growth prospects.
      </p>

      <h3 className=" tracking-widest uppercase font-raleway text-sm antialiased mt-10 mb-5 font-semibold">
        Financial Metrics
      </h3>

      <p className="my-10">
        Where customer-oriented metrics rely on various assumptions and subjective judgements by
        management, financial metrics are the cold, hard (and mostly regulated) figures that
        constitute the lifeblood of operational analysis. The two most common families of these are
        Income Statement Metrics and Financing Metrics.
      </p>

      <h4 className="text-sm tracking-widest uppercase font-raleway antialiased mt-10 mb-5">
        INCOME STATEMENT METRICS
      </h4>

      <p className="mb-10">
        Because short-term revenue can vary significantly by month or season, investors tend to
        focus on revenue trends or growth over longer time horizons. Trailing Twelve Month (TTM)
        revenue provides a backward-looking snapshot of the past year’s aggregate revenue. Next
        Twelve Month (NTM) revenue is a forward-looking projection that investors will expect
        founders to have readily available. Lastly, run rate is generally expressed as a
        twelve-month extrapolation of a monthly or quarterly revenue figure.
      </p>

      <p className="mb-10">
        Investors often focus on the Year-over-Year (YoY) growth rates of these revenue metrics. It
        is common for younger companies to sell to buyers at a price multiple relative to their TTM
        or NTM sales. Alternatively, more established founders that are operationally positive (but
        not necessarily earnings positive) often sell to buyers at an EBITDA multiple relative to
        their TTM or NTM EBITDA.
      </p>

      <p className="mb-10">
        While investors prefer promising revenue-based metrics, there are other benchmarking options
        for earlier stage startups with limited monetization. For example, contract-based revenue
        models can use Signings as a benchmark, which represents the total value of new contracts
        signed in any given period, generally monthly or quarterly.
      </p>

      <h4 className="text-sm tracking-widest uppercase font-raleway antialiased mt-10 mb-5">
        Financing Metrics
      </h4>

      <p className="mb-10">
        Financing metrics such as Burn Rate and Runway help both investors and founders accurately
        track operational health and fundraising needs. While burn rate has many varied definitions
        and methods of calculation, it all boils down to a measure of how quickly your company is
        using up its cash on hand. The higher the burn rate, the more substantial funding sources a
        company will need. Some useful proxies for Burn Rate are Net Income, Cash Flow from
        Operations, or Cash Flow from Operations plus Cash Flow from Investing. Cash Flow from
        Financing is typically excluded from this measure because it does not reflect operational
        cash needs and can fluctuate significantly month to month.
      </p>
      <p className="mb-10">
        Funding and access to funding represent the lifeblood of entrepreneurs. Runway is simply the
        measure of how long your company has before it runs out of money to meet operational
        demands. This measure does not apply to cashflow positive companies and is simply calculated
        by dividing the current cash balance by either historical or anticipated burn rate. Good
        investors preserve capital for follow-on investments in their successful portfolio
        companies, so keeping existing investors abreast of updated runway and future funding needs
        encourages goodwill and continued engagement that may manifest repeat funding commitments.
      </p>
      <p className="mb-10">
        While other KPIs such as Active Monthly Users, Gross Margins, and Monthly Recurring Revenue
        are widely employed, most are industry-specific, and investors will only judge these in the
        context of relative improvement over time and performance against peers. You should explore
        and determine which metrics are most relevant in the context of your own industry, and
        assume your investors will feel accordingly. Happy measuring!
      </p>
    </PostLayout>
  )
}

export default Post
