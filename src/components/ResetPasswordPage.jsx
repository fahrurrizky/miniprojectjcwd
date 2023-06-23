import { useState } from 'react';
import logo from '../components/components_landingpage/Bee1.png';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

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

  return (
    <Box>
      <center><img src={logo} alt="Logo" width='30%'/></center>
    <Box
      maxW={{ base: '90%', md: '80%', lg: '30%' }}
      m="auto"
      borderWidth="6px"
      borderRadius="md"
      p={6}
      mt={30}
    >
      <Heading as="h2" size="lg" mb={6}>
        Reset your password
      </Heading>
      <Text mb={6}>
        Enter the email address associated with your account and we'll send you
        instructions to reset your password.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={6}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mb={6}>
          Reset password
        </Button>
      </form>
      <Text>
        Remember your password? <a href="/login">Log in here</a>.
      </Text>
    </Box>
    </Box>
  );
};

export default ResetPasswordPage;
