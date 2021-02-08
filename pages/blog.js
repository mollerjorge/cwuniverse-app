import React from 'react'
import Head from 'next/head'
import Card from 'components/Card'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { fetchAPI } from 'lib/api'
import Image from 'components/Image'
import Link from 'next/link'

const Blog = ({ articles, categories }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)
  console.log(articles, categories)

  const displayArticles = () => {
    return articles.map((article) => {
      return (
        <Link as={`/article/${article.slug}`} href='/article/[id]'>
          <div className='flex flex-col rounded-md overflow-hidden'>
            <Image image={article.image} />
            <p className='antialiased mt-5 font-raleway text-gray-600 text-sm'>
              {article.category?.name}
            </p>
            <h2 className='antialiased font-raleway text-gray-900 mt-2 tracking-normal font-light text-3xl mb-5'>
              {article.title}
            </h2>
            <p className='antialiased font-lato text-gray-700 text-base'>
              {article.description}
            </p>
          </div>
        </Link>
      )
    })
  }

  return (
    <div>
      <Head>
        <title>Clockwork Universe</title>
        <meta
          name='description'
          content='Clockwork universe, investment intelligence app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='container py-20 pt-40'>
        <p className='font-raleway text-gray-700 antialiased uppercase tracking-wider mb-10'>
          News and resources
        </p>
        <h1 className='text-6xl antialiased font-raleway font-normal mb-10'>
          Our Blog
        </h1>

        <p className='antialized font-light text-lg text-gray-700 '>
          Follow Clockwork’s new blog to find out about strategic insights,
          practical ideas and actionable tips and ticks for founders and
          investors.
        </p>
        <section className='mt-20'>
          <div className='grid grid-cols-2'>{displayArticles()}</div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI('/articles?status=published'),
    fetchAPI('/categories'),
    fetchAPI('/homepage')
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1
  }
}

export default Blog
