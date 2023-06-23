import {
    Container,
    Box,
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
    useColorModeValue
  } from '@chakra-ui/react';
  import { LuEdit } from "react-icons/lu";
  import logo from './Bee2.png';
  // import { ReactNode } from 'react';
  import { MdNotificationsActive } from "react-icons/md";
  
  const Navbar = () => {
    return (
      <Box
        py="1"
        px={"0px"}
        boxShadow="lg"
        position="fixed"
        top="0"
        // bg={"white"}
        width="100%"
        zIndex="1"
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('black')}
        // borderBottom={90}
      >
        <Box mr={'3'}>
          <HStack spacing={4}>
          <img src={logo} alt="Logo" width='20%'/>
            <Input
              maxW="26rem"
              placeholder="Search..."
              borderColor={useColorModeValue('gray.300', 'white')}
              borderRadius="5px"
              d={{ base: 'none', md: 'block' }}
            />
            <Spacer />
            <Box>
              <Button variant={''} mr={'-1'} gap={'2'}>
                <LuEdit size={'30'}/> Write
              </Button>
              <Button variant={''} mr={'3'}>
              <MdNotificationsActive size={'30px'}/>
              </Button>
              <Menu isLazy>
                <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                  <Avatar size="sm" src={'https://avatars2.githubusercontent.com/u/37842853?v=4'} />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  border="2px solid"
                  borderColor={useColorModeValue('gray.700', 'gray.100')}
                  boxShadow="4px 4px 0"
                >
                  <Link href="https://dev.to/m_ahmad" _hover={{ textDecoration: 'none' }} isExternal>
                    <MenuItem>
                      <VStack justify="start" alignItems="left">
                        <Text fontWeight="500">Muhammad Ahmad</Text>
                        <Text size="sm" color="gray.500" mt="0 !important">
                          @m_ahmad
                        </Text>
                      </VStack>
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Dashboard</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Create Post</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Reading List</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Settings</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Sign Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </Box>
      </Box>
    );
  };
  
  export default Navbar;