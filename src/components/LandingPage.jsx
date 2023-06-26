import React, { useState, useEffect } from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import CaptionCarousel from "./components_landingpage/CarouselBanner";
import Footer from "./components_landingpage/Footer";
import Categories from "./components_landingpage/sectionCategori";
import AfterSignin from "./components_landingpage/AfterSignin";
import BeforeSignin from "./components_landingpage/BeforeSignin";

function LandingPage() {
  // const [issign, setIssign] = useState(false);

  return (
    <Box>
      {/* <Box>{issign ? <AfterSignin /> : <BeforeSignin />}</Box> */}
      <Box bg="white" h="800px" bgPosition="center" bgRepeat="no-repeat">
        <Container maxW="container.xl" h="100%">
          <Flex px={"2"} py={"100"}>
            <Box mt={"150"} boxSize={"200%"} fontWeight={"extrabold"}>
              <Text fontSize={"40"}>
                ..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....
              </Text>
              <br></br>
              <Text fontSize={"50px"}>
                Diligence Is The Mother Of Good Fortune.
                <br />
                <Button variant={"outline"} colorScheme="">
                  Read More
                </Button>
              </Text>
            </Box>
            <Spacer />
            <Box boxSize={"150%"} py={"10"}>
              <Image
                src="https://images.unsplash.com/photo-1522120691812-dcdfb625f397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                // ml={"6"}
                // width="150%"
                height={"600"}
              />
            </Box>
            <Box pt={"100"} w={"900"} boxSize={"200%"} ml={"10"}>
              <Text fontSize={"15px"} as="cite" fontWeight={"extrabold"}>
                _______________________________We are repeatedly do, <br />
                Exellence, __________Then is not an act but a Habit. <br />
                "Aristoteles"
              </Text>
              <br />
              <br />
              <br />
              <Image
                src="https://images.unsplash.com/photo-1554498808-d3ae8f23540c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                px={"2"}
                width="90%"
                ml={"20"}
              />
              <br />
              <br />
              <Text
                fontSize={"13px"}
                as="cite"
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
                If you fail to control your own Mind, __________You may be sure
                you will control nothing else.
                <br />
                "Napoleon Hill"
              </Text>
              ________________________________
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box mt={'20px'}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Box height="90px">
              <Heading ml={"60px"} fontSize={"45px"} fontStyle={"oblique"}>
                Latest Article__
              </Heading>
              <hr
                width={"200px"}
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 3,
                  borderColor: "#000000",
                  borderWidth: 0.5, // Mengatur ketebalan garis menjadi 2 piksel
                }}
              />
              <Text ml={"60px"}>
                |&nbsp;&nbsp;Quis ipsum suspendisse ultrices gravida.
              </Text>
            </Box>
          </GridItem>
          <GridItem display={"flex"} justifyContent={"flex-end"}>
            <Box>
              <hr
                width={"200px"}
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 3,
                  borderColor: "#000000",
                  borderWidth: 0.5, // Mengatur ketebalan garis menjadi 2 piksel
                }}
              />
              <Heading
                fontSize={"20px"}
                fontStyle={"oblique"}
                mt={"20px"}
                ml={"55px"}
              >
                <Button variant={""} fontStyle={"oblique"}>
                  View All__
                </Button>
              </Heading>
            </Box>
          </GridItem>
        </Grid>
        {/* <Categories/> */}
        <Box mt={'30px'}>
        <CaptionCarousel />
        </Box>
      </Box>

      <Heading ml={"60px"} fontSize={"45px"} fontStyle={"oblique"} mt={'50px'}>
          Latest Article__
        </Heading>
        <hr
          width={"200px"}
          style={{
            color: "black",
            backgroundColor: "black",
            height: 3,
            borderColor: "#000000",
            borderWidth: 0.5, // Mengatur ketebalan garis menjadi 2 piksel
          }}
        />
        <Text ml={"60px"}>
          |&nbsp;&nbsp;Quis ipsum suspendisse ultrices gravida.
        </Text>
      <Box py={"10px"} px={"50px"} >
        <Box
          bgImage={
            "https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          }
          bgPosition="center"
          bgRepeat="no-repeat"
          h="700px"
          position="relative"
        >
          <Box position="absolute" backgroundColor={'RGBA(0, 0, 0, 0.64)'} zIndex={'10'} mt={290} ml={20} maxW={'370px'} maxH={'550px'} p={'7'} >
            <Heading display={'flex'} justifyContent={'flex-start'} textColor={'white'}>
              Shoot For The Moon And If You Miss You Will Still Be Among The Stars
            </Heading>
            <br/>
            <Text textColor={'white'}>
            Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes
            Read MoreMet to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, 
            </Text>
            <Button backgroundColor={'white'} mt={'3'} size={'sm'}>
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
     
      {/* <Container maxW="container.xl" py={12}>
        <Heading mb={6}>Categories</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1025/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Travel
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Find travel inspiration and tips from our bloggers.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={4}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1035/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Food
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Explore different cuisines and recipes from our food bloggers.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={4}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="blackAlpha.900"
                >
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software
                development.
              </Text>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                mt={9}
              >
                View Articles
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container> */}
      <Footer />
    </Box>
  );
}

export default LandingPage;
