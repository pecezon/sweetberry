import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Swiper Modules
import { EffectCards } from "swiper/modules";

//Reviews
import reviews from "../utils/reviews";

import theme from "../utils/colors";

import { Flex } from "@chakra-ui/react";

import ReviewSlide from "./ReviewSlide";

const ReviewSliderMobile = () => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        cardsEffect={{
          slideShadows: false, // Disables extra shadows
        }}
        style={{ height: "400px", width: "100%" }}
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <ReviewSlide
                review={review}
                color={index % 2 ? theme.lightBlue : theme.lightPink}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default ReviewSliderMobile;
