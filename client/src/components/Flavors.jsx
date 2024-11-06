import { Flex, Box, Image } from '@chakra-ui/react';
import React from 'react';

const Flavors = () => {
    return (
            <Flex
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                flexDirection={["column", "row"]}
                maxH="1280px"
                h="100vh"
            >
                <Flex
                w="50%"
                h="90%"
                border="1px solid blue"
                position="relative"
                alignItems="center"
                overflow="hidden"
            >
            <Image
                    src={process.env.PUBLIC_URL + 'images/brand/penguin.png'}
                    alt="penguin"
                    height='75%'
                    width='auto'
                    position="absolute"
                    left="-15%"
            >

            </Image>
            </Flex>
            <Box
                w="50%"
                h="90%"
                border="1px solid blue"
                alignItems="center"
            ></Box>
        </Flex>
    );
};

export default Flavors;