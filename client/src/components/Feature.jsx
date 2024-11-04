import { Flex, Icon, Text } from '@chakra-ui/react';
import theme from '../utils/colors';
import React from 'react';
import { FaBolt } from "react-icons/fa6";

const Feature = ({color=theme.hardBlue, icon, text}) => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Icon
                width="6rem"
                height="6rem"
                color={color}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                border={`2px solid ${color}`}
            >
                {icon}
            </Icon>
            <Text>
                {text}
            </Text>
        </Flex>
    );
};

export default Feature;