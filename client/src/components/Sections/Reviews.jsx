import { Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import theme from "../../utils/colors";
import ReviewSliderDesktop from "../ReviewSliderDesktop";
import ReviewSliderMobile from "../ReviewSliderMobile";
import { useTranslation } from "react-i18next";

const ReviewsDesktop = ({ mediaQuery }) => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      gap={[4, 8]}
      width="100%"
      minH={["600px", "600px", "500px", "600px"]}
      justifyContent="space-between"
      position="relative"
      overflow="hidden"
      marginTop={["4rem", "3rem", "4rem"]}
    >
      {/* Fondo */}
      <Flex
        width="100%"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Image
          height="100%"
          width="auto"
          src={process.env.PUBLIC_URL + "/images/misc/floatingRaspberries.png"}
          alt="floatingMango"
          position="absolute"
          left={["-35%", "-15%", "-5%", "10%"]}
          maxH={["400px", "500px", "600px", "750px"]}
        />
        <Image
          height="100%"
          width="auto"
          position="absolute"
          src={process.env.PUBLIC_URL + "/images/misc/floatingRaspberries.png"}
          alt="floatingKiwi"
          right={["-35%", "-15%", "-5%", "10%"]}
          maxH={["400px", "500px", "600px", "750px"]}
        />
      </Flex>

      <Flex
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        position="absolute"
        zIndex="2"
        //marginTop={"6rem"}
        rowGap={10}
      >
        {/* Title */}
        <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>
          {t("reviewsTitle")}
        </Text>

        {/* Reviews */}
        {mediaQuery ? <ReviewSliderMobile /> : <ReviewSliderDesktop />}

        {/* Button */}
        <Button
          padding={"1rem 2rem"}
          border={"2px solid black"}
          borderRadius={"15px"}
          bg={theme.lightPink}
          color={"#000"}
          _hover={{ bg: "#FF69B4" }}
          _active={{ bg: "#FF69B4" }}
        >
          {t("submitReview")}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ReviewsDesktop;
