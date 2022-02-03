import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {  SimpleGrid,  Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <RouterLink to="/">
        <Box     
                            bgGradient={[
                              'linear(to-br, orange.300, red.500)',
                            ]} 
>
          <Text fontSize={20}>
            Sampled is a  site to post remixes of songs.  Users will download the samples uploaded each week and post a remix containign at least 3 of the provided samples.  Once uploaded, users will vote each week and the winning song will be added to our winners page
          </Text>
          <SimpleGrid
                    columns={{ sm: 2, md: 4 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'

                  >
                    THIS WEEKS SAMPLES
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    <h1> Sample 1 </h1>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.300'>
                    <h1> Sample 2 </h1>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.100'>
                    <h1> Sample 3 </h1>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='cyan.200'>
                    <h1> Sample 4 </h1>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='cyan.400'>
                    <h1> Sample 5 </h1>
                    </Box>
                    </SimpleGrid>

        <SimpleGrid                             bgGradient={[
                              'linear(to-br, orange.300, red.500)',
                            ]} 

                    columns={{ sm: 2, md: 4 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
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