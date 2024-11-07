import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../utils/colors";
import { getFlavors } from "../functions/flavors";
import { useEffect, useState } from "react";
import Flavor from "./Flavor";

const Flavors = () => {
  {
    /*Retrieve flavors from the database*/
  }
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getFlavors();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={["column-reverse", "column-reverse", "row"]}
      maxH="1280px"
      h="100vh"
    >
      {/* Penguin desmadre */}
      <Flex
        w={["90%", "90%", "50%"]}
        h={["40%", "40%", "90%"]}
        position="relative"
        alignItems={["flex-start", "flex-start", "center"]}
        justifyContent="center"
        overflow="hidden"
        background={[
          "0",
          "0",
          `radial-gradient(circle at 75% 15%, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 65% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 80% 50%, ${theme.lighterPink} 75px, transparent 75px)
                  `,
          `radial-gradient(circle at 75% 15%, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 65% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 80% 50%, ${theme.lighterPink} 75px, transparent 75px)
                  `,
          `radial-gradient(circle at 80% 15%, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 70% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 85% 50%, ${theme.lighterPink} 75px, transparent 75px),
                  radial-gradient(circle at 50% 30%, ${theme.lighterPink} 75px, transparent 75px)
                  `,
        ]}
      >
        <Image
          src={process.env.PUBLIC_URL + "images/brand/penguinNoBG.png"}
          alt="penguin"
          height={["75%", "95%", "50%", "60%", "70%"]}
          width="auto"
          position="absolute"
          left={["50%", "50%", "-15%"]}
          top={["-15%", "-15%", "50%"]}
          transform={[
            "rotate(90deg) translate(0, 50%)",
            "trotate(90deg) translate(0, 50%)",
            "translate(0%, -50%)",
          ]}
        ></Image>
      </Flex>

      {/* Flavors desmadre*/}
      <Box
        w={["90%", "90%", "50%"]}
        h={["60%", "60%", "90%"]}
        display="flex"
        alignItems="center"
        justifyContent={["flex-end", "flex-end", "center"]}
        flexDirection="column"
        textAlign="center"
        background={[
          "0",
          "0",
          `radial-gradient(circle at 75% 15%, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 65% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 80% 50%, ${theme.lighterPink} 75px, transparent 75px)
                  `,
          `radial-gradient(circle at 75% 15%, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 65% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 80% 50%, ${theme.lighterPink} 75px, transparent 75px)
                  `,
          `radial-gradient(circle at 15% 20%, ${theme.lighterPink} 100px, transparent 100px),
                  radial-gradient(circle at 70% 80%, ${theme.lighterPink} 150px, transparent 150px),
                  radial-gradient(circle at 85% 15%, ${theme.lighterPink} 75px, transparent 75px)
                  `,
        ]}
      >
        <Flex
          width="90%"
          flexDirection="column"
          alignItems="center"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.15)"
          borderRadius="15px"
          padding={["1rem", "1.5rem", "2rem"]}
          rowGap={["0.75rem", "1rem", "1.5rem"]}
          maxW="550px"
          background="white"
        >
          <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Flavors</Text>
          {/* Loading Screen */}
          {loading ? (
            <h1>Loading...</h1>
          ) : /* Error Screen */
          Array.isArray(data) ? (
            /* Flavors Screen */
            <Flex
              width="100%"
              flexWrap="wrap"
              gap="1rem"
              alignItems="center"
              justifyContent="space-around"
            >
              {data.map((flavor) => (
                <Flavor
                  key={flavor._id}
                  name={flavor.name}
                  image={flavor.imagePath}
                />
              ))}
            </Flex>
          ) : (
            <h1>Sorry we had a problem getting our flavors</h1>
          )}
          <Text fontSize={["0.75rem", "1rem", "1.25rem"]}>
            Try the delicious flavors we offer
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Flavors;
