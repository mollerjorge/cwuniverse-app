import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
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
          <meta
            name="msapplication-TileImage"
            content="/images/cropped-clockwork-270x270.png"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window.intercomSettings = {
                app_id: '${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}',
                alignment: 'right',
                background_color: '#214b7d',
                action_color: '#214b7d',
                custom_launcher_selector: '#intercom-custom-launcher',
              }
              ;(function () {
                var w = window
                var ic = w.Intercom
                if (typeof ic === 'function') {
                  ic('reattach_activator')
                  ic('update', w.intercomSettings)
                } else {
                  var d = document
                  var i = function () {
                    i.c(arguments)
                  }
                  i.q = []
                  i.c = function (args) {
                    i.q.push(args)
                  }
                  w.Intercom = i
                  var l = function () {
                    var s = d.createElement('script')
                    s.type = 'text/javascript'
                    s.async = true
                    s.src = 'https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}'
                    var x = d.getElementsByTagName('script')[0]
                    x.parentNode.insertBefore(s, x)
                  }
                  if (w.attachEvent) {
                    w.attachEvent('onload', l)
                  } else {
                    w.addEventListener('load', l, false)
                  }
                }
              })()
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
