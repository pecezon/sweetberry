import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Feature from "./Feature";
import { FaBolt } from "react-icons/fa6";
import { MdOutlineIcecream } from "react-icons/md";
import { LuThermometerSnowflake } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import theme from "../utils/colors";

const WhyUs = () => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="1rem"
      marginTop={["2rem", "3rem", "4rem"]}
    >
      <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Why To Choose Us?</Text>
      <Flex
        width="100%"
        justifyContent="space-around"
        alignItems="flex-start"
        gap="2rem"
        flexWrap="wrap"
        marginTop={["1rem", "1.5rem", "2rem"]}
        padding={["0 0.5rem", "0 2rem", "0 3rem"]}
      >
        <Feature
          icon={<FaBolt />}
          text="Fast Delivery"
          color={theme.hardBlue}
        />
        <Feature
          icon={<MdOutlineIcecream />}
          text="Flavor Variety"
          color={theme.hardGreen}
        />
        <Feature
          icon={<LuThermometerSnowflake />}
          text="Fresh Ingredients"
          color={theme.hardPink}
        />
        <Feature
          icon={<RiCustomerService2Fill />}
          text="Excellent Customer Service"
          color={theme.hardGreen}
        />
        <Feature
          icon={<MdOutlineStorefront />}
          text="Cozy Atmosphere"
          color={theme.hardBlue}
        />
      </Flex>
    </Flex>
  );
};

export default WhyUs;
