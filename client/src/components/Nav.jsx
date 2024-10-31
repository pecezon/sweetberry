import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { getTest } from "../functions/test";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [test, setTest] = useState("");

  useEffect(() => {
    getTest().then((data) => {
      setTest(data.message);
    });
  }, []);

  return (
    <Flex
      padding={4}
      justifyContent="space-between"
      alignItems="center"
      border="1px solid black"
    >
      {/* Logo */}
      <Link w="30%" href="https://www.youtube.com">
        <Image
          src={`${process.env.PUBLIC_URL}/images/brand/logo.png`}
          alt="logo"
          maxWidth={{ lg: "225px", xl: "275px" }}
          minWidth="100px"
          w="100%"
          h="auto"
        ></Image>
      </Link>

      {/* Links for desktop*/}
      <Box
        w="30%"
        display="flex"
        justifyContent="space-between"
        fontSize={{ lg: "1rem", xl: "1.5rem" }}
        hideBelow="md"
      >
        <Link>Home</Link>
        <Link>Flavors</Link>
        <Link>Reviews</Link>
        <Link>Toppings</Link>
      </Box>

      {/* Links for mobile*/}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgcolor="white"
        zIndex="10"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <Link>Home</Link>
        <Link>Flavors</Link>
        <Link>Reviews</Link>
        <Link>Toppings</Link>
      </Box>

      {/* Language toogle */}
      <Box
        w="30%"
        display="flex"
        justifyContent="flex-end"
        border="1px solid black"
      >
        <Button size={["xs", "sm", "md"]}>Esp</Button>
      </Box>

      {/*Ham menu */}
      <IconButton
        hideFrom={"md"}
        display={"flex"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        size="xs"
        alignContent="center"
        justifyContent="center"
      >
        {isMenuOpen ? <MdClose /> : <RxHamburgerMenu />}
      </IconButton>
    </Flex>
  );
};

export default Navbar;
