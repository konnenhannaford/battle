import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { Icon, SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";
import { RiSpotifyLine, RiSoundcloudLine, RiYoutubeLine, RiAppleLine, RiInformationLine} from 'react-icons/ri'
import { useQuery, gql } from "@apollo/client";
import { LOAD_DATA } from "../GraphQl/Queries";
import Nav from "../components/Navbar";
import bgpic from '../components/z.gif';
import {
  GrGroup
} from "react-icons/gr";


const Artists = () => {
  
const {refetch, data, error, loading} = useQuery(LOAD_DATA);

const [allArtists, setAllArtists] = useState([]);
console.log(allArtists);
useEffect(()=>{
if(data){
  console.log(data.users.artists)

  setAllArtists(data.users.artists);
}


},[data]);

useEffect(() => {
  refetch();
}, [])
  return (
    <div
    >
      <Nav/>
      <Link to="/Artists">
        <Box 
                  //  bgImage={bgpic}
                  //  bgPosition="center"
                  //  bgRepeat="no-repeat"
                  //  bgSize="cover"
                  //  width='100%'
                  //  height='100%'
                  //  bgAttachment= "fixed"
                   >
          <Center>
            <Heading color="linen" m={4} p={4}>
            artists
            </Heading>
          </Center>
          <SimpleGrid
              // bg='gray.50'
              m="auto"
              w="75%"
              columns={{ sm: 1, md: 2 }}
              spacing='8'
              p='10'
              textAlign='center'
              rounded='lg'
              color='gray.400'
            >
              {allArtists && allArtists.map((artist)=>{
             
             return (
             <Box boxShadow='xl' p='6' rounded='md' bg='white'>
              
                            <h3>  <Icon as={GrGroup} /> {artist.artist_name} </h3>
                            <h3>  <Icon as={RiInformationLine} /> {artist.artist_info} </h3>
                            <h3>  <Icon as={RiSpotifyLine} /> {artist.spotify} </h3>
                            <h3> <Icon as={RiYoutubeLine} />{artist.youtube} </h3>
                            <h3> <Icon as={RiSoundcloudLine} />{artist.soundcloud} </h3>
                            <h3> <Icon as={RiAppleLine} /> {artist.apple}</h3>
              </Box>

             )})}
             
            </SimpleGrid>
        </Box>
      </Link>
    </div>
  );
};

export default Artists;
