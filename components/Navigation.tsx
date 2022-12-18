import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'

function Navigation() {
  return (
    <Box h="52px" bgColor="#202020" color="#fff">
      <HStack h="100%" spacing={2} justifyContent="center" alignItems="center">
        <Link href="#" legacyBehavior><a>影片</a></Link>
        <Link href="#" legacyBehavior><a>漫画</a></Link>
        <Link href="#" legacyBehavior><a>电影</a></Link>
        <Link href="#" legacyBehavior><a>电视</a></Link>
        <Link href="#" legacyBehavior><a>新闻</a></Link>
      </HStack>
    </Box>
  )
}

export default Navigation