import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';

export default function HotNes() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://minpro-blog.purwadhikabootcamp.com/api/blog?_limit=5&_sort=createdAt:DESC'
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {blogs.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt="10">
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="foto"
              minW="90px"
              maxW="90px"
              mr="5"
            />
          </Box>
          <Link to={""}>
            <Heading size="sm" mb="2">
              {blog.title}
            </Heading>
            <Text fontSize="sm" as="i">
              {blog.User.username}
            </Text>
            <br></br>
            <Text fontSize="sm" as="i">
              {blog.Category.name}
            </Text>
            <br></br>
            <Text fontSize="sm" as="i">
              {blog.createdAt}
            </Text>
          </Link>
        </Flex>
      ))}
    </Box>
  );
}
