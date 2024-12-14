import { Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import ReviewSliderDesktop from "../ReviewSliderDesktop";
import ReviewSliderMobile from "../ReviewSliderMobile";

const ReviewsDesktop = ({ mediaQuery }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      gap={[4, 8]}
      width="100%"
      padding={"2rem 0"}
      h="90vh"
      minH="700px"
      justifyContent="space-between"
      position="relative"
      overflow="hidden"
      border={"1px solid red"}
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
        marginTop={"6rem"}
        rowGap={10}
      >
        {/* Title */}
        <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Reviews</Text>

        {/* Reviews */}
        {mediaQuery ? <ReviewSliderMobile /> : <ReviewSliderDesktop />}

        {/* Button */}
        <Button>Submit your review!!</Button>
      </Flex>
    </Flex>
  );
};

export default ReviewsDesktop;
