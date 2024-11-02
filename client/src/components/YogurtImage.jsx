import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const YogurtImage = ({imgPath, littleImgPath, color}) => {
    return (
        <Flex
            width={["250px", "200px", "300px", "400px"]}
            height={["250px", "200px", "300px", "400px"]}
            justifyContent="center"
            alignItems="center"
            borderRadius="60%"
            background={color}
            position="relative"
        >
            <Image
                src={imgPath}
                width={["40%","50%"]}
                maxWidth="300px"
            />
            <Image
                src={littleImgPath}
                width="25%"
                height="auto"
                bottom={["10px", "15px", "20px", "25px"]}
                right={["20px", "30px", "40px", "80px"]}
                position="absolute"
            />
        </Flex>
    );
};

export default YogurtImage;