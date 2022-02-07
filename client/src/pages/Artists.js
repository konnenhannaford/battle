// import React, { useEffect, useState } from "react";
// import { Link} from "react-router-dom";
// import { Icon, SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";
// import { RiSpotifyLine, RiSoundcloudLine, RiYoutubeLine, RiAppleLine, RiInformationLine} from 'react-icons/ri'
// import { LOAD_DATA } from "../GraphQl/Queries";
// import { useQuery, gql } from "@apollo/client";

// const Artists = () => {
//   const {data, error, loading} = useQuery(LOAD_DATA);

// const [allArtists, setAllArtists] = useState([]);
// console.log(allArtists);
// useEffect(()=>{
// if(data){
//   console.log(data.users.artists)

//   setAllArtists(data.users.artists);
// }

// },[data])
//   return (
//     <div>
//       <Link to="/Artists">
//         <Box>
//           <Center>
//             <Heading color="#1a535c" m={4} p={4}>
//             artists
//             </Heading>
//           </Center>
//           <SimpleGrid
//               bg='gray.50'
//               columns={{ sm: 2, md: 4 }}
//               spacing='8'
//               p='10'
//               textAlign='center'
//               rounded='lg'
//               color='gray.400'
//             >
//               <Box boxShadow='xl' p='6' rounded='md' bg='white'>
//               <h1> Artist 1 </h1>
//                             <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
//                             <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
//                             <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
//                             <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
//                             <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
//                             <h3> <Icon as={RiAppleLine} />* Apple: </h3>
//               </Box>
              
//               <Box boxShadow='xl' p='6' rounded='md' bg='white'>
//               <h1> Artist 1 </h1>
//                             <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
//                             <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
//                             <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
//                             <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
//                             <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
//                             <h3> <Icon as={RiAppleLine} />* Apple: </h3>
//               </Box>
              
//               <Box boxShadow='xl' p='6' rounded='md' bg='white'>
//               <h1> Artist 1 </h1>
//                             <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
//                             <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
//                             <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
//                             <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
//                             <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
//                             <h3> <Icon as={RiAppleLine} />* Apple: </h3>
//               </Box>
              
//               <Box boxShadow='xl' p='6' rounded='md' bg='white'>
//               <h1> Artist 1 </h1>
//                             <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
//                             <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
//                             <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
//                             <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
//                             <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
//                             <h3> <Icon as={RiAppleLine} />* Apple: </h3>
//               </Box>
//               <Box boxShadow='xl' p='6' rounded='md' bg='white'>
//               <h1> Artist 1 </h1>
//                             <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
//                             <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
//                             <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
//                             <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
//                             <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
//                             <h3> <Icon as={RiAppleLine} />* Apple: </h3>
//               </Box>
//               <Box boxShadow='xl' p='6' rounded='md' bg='white'>
//               <h1> Artist 1 </h1>
//                             <h3>  <Icon as={RiInformationLine} />* Artist Name: </h3>
//                             <h3>  <Icon as={RiInformationLine} />* Artist info: </h3>
//                             <h3>  <Icon as={RiSpotifyLine} /> * Spotify: </h3>
//                             <h3> <Icon as={RiYoutubeLine} />* Youtube: </h3>
//                             <h3> <Icon as={RiSoundcloudLine} />* Soundcloud: </h3>
//                             <h3> <Icon as={RiAppleLine} />* Apple: </h3>
//               </Box>
//             </SimpleGrid>
//         </Box>
//       </Link>
//     </div>
//   );
// };

// export default Artists;





import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { Icon, SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";
import { RiSpotifyLine, RiSoundcloudLine, RiYoutubeLine, RiAppleLine, RiInformationLine} from 'react-icons/ri'
import { useQuery, gql } from "@apollo/client";
import { LOAD_DATA } from "../GraphQl/Queries";
import bgpic from '../components/z.gif';
import Nav from "../components/Navbar";


const Artists = () => {
  
  const {data, error, loading} = useQuery(LOAD_DATA);

  const [allArtists, setAllArtists] = useState([]);
  console.log(allArtists);
  useEffect(()=>{
  if(data){
    console.log(data.users.artists)
  
    setAllArtists(data.users.artists);
  }
  
  },[data])
    return (
      <div>
        <Nav/>
  

      <Link to="/Artists">
        <Box                 bgImage={bgpic}
        
        // bgImage="url('./pngegg.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  width='100vw'
  height='100vh'>
          <Center>
              <Heading color="#1a535c" m={4} p={4}>
              artists
              </Heading>
          </Center>
              <SimpleGrid
                  // bg='gray.50'
                  columns={{ sm: 2, md: 4 }}
                  spacing='8'
                  p='10'
                  textAlign='center'
                  rounded='lg'
                  color='gray.400'
                >
                  {allArtists && allArtists.map((artist)=>{
                
                return (
                <Box boxShadow='xl' p='6' rounded='md' >
                  <h1> Artist 1 </h1>
                                <h3>  <Icon as={RiInformationLine} />* Artist Name: {artist.artist_name} </h3>
                                <h3>  <Icon as={RiInformationLine} />* Artist info: {artist.artist_info} </h3>
                                <h3>  <Icon as={RiSpotifyLine} /> * Spotify: {artist.spotify} </h3>
                                <h3> <Icon as={RiYoutubeLine} />* Youtube: {artist.youtube} </h3>
                                <h3> <Icon as={RiSoundcloudLine} />* Soundcloud:{artist.soundcloud} </h3>
                                <h3> <Icon as={RiAppleLine} />* Apple: {artist.apple}</h3>
                  </Box>

                )})}
                
                </SimpleGrid>
        </Box>
      </Link>
    </div>
  );
};

export default Artists;