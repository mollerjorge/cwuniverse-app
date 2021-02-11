import React from 'react'
import { useRouter } from 'next/router'

const ShocialShare = ({ postTitle, postUrl }) => {
  //cwuniverse-app.vercel.app/
  https: return (
    <div className="container flex">
      <a
        href={`https://twitter.com/intent/tweet?text=${postTitle}%20https://cwuniverse-app.vercel.app/${postUrl}`}
        target="_blank"
        rel="noreferrer"
        className="py-2 px-7 border-2 border-blue rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://cwuniverse-app.vercel.app/${postUrl}`}
        target="_blank"
        rel="noreferrer"
        className="ml-5 py-2 px-7 border-2 border-blue rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        facebook
      </a>
      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&url=https://cwuniverse-app.vercel.app/${postUrl}&title=The%20Building%20Blocks%20of%20Successful%20Investor%20Reporting`}
        target="_blank"
        rel="noreferrer"
        className="ml-5 py-2 px-7 border-2 border-blue rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        linkedin
      </a>
    </div>
  )
}

export default ShocialShare
