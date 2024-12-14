import { Flex, Text, Avatar } from "@chakra-ui/react";

const ToppingCard = ({ name, imgPath }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      width={["75px", "110px", "150px"]}
    >
      <Avatar name={name} src={imgPath} size={["md", "lg", "xl"]} />
      <Text
        fontSize={["0.75rem", "1rem", "1.25rem"]}
        textAlign="center"
        color="black"
      >
        {name}
      </Text>
    </Flex>
  );
};

export default ToppingCard;
