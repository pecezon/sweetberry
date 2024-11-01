import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import theme from "../utils/colors";

const Main = () => {
  return (
    <Box
      width="100%"
      height={window.innerHeight - 66 + "px"}
      display="flex"
      backgroundColor={theme.lightPink}
      flexDir="column"
      justifyContent="flex-start"
      sx={{
        clipPath: "ellipse(80% 80% at 50% 0%)",
      }}
      border="1px solid black"
    >
      {/* Main Announcement */}
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        border="1px solid black"
      >
        <Text
          fontSize={["0.75rem", "1rem", "1.5rem"]}
          textAlign="center"
          fontWeight="bold"
          margin="1rem"
        >
          The best frozen yogurt you’ll find
        </Text>
      </Flex>

      {/* Images */}
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        {/* Floating Stuff 1 */}
        <Flex
          width={["25%", "20%"]}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Image
            src={process.env.PUBLIC_URL + "/images/misc/strawberries.png"}
          ></Image>
        </Flex>
        {/* Frozen Yogurt Images */}
        <Flex
          width={["50%", "60%"]}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            width="250px"
            src={process.env.PUBLIC_URL + "/images/brand/squareLogo.jpeg"}
          ></Image>
        </Flex>
        {/* Floating Stuff 2 */}
        <Flex width={["25%", "20%"]}>
          <Image
            src={process.env.PUBLIC_URL + "/images/misc/strawberries.png"}
          ></Image>
        </Flex>
      </Flex>

      {/* Bottom Text */}
      <Flex
        width="100%"
        height="100px"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        border="1px solid black"
        gap="1rem"
      >
        <Text>
          Discover the delicious flavors that make us the best frozen yogurt you
          will have ever tasted
        </Text>
        <Button>See Flavors</Button>
      </Flex>
    </Box>
  );
};

export default Main;
