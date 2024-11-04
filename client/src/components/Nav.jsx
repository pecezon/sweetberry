import React from "react";
import {
  Box,
  Flex,
  IconButton,
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
    <Flex padding={4} justifyContent="space-between" alignItems="center">
      {/* Logo */}
      <Link w="30%" href="https://www.youtube.com">
        <Image
          src={`${process.env.PUBLIC_URL}/images/brand/logo.png`}
          alt="logo"
          maxWidth={["100px", "200px"]}
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
        fontSize={"1rem"}
        hideBelow="md"
        gap="0 1rem"
      >
        <Link>Home</Link>
        <Link>Flavors</Link>
        <Link>Reviews</Link>
        <Link>Toppings</Link>
      </Box>

      {/* Links for mobile*/}
      <Box
        position="fixed"
        top="66px"
        left="0"
        width="100%"
        height={window.innerHeight - 66 + "px"}
        background="white"
        zIndex="10"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        hideFrom="md"
        gap="1rem"
        sx={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <Link onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link onClick={() => setIsMenuOpen(false)}>Flavors</Link>
        <Link onClick={() => setIsMenuOpen(false)}>Reviews</Link>
        <Link onClick={() => setIsMenuOpen(false)}>Toppings</Link>
      </Box>

      {/* Language toogle */}
      <Box
        w={["50%", "30%"]}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap="1rem"
      >
        <Button size={["sm", "md"]}>Esp</Button>
        {/*Ham menu */}
        <IconButton
          hideFrom={"md"}
          display={"flex"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size={["sm", "md"]}
          alignContent="center"
          justifyContent="center"
        >
          {isMenuOpen ? <MdClose /> : <RxHamburgerMenu />}
        </IconButton>
      </Box>
    </Flex>
  );
};

export default Navbar;
