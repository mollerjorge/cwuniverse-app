import React from 'react'
import Head from 'next/head'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'
import { posts } from 'getAllPosts'

const Blog = () => {
  const displayArticles = () => {
    return posts.map((post) => {
      const { meta } = post.module
      return (
        <Link key={post.link} as={`/blog${post.link}`} href={`/blog/${post.link}`}>
          <div className="flex flex-col rounded-md overflow-hidden">
            <div
              style={{ background: `url(/images/${meta.thumbnail})`, height: '600px' }}
              className=" bg-cover bg-center"
            />
            <p className="antialiased mt-5 font-raleway text-gray-600 text-sm">{meta.category}</p>
            <h2 className="antialiased font-raleway text-gray-900 mt-2 tracking-normal font-light text-3xl mb-5">
              {meta?.title}
            </h2>
            <p className="antialiased font-lato text-gray-700 text-base">{meta.description}</p>
          </div>
        </Link>
      )
    })
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
        <h1 className="text-6xl antialiased font-raleway font-normal mb-10">Our Blog</h1>

        <p className="antialized font-light text-lg text-gray-700 ">
          Follow Clockwork’s new blog to find out about strategic insights, practical ideas and
          actionable tips and ticks for founders and investors.
        </p>
        <section className="mt-20">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2">{displayArticles()}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
