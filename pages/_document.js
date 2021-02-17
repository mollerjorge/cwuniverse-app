import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const GA_MEASUREMENT_ID = 250620077 
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
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
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

              
                WebFontConfig = {
                  google: { families: [ 'Lato:300,400', 'Raleway:400,500,600' ] }
                };
                (function() {
                  var wf = document.createElement('script');
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                  wf.type = 'text/javascript';
                  wf.async = 'true';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(wf, s);
                })();
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
