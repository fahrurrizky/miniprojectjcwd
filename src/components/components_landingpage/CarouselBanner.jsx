import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { Link} from "react-router-dom"
import axios from "axios";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog"
      );
      setArticles(response.data.result);
    } catch (error) {
      console.error("error fetching articles", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const sortedArticlesData = articles.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const limitedArticlesData = sortedArticlesData.slice(0, 4);

  return (
    <Box 
    position="relative" 
    height="600px" 
    width="100%" 
    overflow="hidden" 
    mt={"20px"} 
    px={'50px'}
    b
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
      {limitedArticlesData.map((article) => (
          <Box
            key={article.id}
            height="1xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${article.imageURL}`}
            g="transparent" opacity={0.7}
          >
            <Container size="xl" height="600px" position="relative" textAlign={"center"} textColor={'teal'}>
              <Stack
                spacing={6}
                w="full"
                maxW="lg"
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
              <Link to='/article/:id' >
                <Heading fontSize='5xl' >
                  {article.title}
                </Heading>
              </Link>
                <Text fontSize='3xl' color="teal" fontWeight={"bold"}>
                {article.User.username}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
