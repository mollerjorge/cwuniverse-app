import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'
import categories from 'utils/categories'
import posts from 'utils/posts'

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
            <>
              <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                {sortedPosts?.slice(0, 2).map((post) => {
                  return (
                    <Link key={post.link} as={`/blog/${post.link}`} href={`/blog/${post.link}`}>
                      <div className="flex flex-col  overflow-hidden cursor-pointer hover:-translate-y-1 transition-all transform">
                        <Image
                          alt="post thumbnail"
                          src={`/images/${post.thumbnail}`}
                          layout="responsive"
                          width={600}
                          height={400}
                          className="rounded-md"
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
                {sortedPosts.slice(2, sortedPosts.length).map((post) => {
                  return (
                    <Link key={post.link} as={`/blog/${post.link}`} href={`/blog/${post.link}`}>
                      <div className="flex flex-col rounded-md overflow-hidden cursor-pointer">
                        <Image
                          alt="post thumbnail"
                          src={`/images/${post.thumbnail}`}
                          layout="responsive"
                          width={600}
                          height={400}
                          className="rounded-md"
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
            </>
          )}
          {category === 'Clockwork Investor Series' && (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
              {sortedPosts?.map((post) => {
                return (
                  <Link key={post.link} as={`/blog/${post.link}`} href={`/blog/${post.link}`}>
                    <div
                      className="flex flex-col rounded-md overflow-hidden cursor-pointer text-white p-5 justify-end hover:-translate-y-1 transition-all transform"
                      style={{
                        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(/images/${post.thumbnail})`,
                        height: '490px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div>
                        <p className="antialiased  mt-5 font-raleway text-sm ">{post.category}</p>
                        <h2 className="antialiased font-raleway mt-2 tracking-normal font-light text-3xl mb-5">
                          {post?.title}
                        </h2>
                        <h3 className="text-white antialiased font-raleway">{post.fundName}</h3>
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
        <div className="grid grid-cols-1 lg:grid-cols-2">
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
