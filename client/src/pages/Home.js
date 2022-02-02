import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <RouterLink to="/">
        <Box>
          <Image
            src="battle/client/src/components/vynil.png"
            
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

export default Home;