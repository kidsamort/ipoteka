/* eslint-disable */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang={'ru'}>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />

          <link rel='preconnect' href='https://fonts.gstatic.com'
                crossOrigin={''} />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
            rel='stylesheet' />
          <meta charSet='UTF-8' />

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