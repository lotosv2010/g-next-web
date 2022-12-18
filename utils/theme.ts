import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '12px',
      }
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
})

export default theme
