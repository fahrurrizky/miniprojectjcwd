import React, { useState } from 'react';
import logo from '../components_landingpage/Bee1.png';
import { Link } from 'react-router-dom';
import LoginForm from '../components_landingpage/LoginForm';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasMinLength = formData.password.length >= 6;
    const hasSymbol = /[!@#$%^&*]/.test(formData.password);
    const hasUppercase = /[A-Z]/.test(formData.password);

    if (hasMinLength && hasSymbol && hasUppercase) {
      // Password is valid
      setIsValid(true);
      console.log(formData);
      // Perform further actions
    } else {
      // Password is invalid
      setIsValid(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpenModal} variant={''}>
        Get Started
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent height={"750px"} borderRadius={"9"}>
          <ModalHeader>Create an account</ModalHeader>
          <ModalBody>
            <center>
              <img src={logo} alt="Logo" width="50%" />
            </center>
            <Box
              borderWidth="6px"
              borderRadius="md"
              p={3}
            >
              <form onSubmit={handleSubmit}>
                <FormControl id="firstName" mb={3}>
                  <FormLabel>First name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="lastName" mb={3}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="email" mb={3}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="password" mb={6}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <Button
                    variant="link"
                    colorScheme="blue"
                    size="sm"
                    mt={2}
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </Button>
                </FormControl>
                {!isValid && (
                  <Text color="red.500" mb={4}>
                    Password should have at least 6 characters, at least 1 symbol, and at least 1 uppercase letter.
                  </Text>
                )}
                <Button type="submit" colorScheme="blue" mb={6}>
                  Create account
                </Button>
              </form>
              <Text>
                Already have an account?{' '}
                <Link to="/login" textColor={'red'}>
                  Log in here
                </Link>
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter mt={'-10'}>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RegistrationForm;
