import App from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'
import { getStrapiMedia } from '../lib/media'
import { fetchAPI } from '../lib/api'

import '../styles/tailwind.css'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          id='ubermenu-raleway-css'
          href='//fonts.googleapis.com/css?family=Raleway%3A%2C300%2C400%2C700&amp;ver=5.6'
          type='text/css'
          media='all'
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"></link>
        <link rel='shortcut icon' href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI('/global')
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
