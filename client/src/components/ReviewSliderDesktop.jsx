import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

import theme from "../utils/colors";

//import Reviews
import reviews from "../utils/reviews";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ReviewSlide from "./ReviewSlide";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

//Media Query
import { useMediaQuery } from "react-responsive";

const ReviewSliderDesktop = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Swiper
        spaceBetween={50}
        slidesPerView={isBigScreen ? 4 : isMediumScreen ? 3 : 2}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Autoplay, Navigation]}
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide>
              <ReviewSlide
                key={index}
                review={review}
                color={index % 2 === 0 ? theme.lightPink : theme.lightBlue}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default ReviewSliderDesktop;
