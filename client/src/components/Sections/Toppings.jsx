import { Flex, Text, Wrap } from "@chakra-ui/react";

import { useState } from "react";

import ToppingMenuButton from "../ToppingMenuButton";
import React from "react";

import toppings from "../../utils/toppings";
import ToppingCard from "../ToppingCard";

import theme from "../../utils/colors";

const Toppings = () => {
  const [toppingElegido, setToppingElegido] = useState("Frutas");

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={[4, 8]}
      width="100%"
      padding={"2rem 0"}
    >
      {/* Title */}
      <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Toppings</Text>

      {/* Menu */}
      <Flex
        width={["100%", "90%", "80%"]}
        justifyContent="space-around"
        rowGap={4}
        alignItems="center"
        flexWrap="wrap"
      >
        {/* Fruit */}
        <ToppingMenuButton
          text="Fruit"
          onClick={() => {
            setToppingElegido("Frutas");
          }}
        />

        {/* Dried Fruits */}
        <ToppingMenuButton
          text="Dried Fruits"
          onClick={() => {
            setToppingElegido("Frutos Secos");
          }}
        />

        {/* Chocolates */}
        <ToppingMenuButton
          text="Chocolates"
          onClick={() => {
            setToppingElegido("Chocolates");
          }}
        />

        {/* Liquids */}
        <ToppingMenuButton
          text="Liquids"
          onClick={() => {
            setToppingElegido("Liquidos");
          }}
        />

        {/* Cookies & Cereals */}
        <ToppingMenuButton
          text="Cookies & Cereals"
          onClick={() => {
            setToppingElegido("Galletas y Cereales");
          }}
        />

        {/* Candy & Others */}
        <ToppingMenuButton
          text="Candy & Others"
          onClick={() => {
            setToppingElegido("Dulces y Otros");
          }}
        />
      </Flex>

      {/* Selected Toppings Box */}
      <Flex
        width={["90%", "85%", "80%"]}
        justifyContent="space-around"
        alignItems="flex-start"
        flexWrap="wrap"
        rowGap="1.5rem"
        background={theme.notThatLightPink}
        padding={["1.25rem 1rem", "1rem 1.25rem", "1.5rem 1.75rem"]}
        borderRadius="3rem"
        boxShadow={`9px 14px 18px 3px ${theme.lightPink}`}
      >
        {toppings.map((topping) => {
          if (topping.tipo === toppingElegido) {
            return <ToppingCard imgPath={topping.src} name={topping.name} />;
          }
        })}
      </Flex>
    </Flex>
  );
};

export default Toppings;
