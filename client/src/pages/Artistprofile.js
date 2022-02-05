import React from "react";
import { Link } from "react-router-dom";
import { Icon, FormControl, FormLabel, Input, Button, Box, Heading, Center } from "@chakra-ui/react";
import { RiSpotifyLine, RiSoundcloudLine, RiYoutubeLine, RiAppleLine, RiInformationLine} from 'react-icons/ri'

const Artistprofile = () => {
  return (
    <div>
      <Link to="/artistprofile">
        <Box>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
            Your Profile
            </Heading>
          </Center>
        </Box>
        <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <h1> Artist 1 </h1>
              <FormControl>
              <FormLabel><h3>  <Icon as={RiInformationLine} />email </h3></FormLabel>
              <Input type="email" placeholder="describe yourself" />
              <FormLabel><h3>  <Icon as={RiInformationLine} />Should this be artist name or user name? </h3></FormLabel>
              <Input type="text" placeholder="describe yourself" />
              <FormLabel><h3>  <Icon as={RiInformationLine} />Password: </h3></FormLabel>
              <Input type="text" placeholder="describe yourself" />
              <FormLabel><h3>  <Icon as={RiInformationLine} />* Artist Name: </h3></FormLabel>
              <Input type="text" placeholder="describe yourself" />
              <FormLabel><h3>  <Icon as={RiInformationLine} />* Artist info: </h3></FormLabel>
              <Input type="text" placeholder="describe yourself" />
              <FormLabel><h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3></FormLabel>
              <Input type="text" placeholder="provide your spotify link" />
              <FormLabel>         <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3></FormLabel>
              <Input type="text" placeholder="provide your youtube link" />
              <FormLabel>        <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3></FormLabel>
              <Input type="text" placeholder="provide your soundcloud link" />
              <FormLabel><h3> <Icon as={RiAppleLine} />* Apple: </h3></FormLabel>
              <Input type="text" placeholder="provide your apple link" />
              </FormControl>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
            Update profile
            </Button>
          </Box>
          <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              <FormControl>
                <FormLabel><h3> <Icon as={RiAppleLine} /> SONG UPLOAD: </h3></FormLabel>
                <Input type="text" placeholder="provide a link for your song" />
              </FormControl>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
            Add your song
            </Button>
          </Box>

        </Link>
    </div>

  );
};

export default Artistprofile;