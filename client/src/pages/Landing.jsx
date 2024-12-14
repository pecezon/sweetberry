import React from "react";
import Nav from "../components/Sections/Nav";
import Main from "../components/Sections/Main";
import WhyUs from "../components/Sections/WhyUs";
import VisitUs from "../components/Sections/VisitUs";
import { useMediaQuery } from "react-responsive";
import Flavors from "../components/Sections/Flavors";
import Toppings from "../components/Sections/Toppings";
import ReviewsDesktop from "../components/Sections/Reviews";

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div
      style={{
        maxWidth: "3000px",
      }}
    >
      <Nav />
      <Main mediaQuery={isBigScreen} />
      <WhyUs />
      <Flavors />
      <VisitUs mediaQuery={isBigScreen} />
      <Toppings />
      <ReviewsDesktop mediaQuery={isSmallScreen} />
    </div>
  );
};

export default Landing;
