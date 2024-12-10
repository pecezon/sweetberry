import React from "react";
import { Button } from "@chakra-ui/react";

import colors from "../utils/colors";

const ToppingMenuButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      size={["xs", "md", "lg"]}
      fontSize={["0.65rem", ".75rem", "1rem"]}
      borderRadius="15px"
      background={colors.lightPink}
      _hover={{
        background: colors.hardPink,
      }}
      fontWeight="500"
    >
      {text}
    </Button>
  );
};

export default ToppingMenuButton;
