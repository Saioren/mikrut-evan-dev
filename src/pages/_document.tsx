import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Evan Mikrut',
                jobTitle: 'Software Developer',
                url: 'https://mikrutevan.dev',
                sameAs: [
                  'https://www.linkedin.com/in/evan-mikrut-799190283/',
                  'https://github.com/saioren',
                  'https://x.com/mikrutevan1',
                ],
              }),
            }}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gayathri:wght@100;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="google-site-verification"
            content="t3vsZ5rT8J41Vlajyy3E1J8KUlF--zNxZgb7QZAgCGE"
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
