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
        <Head />
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
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
