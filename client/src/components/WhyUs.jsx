import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Feature from './Feature';
import { FaBolt } from "react-icons/fa6";
import theme from '../utils/colors';


const WhyUs = () => {
    return (
        <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="1rem"
        >
            <Text
                fontSize="3rem"
            >
                Why To Choose Us?
            </Text>
            <Flex>
                <Feature 
                    icon={<FaBolt />}
                    text="Fast Delivery"
                    color={theme.hardBlue}
                />
            </Flex>
        </Flex>
    );
};

export default WhyUs;