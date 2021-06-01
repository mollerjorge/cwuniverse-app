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
      While traditional hubs such as the Bay Area and New York City continue to be popular choices for launching new companies, numerous other US cities can boast of vibrant entrepreneurial communities. As the cost of living has skyrocketed in San Francisco, New York, and other major cities, founders are increasingly looking elsewhere for a home for their companies.
      </p>
      <p className="mb-10">
      What makes a city attractive to startup founders? Cost of living is certainly one factor, as employee salaries may be easier to cover on a lean startup budget in more affordable locations. Substantial populations of highly educated and skilled workers are also a benefit. Some cities also have favorable social infrastructure in place, such as networks of accelerators, incubators, coworking spaces, and other entrepreneurship-oriented organizations. The presence of an active investor community (venture funds, angel networks, etc.) provides yet another key benefit: access to capital. Lastly, as states and cities vie for business activity, many have established favorable policy environments.
      </p>
      <p className="mb-10">
      Austin, Texas is one city that has seen rapid growth among startups. Austin has an affordable cost of living, and Texas has no state income tax. The University of Texas at Austin has contributed to an educated, innovative workforce.
      </p>
      <p className="mb-10">
      Miami, Florida is another popular choice for founders. Mayor Francis Suarez has prioritized making the city attractive to entrepreneurs. Japanese multinational conglomerate SoftBank announced a $100MM initiative to fund Miami-based startups in early 2021.
      </p>
      <p className="mb-10">
      Several Virginia cities have developed entrepreneurial communities. In Richmond, accelerator Lighthouse Labs is supporting founders with mentorship and investment. Charlottesville has its proximity to UVA, as well as active angel networks like CAN and CAV Angels.
      </p>
      <p className="mb-16">
      As the global pandemic has driven increasing migration to mid-size cities and suburban areas, these trends in startup activity are poised to continue. If you are a founder considering which city to call home, you may find some compelling options in surprising places.
      </p>

    </PostLayout>
  )
}

export default Post
