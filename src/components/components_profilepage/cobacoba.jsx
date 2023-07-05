import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Button, Grid, Input, useToast, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalFooter, ModalHeader } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [userData, setUserData] = useState({ username: '', imgProfile: '' });
  const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://minpro-blog.purwadhikabootcamp.com/api/auth', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { username, imgProfile } = res.data;
        setUserData({ username, imgProfile });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('file', selectedFile);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        'https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded',
        formData,
        config
      );
      console.log(response.data);

      toast({
        title: 'Profile updated successfully! Please Refres the Browser',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

      // Handle response
    } catch (error) {
      toast({
        title: 'Something went wrong!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      console.log(error);
      // Error Handle
    }
  };

  const handleResetPassword = () => {
    navigate('/changepassword');
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const openProfilePictureModal = () => {
    setIsProfilePictureModalOpen(true);
  };

  const closeProfilePictureModal = () => {
    setIsProfilePictureModalOpen(false);
  };

  return (
    <Box p={4} mt={20}>
      <Flex align="center" mb={4}>
        {userData.imgProfile && (
          <Box position="relative" display="inline-block" cursor="pointer">
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${userData.imgProfile}`}
              alt={userData.username}
              style={{ width: '200px', height: '200px', borderRadius: '50%' }}
              onClick={openProfilePictureModal}
            />
            <Text
              position="absolute"
              bottom="-10px"
              left="50%"
              transform="translateX(-50%)"
              bg="gray.800"
              color="white"
              fontSize="sm"
              p={1}
              borderRadius="md"
              opacity="0.8"
              cursor="pointer"
              _hover={{ opacity: 1 }}
              onClick={openProfilePictureModal}
            >
              See Profile Picture
            </Text>
          </Box>
        )}
        <Text ml={4} fontSize="2xl" fontWeight="bold">
          {userData.username}
        </Text>
      </Flex>

      {/* Modal for Profile Picture */}
      <Modal isOpen={isProfilePictureModalOpen} onClose={closeProfilePictureModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {userData.imgProfile && (
              <Image
                src={`https://minpro-blog.purwadhikabootcamp.com/${userData.imgProfile}`}
                alt={userData.username}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={closeProfilePictureModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box mt={4}>
        <Text fontSize="lg">Upload Photo</Text>
        <Flex mt={2}>
          <Input type="file" onChange={handleAvatarUpload} />
          <Button ml={2} colorScheme="teal" size="sm" onClick={handleProfileUpdate}>
            Upload
          </Button>
        </Flex>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
          <Button
            colorScheme="teal"
            size="md"
            width="100%"
            onClick={() => navigate('/profileupdate')}
          >
            Edit Profile
          </Button>
        </Box>

        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
          <Button 
            colorScheme="teal" 
            size="md" 
            width="100%"
            onClick={() => navigate('/myartikel')}>
            My Article
          </Button>
        </Box>

        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
          <Button 
            colorScheme="teal" 
            size="md" 
            width="100%"
            onClick ={() => navigate('/myfavorite')}>
            Favorite Article
          </Button>
        </Box>

        <Box bg="white" boxShadow="md" p={4} borderRadius="md">
          <Button
            colorScheme="teal"
            size="md"
            width="100%"
            onClick={handleResetPassword}
          >
            Change Password
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProfilePage;