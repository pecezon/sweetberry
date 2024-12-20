import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import theme from "../../utils/colors";
import YogurtImage from "../YogurtImage";
import { useTranslation } from "react-i18next";

const Main = ({ mediaQuery }) => {
  //Use transaltion hook here
  const { t } = useTranslation();

  return (
    <Box
      width="100%"
      height={[
        window.innerHeight - 270 + "px",
        window.innerHeight - 220 + "px",
        window.innerHeight - 170 + "px",
        window.innerHeight - 120 + "px",
        window.innerHeight - 70 + "px",
      ]}
      minHeight={["480px", "700px"]}
      display="flex"
      backgroundColor={theme.lightPink}
      flexDir="column"
      justifyContent={["flex-start", "flex-start"]}
      alignItems="center"
      gap={["1.5rem", "0rem"]}
      sx={{
        clipPath: [
          "ellipse(100% 66% at 50% 33%)",
          "ellipse(67% 66% at 50% 33%)",
        ],
      }}
      backgroundRepeat="no-repeat"
      background={[
        `radial-gradient(circle at 100% 0px, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 0 20%, ${theme.lighterPink} 75px, transparent 75px),
                  radial-gradient(circle at 5% 80%, ${theme.lighterPink} 75px, transparent 75px),
                  radial-gradient(circle at 95% 80%, ${theme.lighterPink} 60px, transparent 50px),
                  ${theme.lightPink}`,
        `radial-gradient(circle at 100% 0px, ${theme.lighterPink} 175px, transparent 175px),
                  radial-gradient(circle at 0 30%, ${theme.lighterPink} 125px, transparent 125px),
                  radial-gradient(circle at 15% 80%, ${theme.lighterPink} 125px, transparent 125px),
                  radial-gradient(circle at 90% 80%, ${theme.lighterPink} 125px, transparent 125px),
                  ${theme.lightPink}`,
        `radial-gradient(circle at 100% 0px, ${theme.lighterPink} 200px, transparent 200px),
                  radial-gradient(circle at 0 30%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 15% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 90% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 30% 5%, ${theme.lighterPink} 125px, transparent 125px),
                  radial-gradient(circle at 70% 20%, ${theme.lighterPink} 100px, transparent 100px),
                  ${theme.lightPink}`,
      ]}
    >
      {/* Main Announcement */}
      <Flex width="100%" justifyContent="center" alignItems="center">
        <Text
          fontFamily="Italiana"
          fontSize={["1.5rem", "1.75rem", "2.5rem"]}
          textAlign="center"
          margin="1rem"
        >
          {t("mainAnnouncement")}
        </Text>
      </Flex>

      {/* Images */}
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflowX="hidden"
        height={["50%", "60%", "70%"]}
      >
        {/* Floating Stuff 1 */}
        <Flex
          width="auto"
          height="100%"
          position="absolute"
          left={["-20%", "-10%", "-5%"]}
          top="50%"
          transform="translateY(-50%)"
          zIndex="3"
          maxHeight="100%"
        >
          <Image
            src={process.env.PUBLIC_URL + "/images/misc/strawberries.png"}
          ></Image>
        </Flex>
        {/* Frozen Yogurt Images */}
        {mediaQuery ? (
          <Flex
            width={"80%"}
            justifyContent="center"
            alignItems="center"
            zIndex="1"
            flexWrap="nowrap"
            position="relative"
          >
            <YogurtImage
              top="-25px"
              left="100px"
              zIndex="2"
              imgPath={
                process.env.PUBLIC_URL + "/images/misc/chocolateFYSample.png"
              }
              littleImgPath={
                process.env.PUBLIC_URL + "/images/misc/chocolate.png"
              }
              color={theme.lighterPink}
            />
            <YogurtImage
              top="25px"
              imgPath={
                process.env.PUBLIC_URL + "/images/misc/strawberryFYSample.png"
              }
              littleImgPath={
                process.env.PUBLIC_URL + "/images/misc/strawberry.png"
              }
              color={theme.lighterPink}
            />
            <YogurtImage
              top="-25px"
              right="100px"
              zIndex="2"
              imgPath={
                process.env.PUBLIC_URL + "/images/misc/vanillaFYSample.png"
              }
              littleImgPath={
                process.env.PUBLIC_URL + "/images/misc/vanilla.png"
              }
              color={theme.lighterPink}
            />
          </Flex>
        ) : (
          <Flex
            width={"80%"}
            justifyContent="center"
            alignItems="center"
            zIndex="1"
          >
            <YogurtImage
              imgPath={
                process.env.PUBLIC_URL + "/images/misc/strawberryFYSample.png"
              }
              littleImgPath={
                process.env.PUBLIC_URL + "/images/misc/strawberry.png"
              }
              color={theme.lighterPink}
            />
          </Flex>
        )}
        {/* Floating Stuff 2 */}
        <Flex
          width="auto"
          height="100%"
          position="absolute"
          right={["-20%", "-10%", "-5%"]}
          top="50%"
          transform="translateY(-50%)"
          zIndex="3"
          maxHeight="100%"
        >
          <Image
            src={process.env.PUBLIC_URL + "/images/misc/strawberries.png"}
          ></Image>
        </Flex>
      </Flex>

      {/* Bottom Text */}
      <Flex
        width={["100%", "80%", "75%"]}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap="1rem"
        textAlign="center"
        padding="1rem"
      >
        <Text fontSize={["0.75rem", "1rem", "1.25rem"]}>
          {t("mainMessage")}
        </Text>
        <Button
          padding={"1rem 2rem"}
          border={"2px solid black"}
          borderRadius={"15px"}
          bg={theme.lighterPink}
          color={"#000"}
          _hover={{ bg: "#FF69B4" }}
          _active={{ bg: "#FF69B4" }}
          size={["sm", "md"]}
        >
          {t("seeFlavorsButton")}
        </Button>
      </Flex>
    </Box>
  );
};

export default Main;
