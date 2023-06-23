import { useState } from 'react';
import logo from '../components_landingpage/Bee1.png';
import RegistrationForm from '../components_landingpage/RegistrationForm';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpenModal} variant={''} textColor={"black"}>Sign In</Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent height={"700px"} borderRadius={"9"}>
          <ModalHeader>
            <center>
              <img src={logo} alt="Logo" width="90%" />
            </center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              // maxW={{ base: '90%', md: '80%', lg: '40%' }}
              width={"400px"}
              borderWidth="6px"
              borderRadius="md"
              p={4}
              mt={30}
            >
              <Heading as="h2" size="lg" mb={6}>
                Log in to your account
              </Heading>
              <form onSubmit={handleSubmit}>
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
                <Button type="submit" colorScheme="blue" mb={6}>
                  Log in
                </Button>
              </form>
              <Text>
                Forgot your password? <Link href="/reset-password">Reset Password</Link>.
              </Text>
              <Text>
                Don't have an account? <Link>Sign up here</Link>.
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            {/* Additional footer content can be added here */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoginForm;
