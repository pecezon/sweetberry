import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const YogurtImage = ({imgPath, littleImgPath, color, top="0px", left, right, zIndex="0px"}) => {
    return (
        <Flex
            width={["225px", "250px", "300px", "375px"]}
            height={["225px", "250px", "300px", "375px"]}
            justifyContent="center"
            alignItems="center"
            borderRadius="60%"
            background={color}
            position="relative"
            top={top}
            right={right}
            left={left}
            zIndex={zIndex}
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
                bottom={["20px", "15px", "20px", "25px"]}
                right={["60px", "30px", "40px", "80px"]}
                position="absolute"
            />
        </Flex>
    );
};

export default YogurtImage;