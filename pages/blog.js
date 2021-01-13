import React from 'react'
import Card from '../components/Card'

const Blog = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div>
      <div className='uk-child-width-1-2@s' data-uk-grid='true'>
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card article={article} key={`article__left__${article.slug}`} />
            )
          })}
        </div>
        <div>
          <div className='uk-child-width-1-2@m uk-grid-match' data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
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