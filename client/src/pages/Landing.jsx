import React from "react";
import Nav from "../components/Sections/Nav";
import Main from "../components/Sections/Main";
import WhyUs from "../components/Sections/WhyUs";
import VisitUs from "../components/Sections/VisitUs";
import { useMediaQuery } from "react-responsive";
import Flavors from "../components/Sections/Flavors";
import Toppings from "../components/Sections/Toppings";

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });

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
    </div>
  );
};

export default Landing;
