import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import { MdMovie } from 'react-icons/md'
import Link from 'next/link'
import { baseURL } from '../axios.config'

export default function Movie({ movies, title = '电影' }: any) {

  return (
    <Box maxW='1200px' mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">{title}</Heading>
      </HStack>
      <HStack mt="20px" spacing={3}>
        {
          movies.map(({id, vid, url, title}: any) => (
            <Box w="290px" key={id}>
              <Link href={'/detail/[id]'} as={`/detail/${vid}`} legacyBehavior>
                <a>
                  <Image src={url} />
                  <Text mt="10px">{title}</Text>
                </a>
              </Link>
            </Box>
          ))
        }
      </HStack>
    </Box>
  )
}

export async function loadMovie() {
  return await axios.get('/api/movie', { baseURL });
}