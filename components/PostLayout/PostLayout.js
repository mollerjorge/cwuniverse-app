import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Moment from 'react-moment'

import { currentPosts } from 'getAllPosts'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ShocialShare from 'components/SocialShare/ShocialShare'
import CLockworkCTA from 'components/ClockworkCTA'

const PostLayout = ({ children, meta }) => {
  const router = useRouter()
  const getPrevPost = () => {
    const index = currentPosts.findIndex((post) => {
      return post.link === `/${router.pathname.split('/')?.[2]}`
    })

    if (index > 0) {
      return currentPosts[index - 1]
    }
    return currentPosts[0]
  }
  const getNextPost = () => {
    const index = currentPosts.findIndex((post) => {
      return post.link === `/${router.pathname.split('/')?.[2]}`
    })

    if (index < currentPosts.length - 1) {
      return currentPosts[index + 1]
    }
    return currentPosts[0]
  }
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
        <meta
          property="twitter:image"
          content={`https://cwuniverse-app.vercel.app/images/${meta.thumbnail}`}
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
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

        <div className="container max-w-5xl">
          <p className=" antialiased font-lato uppercase font-bold text-sm tracking-wider text-black mb-20">
            Author: {meta.author}
          </p>
          <div>
            <ShocialShare postTitle={meta.title} />
          </div>
          <CLockworkCTA />
        </div>

        <div className="mt-16">
          <ul className="flex list-none overflow-hidden bg-blue ">
            <li
              className="w-1/2 bg-cover bg-center hover:scale-110 transform transition-all"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/prevnextbackground.png) ;`,
              }}
            >
              <a href={`/blog${getPrevPost()?.link}`} className="p-28 inline-block">
                <p className="text-white text-xl font-light mb-5 font-raleway text-right antialiased">
                  Previous Post
                </p>
                <p className="text-white text-2xl font-raleway text-right antialiased">
                  {getPrevPost()?.module?.meta?.title}
                </p>
              </a>
            </li>
            <li
              className="w-1/2 bg-cover bg-center hover:scale-110 transform transition-all"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/prevnextbackground.png);`,
              }}
            >
              <a href={`/blog${getNextPost()?.link}`} className="p-28 inline-block">
                <p className="text-white text-xl font-light mb-5 font-raleway text-left antialiased">
                  Next Post
                </p>
                <p className="text-white text-2xl font-raleway text-left antialiased">
                  {getNextPost()?.module?.meta?.title}
                </p>
              </a>
            </li>
          </ul>
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
