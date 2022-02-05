import React from "react";
import { Link} from "react-router-dom";
import { Icon, SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";
import { RiSpotifyLine, RiSoundcloudLine, RiYoutubeLine, RiAppleLine, RiInformationLine} from 'react-icons/ri'

const Artists = () => {
  return (
    <div>
      <Link to="/Artists">
        <Box>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
            artists
            </Heading>
          </Center>
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
                            <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
                            <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
                            <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
                            <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
                            <h3> <Icon as={RiAppleLine} />* Apple: </h3>
              </Box>
              
              <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <h1> Artist 1 </h1>
                            <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
                            <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
                            <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
                            <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
                            <h3> <Icon as={RiAppleLine} />* Apple: </h3>
              </Box>
              
              <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <h1> Artist 1 </h1>
                            <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
                            <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
                            <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
                            <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
                            <h3> <Icon as={RiAppleLine} />* Apple: </h3>
              </Box>
              
              <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <h1> Artist 1 </h1>
                            <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
                            <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
                            <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
                            <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
                            <h3> <Icon as={RiAppleLine} />* Apple: </h3>
              </Box>
              <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <h1> Artist 1 </h1>
                            <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
                            <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
                            <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
                            <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
                            <h3> <Icon as={RiAppleLine} />* Apple: </h3>
              </Box>
              <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <h1> Artist 1 </h1>
                            <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
                            <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
                            <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
                            <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
                            <h3> <Icon as={RiAppleLine} />* Apple: </h3>
              </Box>
            </SimpleGrid>
        </Box>
      </Link>
    </div>
  );
};

export default Artists;