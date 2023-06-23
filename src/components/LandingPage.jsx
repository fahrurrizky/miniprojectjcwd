import React, {useState, useEffect} from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import CaptionCarousel from './components_landingpage/CarouselBanner';
import Footer from './components_landingpage/Footer';
import Categories from './components_landingpage/sectionCategori';
import AfterSignin from './components_landingpage/AfterSignin'
import BeforeSignin from './components_landingpage/BeforeSignin'




function LandingPage() {
  const [issign, setIssign] = useState (true)

  return (
    <Box>
      <Box>
      {issign ? <AfterSignin/> : <BeforeSignin/>}
    </Box>
      <Box 
      bg="red.100" h="800px"
      bgImage="url('https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      >
        <Container maxW="container.xl" h="100%">
          <SimpleGrid columns={1} h="100%">
            <Box d="flex" justifyContent="center" alignItems="center">
              <CaptionCarousel />
            </Box>
            <Box d="flex" alignItems="center" textAlign="center">
              <Stack spacing={3}>
                <Heading size="1xl" color="white" mt={"30px"}>
                  Latest Articles
                </Heading>
                <Text fontSize="4xl" color="white">
                  Read the most recent articles from our bloggers.
                </Text>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" variant="outline" w={"200px"} margin="auto">
                  View Articles
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="container.xl" py={12}>
        <Categories/>
        {/* <Heading mb={6}>Categories</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1025/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Travel
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Find travel inspiration and tips from our bloggers.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={4}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1035/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Food
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Explore different cuisines and recipes from our food bloggers.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={4}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://picsum.photos/id/1015/300/200" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontSize="xl" fontWeight="semibold" color="blackAlpha.900">
                  Technology
                </Text>
              </Box>
              <Text mt={4} color="blackAlpha.800">
                Read articles related to new technology and software development.
              </Text>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mt={9}>
                View Articles
              </Button>
            </Box>
          </Box>
        </SimpleGrid> */}
      </Container>
      <Footer/>
    </Box>
  );
}

export default LandingPage;
