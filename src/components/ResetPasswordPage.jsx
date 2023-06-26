import { useState } from "react";
import logo from "./Bee1.png";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      bgImage={
        "https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      }
      bgPosition="center"
      bgRepeat="no-repeat"
      h="800px"
    >
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"120px"}>
        <center>
        <a href="/">
          <img src={logo} alt="Logo" width="300px" />
          </a>
        </center>
        <Box
          m="auto"
          borderWidth="3px"
          borderRadius="md"
          borderColor={"black"}
          p={6}
          w={"50%"}
        >
          <Heading as="h2" size="lg" mb={6} textAlign={'center'}>
            Reset your password
          </Heading>
          <Text mb={6}>
            Enter the email address associated with your account and we'll send
            you instructions to reset your password.
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" mb={6}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                borderColor={"black"}
              />
            </FormControl>
            <Button type="submit" colorScheme="gray" mb={6} textColor={"black"} variant={'outline'} borderColor={'black'}>
              Reset password
            </Button>
          </form>
          <Text>
            Remember your password?{" "}
            <Link href="/login" textColor={'teal'}>
              Log in here <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
