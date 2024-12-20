import { Flex, Image, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../utils/colors";

//Icons
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding="2rem"
      sx={{
        clipPath: [
          "ellipse(100% 66% at 50% 66%)",
          "ellipse(67% 66% at 50% 66%)",
        ],
      }}
      background={theme.lightPink}
      flexDir={"column"}
      marginTop={["1.5rem", 0, 0, 0, 0]}
    >
      <Image
        src={process.env.PUBLIC_URL + "/images/brand/squareLogo.jpeg"}
        alt="logo"
        width={["100px", "150px", "200px", "250px"]}
      />

      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap={"2rem"}
        margin={"2rem"}
      >
        <Link href="https://www.instagram.com/sweetberryfy/" isExternal>
          <Icon
            as={FaInstagram}
            boxSize={[8, 10]}
            color={theme.hardPink}
            sx={{
              "&:hover": {
                color: theme.lighterPink,
                cursor: "pointer",
              },
            }}
          />
        </Link>

        <Link href="https://www.facebook.com/sweetberryFY/" isExternal>
          <Icon
            as={FaFacebook}
            boxSize={[8, 10]}
            color={theme.hardPink}
            sx={{
              "&:hover": {
                color: theme.lighterPink,
                cursor: "pointer",
              },
            }}
          />
        </Link>

        <Link href="mailto:lopez.diego@cetys.edu.mx" isExternal>
          <Icon
            as={CiMail}
            boxSize={[8, 10]}
            color={theme.hardPink}
            sx={{
              "&:hover": {
                color: theme.lighterPink,
                cursor: "pointer",
              },
            }}
          />
        </Link>
      </Flex>

      <Text
        fontSize={["0.75rem", "0.75rem", "1rem", "1rem", "1.25rem"]}
        textAlign={"center"}
        color={"black"}
        marginBottom={"2rem"}
      >
        Contenido de Sweetberry 2024 Ensenada, Baja California , México
      </Text>

      <Text
        fontSize={["0.75rem", "0.75rem", "1rem", "1rem", "1.25rem"]}
        textAlign={"center"}
        color={"black"}
      >
        Sitio desarrollado por{" "}
        <Link href="https://github.com/pecezon" isExternal>
          Diegopez
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
