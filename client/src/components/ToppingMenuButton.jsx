import React from "react";
import { Button } from "@chakra-ui/react";

import colors from "../utils/colors";

const ToppingMenuButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      size={["sm", "md", "lg"]}
      borderRadius="25px"
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
