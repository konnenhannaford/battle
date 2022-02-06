import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Navbar";
import { Icon, FormControl, FormLabel, Input, Button, Box, Heading, Center } from "@chakra-ui/react";
import { RiSpotifyLine, RiSoundcloudLine, RiYoutubeLine, RiAppleLine, RiInformationLine} from 'react-icons/ri'
import { useQuery, gql } from "@apollo/client";
import { GET_USER } from "../GraphQl/Queries";

const Artistprofile = () => {
  const {id} = useParams()
  const { data, error, loading } = useQuery(GET_USER, {
    variables: { id:id },
  });
  const [userData, setUserData] = useState();
  console.log(userData);

  useEffect(() => {
    if (data) {
      console.log(data);
      const artist = data.user.artist;
      console.log(artist);
      setUserData(artist);
    }
  }, [data]);

  return (
    <div>
<Nav/>    
      <Link to="/artistprofile">
        <Box>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
              Your Profile
            </Heading>
          </Center>
        </Box>
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <h1> Artist 1 </h1>
          <FormControl>
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiInformationLine} />
                email{" "}
              </h3>
            </FormLabel>
            <Input
              type="email"
              defaultValue={userData && userData.email}
              placeholder="describe yourself"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiInformationLine} />
                Should this be artist name or user name?{" "}
              </h3>
            </FormLabel>
            <Input type="text" placeholder="describe yourself" />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiInformationLine} />
                Password:{" "}
              </h3>
            </FormLabel>
            <Input type="text" placeholder="describe yourself" />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiInformationLine} />* Artist Name:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.artist_name}
              placeholder="describe yourself"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiInformationLine} />* Artist info:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.artist_info}
              placeholder="describe yourself"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiSpotifyLine} /> * Spotify:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.spotify}
              placeholder="provide your spotify link"
            />
            <FormLabel>
              {" "}
              <h3>
                {" "}
                <Icon as={RiYoutubeLine} />* Youtube:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.youtube}
              placeholder="provide your youtube link"
            />
            <FormLabel>
              {" "}
              <h3>
                {" "}
                <Icon as={RiSoundcloudLine} />* Soundcloud:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.soundcloud}
              placeholder="provide your soundcloud link"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiAppleLine} />* Apple:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.apple}
              placeholder="provide your apple link"
            />
          </FormControl>
          <Button
            type="submit"
            variantColor="teal"
            variant="outline"
            width="full"
            mt={4}
          >
            Update profile
          </Button>
        </Box>
      </Link>
    </div>
  );
};

export default Artistprofile;