import React from 'react'

const ShocialShare = ({ postTitle, postUrl }) => {
  return (
    <div className="container flex">
      <a
        href={`https://twitter.com/intent/tweet?text=${postTitle}%20https://clockwork.app${postUrl}`}
        target="_blank"
        rel="noreferrer"
        className="py-2 px-7 border-2 border-blue rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://clockwork.app/blog/${postUrl}`}
        target="_blank"
        rel="noreferrer"
        className="ml-5 py-2 px-7 border-2 border-blue rounded text-blue font-lato antialiased transform hover:-translate-y-1 transition-all hover:shadow-lg"
      >
        facebook
      </a>
      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&url=https://clockwork.app/blog/${postUrl}/&title=${postTitle}`}
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
