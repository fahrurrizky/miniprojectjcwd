import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Text,
  Link as LinkChakra,
} from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { ExternalLinkIcon } from "@chakra-ui/icons";
import logo from '../components/components_landingpage/Bee1.png';

const BloggingFeature = () => {
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [content, setContent] = useState('');
  const [previewImage, setPreviewImage] = useState(null); // New state for preview image

  const handleContent = (value) => {
    setContent(value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const allowedSizeInBytes = 2 * 1024 * 1024; // 2MB

    if (file.size > allowedSizeInBytes) {
      alert('File size must be maximum 2MB');
      event.target.value = '';
    } else {
      setPreviewImage(URL.createObjectURL(file)); // Set the preview image URL
    }
  };

  const handleCreateBlog = () => {
    // Check if any required fields are empty
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publicationDate = document.getElementById('publicationDate').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;

    if (!title || !author || !publicationDate || !category || !content) {
      setIsFormEmpty(true);
      return;
    }

    // Perform create blog logic
    setIsFormEmpty(false);
  };

  return (
    <Box py={100} width={'900px'} mx="auto" >
      {/* <center>
        <img src={logo} alt="Logo" width="30%" />
      </center> */}
      <Heading as="h2" size="lg" mb={6}>
        Create a Blog
      </Heading>
      {/* Form */}
      <Box borderWidth="1px" borderRadius="md" p={4}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" id="title" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Author</FormLabel>
          <Input type="text" id="author" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Date of publication</FormLabel>
          <Input type="date" id="publicationDate" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel alignContent={'center'}>Image</FormLabel>
          <Input
            type="file"
            variant={''}
            accept=".jpeg,.jpg,.png,.gif"
            onChange={handleImageChange}
          />
          {previewImage && <img src={previewImage} alt="Preview" width="200px" />}
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Category</FormLabel>
          <Input type="text" id="category" />
        </FormControl>

        <FormControl mb={9}>
          <FormLabel>News content</FormLabel>
          <div className="text-editor">
            <ReactQuill value={content} h={'200px'} onChange={handleContent} required></ReactQuill>
          </div>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel alignContent={'center'}>Video</FormLabel>
          <Input
            type="file"
            variant={''}
            accept=".jpeg,.jpg,.png,.gif"
            onChange={handleImageChange}
          />
          {previewImage && <img src={previewImage} alt="Preview" width="200px" />}
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Keywords</FormLabel>
          <Input type="text" />
        </FormControl>
        {isFormEmpty && (
          <Text color="red" mt={2}>
            Please fill in all required fields.
          </Text>
        )}
        <Button colorScheme="blue" mt={4} onClick={handleCreateBlog}>
          Create Blog
        </Button>
      </Box>

      {/* Message for non-verified users */}
      <Text mt={4}>
        You need to be a verified user to create a blog. Please{' '}
        <LinkChakra textColor={'teal'}>
        <Link to="/verification/:token">
          verify your account<ExternalLinkIcon mx="2px" />
        </Link>
        </LinkChakra>
      </Text>
    </Box>
  );
};

export default BloggingFeature;
