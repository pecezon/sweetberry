import { Flex, Box } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex
      backgroundImage={`url(${process.env.PUBLIC_URL}/images/misc/main-bg.png)`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      height="100vh"
      border="1px solid red"
      borderRadius="50% / 100%"
    >
      <Box
        width="100px"
        height="100px"
        backgroundColor="white"
        clip-path="ellipse(50% 77% at 50% 0%)"
      ></Box>
    </Flex>
  );
};

export default Main;
