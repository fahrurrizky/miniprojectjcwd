import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import { Link as LinkChakra,} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import logo from "./Bee1.png";

const VerificationPage = () => {
  // const location = useLocation();
  // const token = new URLSearchParams(location.search).get("token");
  const url = window.location.href.split("/");
  const token = url[url.length - 1];

  const handleVerify = async () => {
    try {
      const response = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Account verified successfully");
        // Perform any additional actions after successful verification
      } else {
        console.log("Failed to verify account");
        // Handle verification failure
      }
    } catch (error) {
      console.log("Error verifying account:", error);
      // Handle error
    }
  };

  // const handleResend = () => {
  //   console.log("Resending verification email...");
  // };

  return (
    <Box
      // pt={'100'}
      // bgImage={
      //   "https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      // }
      // bgPosition="center"
      // bgRepeat="no-repeat"
      // bgImg={'white'}
      // bg="transparent" opacity={0.18}
      // h="800px"
    >
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"120px"}>
        {/* <center>
          <a href="/">
            <img src={logo} alt="Logo" width="300px" />
          </a>
        </center> */}
        <Box
          maxW={{ base: "90%", md: "80%", lg: "50%" }}
          m="auto"
          borderWidth="3px"
          borderRadius="md"
          borderColor={"black"}
          p={6}
        >
          <Heading as="h2" size="lg" mb={6} textAlign={"center"}>
            Verify your email
          </Heading>
            <Text mb={6}>
              A verification email has been sent to your email address. Please
              follow the instructions in the email to verify your account.
            </Text>
            <center>
            <Button
              colorScheme="teal"
              onClick={handleVerify}
              mb={6}
              width="80"
              // textColor={"black"}
              // variant={"outline"}
              // borderColor={"black"}
            >
              Verify
            </Button>
            </center>
          {token ? null : (
            <Button
              colorScheme="gray"
              onClick={() => handleVerify()}
              mb={6}
              textColor={"black"}
              variant={"outline"}
              borderColor={"black"}
            >
              Verification email
            </Button>
          )}
          <Text>
            Didn't receive the email? Check your spam folder or{" "}
            <LinkChakra textColor={'teal'}>
            <Link to="/contact-us">
              contact us <ExternalLinkIcon mx="2px" />
            </Link>
            </LinkChakra>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationPage;
