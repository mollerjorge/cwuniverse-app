import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/pro-regular-svg-icons'

const SocialLink = ({ to, icon }) => {
  const displayIcon = () => {
    switch (icon) {
      case 'medium':
        return faMedium
      case 'linkedin':
        return faLinkedin
      case 'twitter':
        return faTwitter
      case 'facebook':
        return faFacebook
      default:
        return faLink
    }
  }
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="p-3 border-2 border-blue rounded-full w-14 h-14 flex justify-center items-center ml-5 cursor-pointer hover:bg-blue hover:text-white group transition-all"
    >
      {
        <FontAwesomeIcon
          icon={displayIcon()}
          className="text-blue text-xl group-hover:text-white"
        />
      }
    </a>
  )
}

export default SocialLink
