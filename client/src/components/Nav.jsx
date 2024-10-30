import React from "react";
import { Box, Flex, HStack, IconButton, useDisclosure, Image, Link, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {getTest} from "../functions/test";

const Navbar = () => {

  const [test, setTest] = useState("");

  useEffect(() => {
    getTest().then(data => {
      setTest(data.message);
    });
  }, []);

  return (
    <Flex
      padding={4}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Logo */}
      <Box
        w="30%"
      >
        <Image
          src={`${process.env.PUBLIC_URL}/images/brand/logo.png`}
          alt="logo"
          maxWidth="350px"
          minWidth="100px"
          w="100%"
          h="auto"
        ></Image>
      </Box>

      {/* Links */}
      <Box
        w="30%"
        display="flex"
        justifyContent="space-between"
      >
        <Link>
          Home
        </Link>
        <Link>
          Flavors
        </Link>
        <Link>
          Reviews
        </Link>
        <Link>
          Toppings
        </Link>

      </Box>

      {/* Language toogle */}
      <Box
        w="30%"
        display="flex"
        justifyContent="flex-end"
      >
        <Button>{test}</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;