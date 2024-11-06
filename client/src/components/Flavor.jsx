import { Flex, Avatar, Text } from "@chakra-ui/react";
import React from "react";

const Flavor = ({ name, image }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      width="40%"
    >
      <Avatar
        src={process.env.PUBLIC_URL + "images/" + image}
        alt={name}
        shape="rounded"
        w={["50px", "65px", "60px", "100px"]}
        h={["50px", "65px", "60px", "100px"]}
      />
      <Text
        fontSize={["0.75rem", "1rem", "1.25rem"]}
        color="black"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Flex>
  );
};

export default Flavor;
