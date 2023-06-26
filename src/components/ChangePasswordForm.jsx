import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "./components_landingpage/Bee1.png";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const PasswordChangeForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"90px"}>
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
          w={"30%"}
        >
          <Heading as="h2" size="lg" mb={6} textAlign={"center"}>
            Change your password
          </Heading>
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              currentPassword: Yup.string().required("Current Password is required"),
              newPassword: Yup.string()
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                  "Password must contain at least 6 characters, 1 symbol, and 1 uppercase letter"
                )
                .required("New Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
                .required("Confirm Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <FormControl id="currentPassword" mb={6}>
                <FormLabel>Current Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="currentPassword"
                    as={Input}
                    borderColor={"black"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      variant="link"
                      colorScheme="black"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon boxSize={4} />
                      ) : (
                        <ViewIcon boxSize={4} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="currentPassword" component={Text} color="red" />
              </FormControl>
              <FormControl id="newPassword" mb={6}>
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    as={Input}
                    borderColor={"black"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      variant="link"
                      colorScheme="black"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon boxSize={4} />
                      ) : (
                        <ViewIcon boxSize={4} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="newPassword" component={Text} color="red" />
              </FormControl>
              <FormControl id="confirmPassword" mb={6}>
                <FormLabel>Confirm New Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    as={Input}
                    borderColor={"black"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      variant="link"
                      colorScheme="black"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon boxSize={4} />
                      ) : (
                        <ViewIcon boxSize={4} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="confirmPassword" component={Text} color="red" />
              </FormControl>
              <Button
                type="submit"
                colorScheme="gray"
                mb={6}
                variant={"outline"}
                borderColor={"black"}
              >
                Change Password
              </Button>
            </Form>
          </Formik>
          <Text>
            Remember your password?{" "}
            <Link href="/login" color="teal">
              Log in here <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordChangeForm;
