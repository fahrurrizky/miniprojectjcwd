import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

export default function FavBlog () {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav?page=1&orderBy=total_fav&sort=DESC&id_cat=3&search=Tesla&size=10'
        );
        setBlogs(response.data.result);
        console.log("ini blog",blogs)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {blogs.map((blog) => (
        <Box key={blog.id}>
          <Image
            src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
            alt={blog.username}
            minW="350px"
            maxW="30px"
            mr="5"
          />
          <Link to={""}>
            <Heading size="sm" mt="2">
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
        </Box>
      ))}
    </Box>
  );
};
