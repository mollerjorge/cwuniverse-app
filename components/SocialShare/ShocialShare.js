import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShocialShare = ({ postTitle }) => {
  const router = useRouter()
  return (
    <div className="flex justify-between md:justify-start">
      <a
        href={`https://twitter.com/intent/tweet?text=${postTitle}%20${process.env.NEXT_PUBLIC_HOST}${router.pathname}`}
        target="_blank"
        rel="noreferrer"
        className="py-2 px-4 md:px-7 border-2 border-blue flex justify-center flex-col items-center md:flex-row rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        <FontAwesomeIcon className="md:mr-5" icon={faTwitter} />
        twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_HOST}${router.pathname}`}
        target="_blank"
        rel="noreferrer"
        className="ml-2 md:ml-5 py-2 px-4 md:px-7 border-2 border-blue flex justify-center flex-col items-center md:flex-row rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        <FontAwesomeIcon className="md:mr-5" icon={faFacebook} />
        facebook
      </a>
      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_HOST}${router.pathname}&title=The%20Building%20Blocks%20of%20Successful%20Investor%20Reporting`}
        target="_blank"
        rel="noreferrer"
        className="ml-2 md:ml-5 py-2 px-4 md:px-7 border-2 border-blue flex justify-center flex-col items-center md:flex-row rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        <FontAwesomeIcon className="md:mr-5" icon={faLinkedin} />
        linkedin
      </a>
    </div>
  )
}

ShocialShare.propTypes = {
  postTitle: PropTypes.string.isRequired,
}

export default ShocialShare
