import { Flex, Text, Button } from "@chakra-ui/react";

import ToppingMenuButton from "../ToppingMenuButton";
import React from "react";

const Toppings = () => {
  return (
    <Flex
      height="90vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Title */}
      <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Toppings</Text>

      {/* Menu */}
      <Flex
        width={["100%", "90%", "80%"]}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        border="1px solid black"
      >
        <Flex
          width={["100%", "60%"]}
          justifyContent={["space-around", "space-between"]}
          alignItems="center"
        >
          {/* Fruit */}
          <ToppingMenuButton text="Fruit" onClick={() => alert("Fruit")} />

          {/* Dried Fruits */}
          <ToppingMenuButton
            text="Dried Fruits"
            onClick={() => alert("Dried Fruits")}
          />

          {/* Chocolates */}
          <ToppingMenuButton
            text="Chocolates"
            onClick={() => alert("Chocolates")}
          />

          {/* Liquids */}
          <ToppingMenuButton text="Liquids" onClick={() => alert("Liquids")} />
        </Flex>

        <Flex
          width={["100%", "40%"]}
          justifyContent={["center", "space-between"]}
          alignItems="center"
        >
          {/* Cookies & Cereals */}
          <ToppingMenuButton
            text="Cookies & Cereals"
            onClick={() => alert("Cookies & Cereals")}
          />

          {/* Candy & Others */}
          <ToppingMenuButton
            text="Candy & Others"
            onClick={() => alert("Candy & Others")}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Toppings;
