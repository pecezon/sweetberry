import { Flex, Text, Avatar } from "@chakra-ui/react";

import { SwiperSlide } from "swiper/react";

import React from "react";

const ReviewSlide = ({ review, color }) => {
  return (
    <Flex
      height={["400px", "300px", "300px", "300px", "400px"]}
      width={["250px", "300px", "300px", "300px", "400px"]}
      bg={color}
      borderRadius={"20px"}
      justifyContent={"center"}
      alignItems={"center"}
      margin="auto"
      padding={"2rem"}
      flexDir={"column"}
    >
      <Text
        fontSize={["0.75rem", "0.75rem", "0.75rem", "0.75rem", "1rem"]}
        textAlign={"justify"}
        color={"black"}
      >
        {review.review}
      </Text>
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginTop={"2rem"}
        width={"100%"}
      >
        <Avatar
          size={["lg", "lg", "lg", "lg", "xl"]}
          name={review.name}
          src={review.img}
        ></Avatar>
        <Text
          fontSize={["0.75rem", "0.75rem", "0.75rem", "0.75rem", "1rem"]}
          textAlign={"left"}
          marginLeft={"1rem"}
          color={"black"}
          fontWeight={"bold"}
        >
          {review.name}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ReviewSlide;
