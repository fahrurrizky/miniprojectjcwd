import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
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
    <Box
      maxW={{ base: '90%', md: '80%', lg: '50%' }}
      m="auto"
      borderWidth="1px"
      borderRadius="md"
      p={6}
    >
      <Heading as="h2" size="lg" mb={6}>
        Change password
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="currentPassword" mb={3}>
          <FormLabel>Current password</FormLabel>
          <Input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="newPassword" mb={3}>
          <FormLabel>New password</FormLabel>
          <Input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="confirmNewPassword" mb={6}>
          <FormLabel>Confirm new password</FormLabel>
          <Input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mb={6}>
          Change password
        </Button>
      </form>
      <Text>
        Need help? <a href="/contact-us">Contact us</a>.
      </Text>
    </Box>
  );
};

export default ChangePasswordForm;
