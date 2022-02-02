import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Center } from "@chakra-ui/react";
import dj from '../3233850.png';

const Artists = () => {
  return (
    <div>
      <RouterLink to="/Artists">
        <Box>
          <Image
            height = {40}
            src={dj}
            alt="fb"
          ></Image>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
            artist
            </Heading>
          </Center>
          <Text px={8} pb={4}>
            test
          </Text>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Artists;