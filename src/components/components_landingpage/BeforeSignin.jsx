import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  // IconButton,
  Button,
  Stack,
  Icon,
  // Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Link as LinkChakra,
  // useDisclosure,
} from "@chakra-ui/react";
// import { PiUserCirclePlusFill } from "react-icons/pi";
// import { IoMdArrowDropdown } from "react-icons/io";

import {
  // HamburgerIcon,
  // CloseIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "./Bee2.png";
import { CiEdit } from "react-icons/ci";
// import LoginForm from '../components_landingpage/LoginForm';
// import RegistrationForm from '../components_landingpage/RegistrationForm';

export default function WithSubnavigation() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const { onToggle } = useDisclosure();
  const login = localStorage.getItem("token");

  return (
    <Box>
      <Flex
        // py={'1'}
        px={"10"}
        align={"center"}
        position={"fixed"}
        w={"100%"}
        zIndex={"20"}
        bgColor={"white"}
      >
        {/* logo */}
        <Flex>
          <Link to="/">
            <img src={logo} alt="Logo" width="250px" />
          </Link>
          <Flex ml={5} px={"185"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex direction={"row"} ml={"130"}>
          <Link to="/login">
            <Button
              variant={""}
              textColor={"black"}
              _hover={{ bg: "gray.100" }}
              fontSize={"sm"}
              borderRadius={"9"}
            >
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant={""}
              textColor={"black"}
              _hover={{ bg: "gray.100" }}
              fontSize={"sm"}
              borderRadius={"9"}
            >
              {/* <PiUserCirclePlusFill size={"30"} /> */}
              Get Started
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  // const linkColor = useColorModeValue("gray.600", "gray.200");
  // const linkHoverColor = useColorModeValue("yellow.400", "white");
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={3} textColor={"black"}>
      {NAV_ITEMS.map((navItem) => (
        <Flex
          key={navItem.label}
          alignItems={"center"}
          fontSize={"sm"}
          alignContent={"center"}
          textColor={"black"}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={1}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                // fontWeight={500}
                // color={linkColor}
              >
                <LinkChakra textColor={"black"} fontWeight={"medium"}>
                  <Flex>
                    {navItem.label}
                    <span>{navItem.icon}</span>
                  </Flex>
                </LinkChakra>
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
                textColor={"white"}
                backgroundColor={"blackAlpha.100"}
                bg="RGBA(0, 0, 0, 0.5)"
                opacity={0.9}
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
            _groupHover={{ color: "yellow.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
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
          <Icon color={"yellow.400"} w={5} h={5} as={ChevronRightIcon} />
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
        label: "Busines",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Economy",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Thecnology",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Sport",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Culinary",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Internationl",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Fiction",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      }
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
    icon: <CiEdit size={20} />,
  },
];
