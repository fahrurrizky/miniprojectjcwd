import React from "react";
import photo from "./pp.jpeg";
import {
  Box,
  Flex,
  Avatar,
  Button,
  HStack,
  VStack,
  Stack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
  // useColorModeValue,
} from "@chakra-ui/react";
import { LuEdit } from "react-icons/lu";
import { IoNotificationsOutline, IoCreateOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { ChevronRightIcon } from "@chakra-ui/icons";
import logo from "./Bee2.png";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };
  return (
    <Box>
      <Flex
        // py={1}
        px={"10"}
        align="center"
        position="fixed"
        w={"100%"}
        zIndex={"20"}
        bgColor="white"
        justifyContent={"space-between"}
      >
        {/* Logo */}
        <Flex>
          <a href="/">
            <img src={logo} alt="Logo" width="250px" />
          </a>
          <Flex ml={5} px={"200"}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex ml={"5"}>
          <Flex>
            {/* <Button variant="" mr={-3} fontSize={"15px"}>
              <IoCreateOutline size={30} /> Write
            </Button> */}
            <Button variant={"unstyled"} mr={"-2.5"}>
              <BsSearch onClick={onOpen} size={"22"} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Search</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input
                    placeholder="Search......."
                    borderColor={useColorModeValue("black.300", "white")}
                    borderRadius="5px"
                    size={"sm"}
                  />
                </ModalBody>
                <ModalFooter>
                  <button onClick={onClose}>Close</button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button variant="" mr={3}>
              <IoNotificationsOutline size={25} />
            </Button>
            <Menu isLazy>
              <MenuButton as={Button} size="sm" p={0} rounded="full" mt={"1"}>
                <Avatar size="sm" src={[photo]} />
              </MenuButton>
              <MenuList
                zIndex={5}
                border="2px solid"
                borderColor={useColorModeValue("gray.700", "gray.100")}
                boxShadow="4px 4px 0"
              >
                <Link
                  href="https://dev.to/m_ahmad"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                >
                  <MenuItem>
                    <VStack align="start">
                      <Text fontWeight="300">Samudra Biru</Text>
                      <Text fontSize="sm" color="gray.500">
                        @sam_
                      </Text>
                    </VStack>
                  </MenuItem>
                </Link>
                <MenuDivider />
                <MenuItem>
                  <Text fontWeight="300">Dashboard</Text>
                </MenuItem>
                <MenuItem>
                  <Text fontWeight="300">Create Post</Text>
                </MenuItem>
                <MenuItem>
                  <Text fontWeight="300">Reading List</Text>
                </MenuItem>
                <MenuItem>
                  <Text fontWeight="300">Settings</Text>
                </MenuItem>
                <MenuDivider />
                <Link>
                  <MenuItem>
                    <Text
                      onClick={handleLogout}
                      variant={"unstyled"}
                      fontWeight="300"
                      size={"md"}
                    >
                      Sign Out
                    </Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

const DesktopNav = () => {
  // const linkColor = useColorModeValue("gray.600", "gray.200");
  // const linkHoverColor = useColorModeValue("yellow.400", "white");
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={3}>
      {NAV_ITEMS.map((navItem) => (
        <Flex
          key={navItem.label}
          alignItems={"center"}
          fontSize={"sm"}
          alignContent={"center"}
        >
          {/* <IoCreateOutline size={30} /> */}
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={1}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                // color={linkColor}
                color={"black"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                // bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                // bg="transparent"
                // opacity={9}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "white" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: "Category",
    children: [
      {
        label: "Explore Design Work",
        // subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find you want",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Our story",
    href: "#",
  },
  {
    label: "Membership",
    href: "#",
  },
  {
    label: "Write",
    href: "/article",
    Icon: "IoCreateOutline",
  },
];
