import React from 'react'
import Head from 'next/head'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'
import { currentPosts } from 'getAllPosts'
import categories from 'utils/categories'

const posts = currentPosts.reduce((previousValue, currentValue) => {
  if (previousValue[currentValue?.module?.meta?.category]) {
    previousValue[currentValue?.module?.meta?.category].push({
      ...currentValue.module?.meta,
      link: currentValue.link,
    })
  } else {
    previousValue[currentValue.module?.meta?.category] = [
      {
        ...currentValue.module?.meta,
        link: currentValue.link,
      },
    ]
  }

  return previousValue
}, {})

const Blog = () => {
  const displayPosts = () => {
    const postsToDisplay = []
    Object.entries(posts).forEach(([category, currPosts]) => {
      const sortedPosts = currPosts.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt)
      })
      postsToDisplay.push(
        <div key={Math.random()}>
          <h2 className="text-5xl antialiased font-raleway mt-32 mb-10">{category}</h2>
          {categories[category]?.description && (
            <h3 className="font-lato my-10 w-full lg:w-1/2 text-black antialiased">
              {categories[category]?.description}
            </h3>
          )}

          {category !== 'Clockwork Investor Series' && (
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
              {sortedPosts?.map((post) => {
                return (
                  <Link key={post.link} as={`/blog${post.link}`} href={`/blog/${post.link}`}>
                    <div className="flex flex-col rounded-md overflow-hidden cursor-pointer">
                      <div
                        style={{
                          background: `url(/images/${post.thumbnail})`,
                          height: '400px',
                          width: '600px',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />
                      <p className="antialiased  mt-5 font-raleway text-gray-600 text-sm">
                        {post.category}
                      </p>
                      <h2 className="antialiased font-raleway text-gray-900 mt-2 tracking-normal font-light text-3xl mb-5">
                        {post?.title}
                      </h2>
                      <p className="antialiased line-clamp-3 font-lato text-gray-700 text-base">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
          {category === 'Clockwork Investor Series' && (
            <div className="grid gap-12 grid-cols-1 md:grid-cols-4">
              {sortedPosts?.map((post) => {
                return (
                  <Link key={post.link} as={`/blog${post.link}`} href={`/blog/${post.link}`}>
                    <div
                      className="flex flex-col rounded-md overflow-hidden cursor-pointer text-white p-5 justify-end"
                      style={{
                        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(/images/${post.thumbnail})`,
                        height: '490px',
                        width: '350px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div>
                        <p className="antialiased  mt-5 font-raleway text-sm ">{post.category}</p>
                        <h2 className="antialiased font-raleway mt-2 tracking-normal font-light text-3xl mb-5">
                          {post?.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )
    })

    return postsToDisplay
  }

  return (
    <div>
      <Head>
        <title>Blog | Clockwork Universe</title>
        <meta
          name="description"
          content="Clockwork Universe™ is a streamlined investor and founder collaboration platform which seeks to increase visibility and transparency."
        />
      </Head>

      <Header />

      <main className="container py-20 pt-40">
        <p className="font-raleway text-gray-700 antialiased uppercase tracking-wider mb-10">
          News and resources
        </p>
        <div className="grid grid-cols-2">
          <h1 className="text-6xl min-w-max antialiased font-raleway font-normal mb-10">
            Our Blog
          </h1>

          <p className="antialized font-light text-gray-700 ">
            Follow Clockwork’s new blog to find out about strategic insights, practical ideas and
            actionable tips and ticks for founders and investors.
          </p>
        </div>
        <section className="mt-20">{displayPosts()}</section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
