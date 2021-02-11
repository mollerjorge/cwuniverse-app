import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="icon"
            href="https://cdn.clockwork.app/wp-content/uploads/2020/06/11233244/cropped-clockwork-32x32.png"
            sizes="32x32"
          ></link>
          <link
            rel="icon"
            href="https://cdn.clockwork.app/wp-content/uploads/2020/06/11233244/cropped-clockwork-192x192.png"
            sizes="192x192"
          ></link>
          <link
            rel="apple-touch-icon"
            href="https://cdn.clockwork.app/wp-content/uploads/2020/06/11233244/cropped-clockwork-180x180.png"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <meta
            name="msapplication-TileImage"
            content="https://cdn.clockwork.app/wp-content/uploads/2020/06/11233244/cropped-clockwork-270x270.png"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
