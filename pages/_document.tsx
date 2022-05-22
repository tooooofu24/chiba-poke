import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
      </body>
    </Html>
  )
}
