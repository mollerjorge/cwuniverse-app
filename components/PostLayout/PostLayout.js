import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Moment from 'react-moment'

import posts from 'utils/posts'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ShocialShare from 'components/SocialShare/ShocialShare'
import Newsletter from 'components/Newsletter/Newsletter'
import CLockworkCTA from 'components/ClockworkCTA'

const PostLayout = ({ children, meta, isInterview }) => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  const router = useRouter()

  const sortedPosts = Object.values(posts)
    .flat()
    .sort((a, b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt)
    })

  const getPrevPost = () => {
    let index = sortedPosts.findIndex((post) => {
      return post.link === meta.link
    })

    if (index > 0) {
      return sortedPosts[index - 1]
    }
    return sortedPosts[sortedPosts.length - 1]
  }

  const getNextPost = () => {
    let index = sortedPosts.findIndex((post) => {
      return post.link === meta.link
    })
    if (index < sortedPosts.length - 1) {
      return sortedPosts[index + 1]
    }
    return sortedPosts[0]
  }

  return (
    <>
      <Head>
        <meta name="Description" content={meta.description}></meta>
        <title>{meta.title}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:title" content={meta.title}></meta>
        <meta property="og:description" content={meta.description} key="desc"></meta>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/images/${meta.thumbnail}`}
        ></meta>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_HOST}${router.pathname}`}
        ></meta>

        <meta property="twitter:title" content={meta.title}></meta>
        <meta property="twitter:description" content={meta.description}></meta>
        <meta property="twitter:card" content="summary"></meta>
        <meta property="twitter:site" content="@clockworkapp"></meta>
        <meta property="twitter:domain" content="clockwork.app"></meta>
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/images/${
            meta.twitterThumbnail || meta.thumbnail
          }`}
        ></meta>
      </Head>
      <Header />
      <main>
        <div className="pt-28">
          <div
            className="w-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16, 21, 39, 0.8), rgba(16, 21, 39, 0.8)), url(/images/${
                isInterview ? 'prevnextbackground.png' : meta.thumbnail
              })`,
              height: '400px',
            }}
          >
            <div className="container flex flex-col justify-center items-center py-20">
              <Link href="/blog" passHref className="cursor-pointer">
                <span className="uppercase font-normal font-lato cursor-pointer text-white text-lg border-2 border-gray-300 rounded-md px-2 antialiased">
                  {meta.category}
                </span>
              </Link>
              <h1 className="text-4xl my-10 antialiased font-raleway text-white font-normal max-w-4xl text-center">
                {meta.title}
              </h1>
              <p className="text-white antialiased">
                <Moment format="MMMM Do YYYY">{meta.publishedAt}</Moment>
              </p>
            </div>
          </div>
        </div>

        <main className="post max-w-4xl container pt-20 antialiased leading-8 text-gray-800 overflow-auto">
          {children}
        </main>

        <div className="container max-w-5xl">
          {meta.author && (
            <p className=" antialiased font-lato uppercase font-bold text-sm tracking-wider text-black mb-20">
              Author: {meta.author}
            </p>
          )}
          <div>
            <ShocialShare postTitle={meta.title} />
          </div>
          <CLockworkCTA />
        </div>

        <div className="mt-16">
          <ul className="flex list-none overflow-hidden bg-blue h-96 ">
            <li
              className="w-1/2  overflow-hidden "
              style={{
                backgroundRepeat: 'no-repeat',
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/${
                  getPrevPost()?.thumbnail
                })`,
                backgroundSize: 'cover',
              }}
            >
              <a
                href={`/blog/${getPrevPost()?.link}`}
                className="w-full flex items-end pr-10 justify-center flex-col h-full"
              >
                <p className="text-white text-xl font-light mb-5 font-raleway text-right antialiased">
                  Previous Post
                </p>
                <p className="text-white text-2xl font-raleway text-right antialiased">
                  {getPrevPost()?.title}
                </p>
              </a>
            </li>
            <li
              className="w-1/2 overflow-hidden"
              style={{
                backgroundRepeat: 'no-repeat',
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/${
                  getNextPost()?.thumbnail
                })`,
                backgroundSize: 'cover',
              }}
            >
              <a
                href={`/blog/${getNextPost()?.link}`}
                className="w-full flex items-start pl-10 justify-center flex-col h-full"
              >
                <p className="text-white text-xl font-light mb-5 font-raleway text-left antialiased">
                  Next Post
                </p>
                <p className="text-white text-2xl font-raleway text-left antialiased">
                  {getNextPost()?.title}
                </p>
              </a>
            </li>
          </ul>
        </div>

        <Newsletter />
        <Footer />
      </main>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('set', 'linker', {
                  'domains': ['cwuniverse.app'],
                  'decorate_forms': true,
                  'url_position': 'fragment'
                });
              `,
        }}
      />
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
    author: PropTypes.string,
    twitterThumbnail: PropTypes.string,
    link: PropTypes.string.isRequired,
  }),
  isInterview: PropTypes.bool,
}

PostLayout.defaultProps = {
  isInterview: false,
}

export default PostLayout
