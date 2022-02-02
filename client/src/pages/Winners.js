import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Center } from "@chakra-ui/react";

const Winners = () => {
  return (
    <div>
      <RouterLink to="/Winners">
        <Box>
          <Image
            src="../components/vynil.png"
            
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

export default Winners;