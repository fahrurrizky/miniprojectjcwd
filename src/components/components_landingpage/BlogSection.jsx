import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

export default function BlogSection() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };
  return (
    <Box>
      <Flex spacing={9} align="start" mt={"5"}>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Dan Abramov"
            minW="300px"
            maxW="300px"
            mr={"5"}
          />
        </Box>

        <Text to="/category/technology">
          <Text mb={"2"}>____ Andre Widyatmoko</Text>
          <Heading as={'u'} size="md" fontFamily={"initial"} mb={"1"}>
            Business
          </Heading>
          <Link to="/">
          <Heading size="md" fontFamily={"initial"} mb={"1"}>
            The Definitive Helmut Newton Photobook Is Reissued-in Miniature-for
            His 100th Birthday
          </Heading>
          </Link>
          <Text
            fontSize="sm"
            mb={"1"}
            textColor={"gray.500"}
            fontFamily={"initial"}
          >
            The photographer, whose provocative work rose to prominence in the
            1970s against a backdrop of the second-wave feminist movement. was
            one of the most impacttu visual creators of his time.
          </Text>
          <Text
            fontSize={"xs"}
            as="u"
            textColor={"gray.500"}
            fontFamily={"initial"}
          >
            March 6, 2019
          </Text>{" "}
          <br />
            <Button
              leftIcon={isSaved ?  <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={'unstyled'}
              size={'xs'}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          {/* <Text fontSize={"lg"} fontFamily={"initial"}>
            Business
          </Text> */}
        </Text>
      </Flex>
    </Box>
  );
}
