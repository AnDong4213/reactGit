import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* function withLog(Comp) {
  return props => {
    console.log(props)
    return <Comp {...props} />
  }
} */

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // useful for wrapping the whole react tree
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          // useful for wrapping in a per-page basis
          enhanceComponent: Component => Component,
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`.test {color: red}`}</style>
        </Head>
        <body className="test">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
// // <title>My App</title>    <title> should not be used in _document.js's <Head>.
