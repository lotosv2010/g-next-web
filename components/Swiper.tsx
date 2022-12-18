import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import { baseURL } from '../axios.config'

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`

const CarouselItem = styled.div`
position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`

export default function Swiper({ swiper }: any) {
  return (
    <>
      <Carousel css={swiperContainer} showArrows={false} showIndicators={false} showStatus={false}>
        {
          swiper.map( ({id, description, url, title, vid}: any) => {
            return <CarouselItem key={id}>
              <img src={url} />
              <Box>
                <Heading as="h2" size="lg">{title}</Heading>
                <Text>{description}</Text>
                <Button colorScheme="red">
                  <Link href={'/detail/[id]'} as={`/detail/${vid}`} legacyBehavior><a>CHECK DETAIL</a></Link>
                </Button>
              </Box>
            </CarouselItem>
          })
        }
      </Carousel>
    </>
  );
}

export async function loadSwiper() {
  return await axios.get('/api/swiper', { baseURL });
}