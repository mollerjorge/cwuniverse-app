import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

const Layout = ({ children }) => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/cropped-clockwork-32x32.png" sizes="32x32"></link>
        <link rel="icon" href="/images/cropped-clockwork-192x192.png" sizes="192x192"></link>
        <link
          rel="shortcut icon"
          href="/images/cropped-clockwork-192x192.png"
          sizes="192x192"
        ></link>
        <link rel="apple-touch-icon" href="/images/cropped-clockwork-180x180.png"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <meta name="msapplication-TileImage" content="/images/cropped-clockwork-270x270.png"></meta>
        <meta property="og:site_name" content="Clockwork | Clockwork Universe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Clockwork | Private Investment Intelligence Software for Founders and Investors"
        />
        <meta
          property="og:description"
          content="Clockwork powers modern investor relations. Improving transparency to drive results for founders and investors alike."
        />
        <meta property="og:url" content="https://www.clockwork.app/" />
        <meta
          property="og:image"
          content="https://www.clockwork.app/images/clockwork-share-image_2x.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:secure_url"
          content="https://www.clockwork.app/images/clockwork-share-image_2x.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Clockwork | Private Investment Intelligence Software for Founders and Investors"
        />
        <meta
          name="twitter:description"
          content="Clockwork powers modern investor relations. Improving transparency to drive results for founders and investors alike."
        />
        <meta
          name="twitter:image"
          content="https://www.clockwork.app/images/clockwork-share-image_2x.png"
        />

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
      </Head>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

export default Layout
