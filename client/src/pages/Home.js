import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {  SimpleGrid,  Box, Text, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <RouterLink to="/">
        <Box color="pink">
          <Center>
            {/* <Heading color="#1a535c" m={4} p={4}>
            artist
            </Heading> */}
          </Center>
          <Text fontSize={20}>
            Sampled is a  site to post remixes of songs.  Users will download the samples uploaded each week and post a remix containign at least 3 of the provided samples.  Once uploaded, users will vote each week and the winning song will be added to our winners page
          </Text>
          <SimpleGrid
                    bg='gray.50'
                    columns={{ sm: 2, md: 4 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                    color='gray.400'
                  >
                    THIS WEEKS SAMPLES
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Sample 1 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Sample 2 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Sample 3 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Sample 4 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Sample 5 </h1>
                    </Box>
                    </SimpleGrid>
        </Box>
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
                    THIS WEEKS SUBMISSIONS
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Submission 1 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Submission 2 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Submission 3 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Submission 4 </h1>
                    </Box>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <h1> Submission 5 </h1>
                    </Box>
                    </SimpleGrid>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Home;