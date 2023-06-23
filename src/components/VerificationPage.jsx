import { Box, Heading, Text, Button } from '@chakra-ui/react';

const VerificationPage = () => {
  const handleResend = () => {
    console.log('Resending verification email...');
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
        Verify your email
      </Heading>
      <Text mb={6}>
        A verification email has been sent to your email address. Please follow
        the instructions in the email to verify your account.
      </Text>
      <Button colorScheme="blue" onClick={handleResend} mb={6}>
        Resend verification email
      </Button>
      <Text>
        Didn't receive the email? Check your spam folder or{' '}
        <a href="/contact-us">contact us</a>.
      </Text>
    </Box>
  );
};

export default VerificationPage;
