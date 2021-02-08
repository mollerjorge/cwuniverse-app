import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Moment from 'react-moment'
import { fetchAPI } from 'lib/api'
import Image from 'components/Image'
import Seo from 'components/seo'
import { getStrapiMedia } from 'lib/media'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  }

  const HOST_STRAPI = 'http://localhost:1337'

  return (
    <div>
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

        <div className='pt-28'>
          <div
            className='w-full bg-cover bg-center'
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16, 21, 39, 0.8), rgba(16, 21, 39, 0.8)), url(${imageUrl})`,
              height: '400px'
            }}
          >
            <div className='container flex flex-col justify-center items-center py-20'>
              <span className='uppercase font-normal font-lato text-white text-lg border-2 border-gray-300 rounded-md px-2 antialiased'>
                {article?.category?.name}
              </span>
              <h1 className='text-4xl my-10 antialiased font-raleway text-white font-normal max-w-4xl text-center'>
                {article.title}
              </h1>
              <p className='text-white antialiased'>
                <Moment format='MMMM Do YYYY'>{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
        <main className='article container pt-40 max-w-5xl antialiased leading-8 text-gray-800'>
          <ReactMarkdown
            source={article.content}
            escapeHtml={false}
            transformImageUri={(uri) => {
              return `${process.env.STRAPI_HOST || HOST_STRAPI}${uri}`
            }}
          />
        </main>

        <div className='uk-width-expand'>
          <p className='uk-margin-remove-bottom'>By {article?.author?.name}</p>
          <p className='uk-text-meta uk-margin-remove-top'>
            <Moment format='MMM Do YYYY'>{article?.published_at}</Moment>
          </p>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // const articles = await fetchAPI('/articles')

  // return {
  //   paths: articles.map((article) => ({
  //     params: {
  //       slug: article.slug
  //     }
  //   })),
  //   fallback: false
  // }
  return {
    paths: [{ params: { slug: 'abc'}}],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // const articles = await fetchAPI(
  //   `/articles?slug=${params.slug}&status=published`
  // )
  // const categories = await fetchAPI('/categories')

  // return {
  //   props: { article: articles[0], categories },
  //   revalidate: 1
  // }

  return { 
    props: {
      article: {},
      categories: {},
      revalidate: 1,
    }
  }
}

export default Article
