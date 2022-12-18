import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../utils/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
