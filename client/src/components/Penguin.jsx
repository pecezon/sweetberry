import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import theme from '../utils/colors';

const Penguin = () => {
    return (
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
    );
};

export default Penguin;