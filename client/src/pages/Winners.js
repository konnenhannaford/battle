import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";
import Nav from "../components/Navbar";

const Winners = () => {
  return (
    <div>
            <Nav/>

      <RouterLink to="/Winners">
        <Box>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
            winners
            </Heading>
            <Box>
                <SimpleGrid
                    bg='gray.50'
                    columns={{ sm: 2, md: 4 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                    color='gray.400'
                  >

                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Artist 1 </h1>
                                  <h3> * Artist info: </h3>
                                  <h3> * Spotify: </h3>
                                  <h3> * Youtube: </h3>
                                  <h3> * Soundcloud: </h3>
                                  <h3> * Apple: </h3>
                    </Box>
                </SimpleGrid>
                </Box>
          </Center>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Winners;