import Document, { Html, Head, Main, NextScript } from 'next/document'

import flush from "styled-jsx/server";
const dev = process.env.NODE_ENV !== "production";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="Jhonny Arana" property="og:title" />
          <meta name="author" content="Jhonny Arana" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          <meta
            name="description"
            content="Jhonny Arana - you can find me as @aranajhonny"
          />
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:description"
            content="Jhonny Arana - you can find me as @aranajhonny"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.ravenjs.com/3.16.0/raven.min.js"
            crossOrigin="anonymous"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `Raven.config(
                'https://6176e34da5544f52839ffd13766870c0@sentry.io/184648'
              ).install()`
            }}
          />
          {!dev ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-100351775-1', 'auto');
                ga('send', 'pageview');`
              }}
            />
          ) : null}
        </body>
      </Html>
    );
  }
}
