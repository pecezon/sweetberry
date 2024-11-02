import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import { useMediaQuery } from 'react-responsive'

const Landing = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })

  return (
    <>
      <Nav />
      <Main mediaQuery={isBigScreen}/>
    </>
  );
};

export default Landing;
