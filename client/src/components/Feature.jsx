import { Flex, Icon, Text, Box, Center } from "@chakra-ui/react";
import theme from "../utils/colors";
import React from "react";
import { FaBolt } from "react-icons/fa6";

const Feature = ({ color = theme.hardBlue, icon, text }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      maxWidth={["5rem", "7rem", "9rem"]}
    >
      <Center
        width={["5rem", "6rem", "8rem"]}
        height={["5rem", "6rem", "8rem"]}
        border={`5px solid ${color}`}
        color={color}
        fontSize={["2.5rem", "3rem", "4rem"]}
        borderRadius="50%"
      >
        {icon}
      </Center>
      <Text
        width="100%"
        fontSize={["0.75rem", "1rem", "1.25rem"]}
        textAlign="center"
        marginTop={["0.5rem", "1rem", "1.5rem"]}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default Feature;
