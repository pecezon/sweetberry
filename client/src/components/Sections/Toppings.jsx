import { Flex, Text, Wrap } from "@chakra-ui/react";

import { useState } from "react";

import ToppingMenuButton from "../ToppingMenuButton";
import React from "react";

import toppings from "../../utils/toppings";
import ToppingCard from "../ToppingCard";

import theme from "../../utils/colors";

import { useTranslation } from "react-i18next";

const Toppings = () => {
  const { t } = useTranslation();

  const [toppingElegido, setToppingElegido] = useState("Frutas");

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={[4, 6, 8]}
      width="100%"
      marginTop={["2rem", "0rem", "2rem"]}
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
          text={t("fruits")}
          onClick={() => {
            setToppingElegido("Frutas");
          }}
        />

        {/* Dried Fruits */}
        <ToppingMenuButton
          text={t("driedFruits")}
          onClick={() => {
            setToppingElegido("Frutos Secos");
          }}
        />

        {/* Chocolates */}
        <ToppingMenuButton
          text={t("chocolates")}
          onClick={() => {
            setToppingElegido("Chocolates");
          }}
        />

        {/* Liquids */}
        <ToppingMenuButton
          text={t("liquids")}
          onClick={() => {
            setToppingElegido("Liquidos");
          }}
        />

        {/* Cookies & Cereals */}
        <ToppingMenuButton
          text={t("cookiesCereals")}
          onClick={() => {
            setToppingElegido("Galletas y Cereales");
          }}
        />

        {/* Candy & Others */}
        <ToppingMenuButton
          text={t("candiesOthers")}
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
            return <ToppingCard imgPath={topping.src} name={t(topping.name)} />;
          }
        })}
      </Flex>
    </Flex>
  );
};

export default Toppings;
