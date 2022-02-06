import React from "react";
import { Link } from "react-router-dom";
import {  Stack, Button, SimpleGrid,  Box, Text } from "@chakra-ui/react";
import {Howl} from "howler";
import sam1 from './sam1.mp3'
import { BiMusic} from 'react-icons/bi'
// import bgpic from './pngegg.png'
// import bgpic from '../components/ss2.png';
import bgpic from '../components/z.gif';
import Nav from "../components/Navbar";

const Home = () => {
  const sound = new Howl ({
    src: {sam1},
    html5: true,
  
  });
  return (
    <div>
            <Nav/>

      <Link to="/">
        <Box       
        bgImage={bgpic}
        
        // bgImage="url('./pngegg.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  width='100vw'
  height='100vh'
>
          <Text textAlign={[ 'left', 'center' ]} fontSize={20}>
            Sampled is a  site to post remixes of songs.  Users will download the samples uploaded each week and post a remix containign at least 3 of the provided samples.  Once uploaded, users will vote each week and the winning song will be added to our winners page
          </Text>


          {/* <SimpleGrid
                    columns={{ sm: 2, md: 4 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                    bg='transparent !important'
                    color="#fcbc73"
                  >
                    THIS WEEKS SAMPLES
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    <div onClick={() => sound.play()} >
                    <h1> PLAy</h1>
                    </div>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    <div onClick={() => sound.pause()} >
                    <h1> PAUSE</h1>
                    </div>
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
                    </SimpleGrid> */}
                    {/* <Stack direction='row' align='center'>
                      THIS WEEKS SAMPLES
                    <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
                        Button
                      </Button>
                      <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
                        Button
                      </Button>
                      <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
                        Button
                      </Button>
                      <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
                        Button
                      </Button>
                      <Button  lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
                        Button
                      </Button>
                  </Stack> */}

        <SimpleGrid                     

                    columns={{ sm: 2, md: 4 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                 >
                    <Box>THIS WEEKS SUBMISSIONS</Box>
                    <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
                    <h1> Submission 1 </h1>
                    <h3> Artist </h3>
                    <h3> Song </h3>

                    </Box>
                    <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
                    <h1> Submission 1 </h1>
                    <h3> Artist </h3>
                    <h3> Song </h3>

                    </Box>
                    <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
                    <h1> Submission 1 </h1>
                    <h3> Artist </h3>
                    <h3> Song </h3>

                    </Box>
                    <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
                    <h1> Submission 1 </h1>
                    <h3> Artist </h3>
                    <h3> Song </h3>

                    </Box>
                    <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
                    <h1> Submission 1 </h1>
                    <h3> Artist </h3>
                    <h3> Song </h3>

                    </Box>
                    </SimpleGrid>
        </Box>
      </Link>
    </div>
  );
};

export default Home;