import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import WhyUs from "../components/WhyUs";
import { useMediaQuery } from 'react-responsive'

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' })

  return (
    <>
      <Nav />
      <Main mediaQuery={isBigScreen}/>
      <WhyUs></WhyUs>
    </>
  );
};

export default Landing;
