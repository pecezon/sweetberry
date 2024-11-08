import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import WhyUs from "../components/WhyUs";
import VisitUs from "../components/VisitUs";
import { useMediaQuery } from 'react-responsive'
import Flavors from "../components/Flavors";

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' })

  return (
    <>
      <Nav />
      <Main mediaQuery={isBigScreen}/>
      <WhyUs />
      <Flavors />
      <VisitUs mediaQuery={isBigScreen}/>
    </>
  );
};

export default Landing;
