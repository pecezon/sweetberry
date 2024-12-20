import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Feature from "../Feature";
import { FaBolt } from "react-icons/fa6";
import { MdOutlineIcecream } from "react-icons/md";
import { LuThermometerSnowflake } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import theme from "../../utils/colors";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="1rem"
      marginTop={["2rem", "3rem", "4rem"]}
    >
      <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>{t("whyus")}</Text>
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
          text={t("feature1")}
          color={theme.hardBlue}
        />
        <Feature
          icon={<MdOutlineIcecream />}
          text={t("feature2")}
          color={theme.hardGreen}
        />
        <Feature
          icon={<LuThermometerSnowflake />}
          text={t("feature3")}
          color={theme.hardPink}
        />
        <Feature
          icon={<RiCustomerService2Fill />}
          text={t("feature4")}
          color={theme.hardGreen}
        />
        <Feature
          icon={<MdOutlineStorefront />}
          text={t("feature5")}
          color={theme.hardBlue}
        />
      </Flex>
    </Flex>
  );
};

export default WhyUs;
