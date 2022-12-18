import { Box, Divider, Heading, Text, Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import axios from 'axios'
import Layout from '../../components/Layout'
import { baseURL } from '../../axios.config'

const detailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`

export default function Detail({ detail }: any) {

  return (
    <Layout>
      <Box maxW={1200} mx="auto" mt="70px">
        <Heading as="h2" size="xl">
          {detail.title}
        </Heading>
        <Heading as="h4" size="lg" color="gray.500" fontWeight="light" mt="10px">
          {detail.sub}
        </Heading>
        <Divider mt="10px" />
        <Flex justify="space-between" alignItems="center" h="42px">
          <Text>{detail.author}</Text>
          <Text>{detail.publish}</Text>
        </Flex>
        <Divider />
        <Box css={detailContainer} dangerouslySetInnerHTML={{__html: detail.content}} />
      </Box>
    </Layout>
  )
}

// 获取到用户能够访问到的所有的路有参数
export async function getStaticPaths() {
  const { data }: any = await axios.get('/api/videos', { baseURL })
  const paths = data.map((id: string) => ({ params: { id } }))
  return {
    paths,
    fallback: false
  }
}

// 根据参数获取其对应的数据
export async function getStaticProps({ params }: any) {
  const { data: detail } = await axios.get('/api/detail', {
    params,
    baseURL
  })
  return {
    props: {
      detail
    }
  }
}
