import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import theme from "../../utils/colors";

const VisitUs = ({ mediaQuery }) => {
  return (
    <Flex height="90vh" width="100%">
      {/* Fondo */}
      <Flex
        width="100%"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Image
          height="100%"
          width="auto"
          src={process.env.PUBLIC_URL + "/images/misc/floatingMango.png"}
          alt="floatingMango"
          position="absolute"
          left={["-10%", "-5%", "-5%", "10%"]}
          maxH={["400px", "500px", "600px", "750px"]}
        />
        <Image
          height="100%"
          width="auto"
          position="absolute"
          src={process.env.PUBLIC_URL + "/images/misc/floatingKiwi.png"}
          alt="floatingKiwi"
          right={["-10%", "-5%", "-5%", "10%"]}
          maxH={["400px", "500px", "600px", "750px"]}
        />
      </Flex>

      {/* Text & Map*/}
      <Flex
        width="100%"
        height="90vh"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        position="absolute"
        zIndex="2"
      >
        <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Visit us</Text>

        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.645415769407!2d-116.62669422374162!3d31.861862830189793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d89265bfd3eab9%3A0x286b714907abf8cb!2sSweetberry!5e0!3m2!1sen!2smx!4v1731000627396!5m2!1sen!2smx"
          style={{
            border: `5px solid ${theme.hardBlue}`,
            borderRadius: "10px",
            height: mediaQuery ? "50%" : "70%",
            maxWidth: "1200px",
            width: "90%",
            maxHeight: mediaQuery ? "800px" : "300px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>Monday - Sunday</Text>
          <Text fontSize={["1.5rem", "2rem", "2.25rem"]}>9am - 9pm</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VisitUs;
