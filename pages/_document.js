import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossorigin
          ></link>

          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
            rel='stylesheet'
            media='print'
            onload="this.onload=null;this.removeAttribute('media');"
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap'
            rel='stylesheet'
            media='print'
            onload="this.onload=null;this.removeAttribute('media');"
          ></link>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
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
