import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Moment from 'react-moment'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ShocialShare from 'components/SocialShare/ShocialShare'

const PostLayout = ({ children, meta }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="Description" content={meta.description}></meta>
        <title>{meta.title}</title>

        <meta property="og:title" content={meta.title}></meta>
        <meta property="og:description" content={meta.description}></meta>
        <meta property="og:image" content={`/images/${meta.thumbnail}`}></meta>
        <meta property="og:url" content={`https://clockwork.app${router.pathname}`}></meta>

        <meta property="twitter:title" content={meta.title}></meta>
        <meta property="twitter:description" content={meta.description}></meta>
        <meta property="twitter:image" content={`/images/${meta.thumbnail}`}></meta>
      </Head>
      <Header />
      <main>
        <div className="pt-28">
          <div
            className="w-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16, 21, 39, 0.8), rgba(16, 21, 39, 0.8)), url(/images/${meta.thumbnail})`,
              height: '400px',
            }}
          >
            <div className="container flex flex-col justify-center items-center py-20">
              <span className="uppercase font-normal font-lato text-white text-lg border-2 border-gray-300 rounded-md px-2 antialiased">
                {meta.category}
              </span>
              <h1 className="text-4xl my-10 antialiased font-raleway text-white font-normal max-w-4xl text-center">
                {meta.title}
              </h1>
              <p className="text-white antialiased">
                <Moment format="MMMM Do YYYY">{meta.publishedAt}</Moment>
              </p>
            </div>
          </div>
        </div>
        <main className="article container pt-40 max-w-5xl antialiased leading-8 text-gray-800">
          {children}
        </main>

        <div className="uk-width-expand">
          <p className="uk-margin-remove-bottom">By {meta.author}</p>
          <p className="uk-text-meta uk-margin-remove-top">
            <Moment format="MMM Do YYYY">{meta.publishedAt}</Moment>
          </p>
        </div>

        <div>
          <ShocialShare postTitle={meta.title} postUrl={`${router.pathname}`} />
        </div>

        <Footer />
      </main>
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
}

export default PostLayout
