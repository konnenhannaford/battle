import React, { useEffect, useState } from "react";
import {   Link, useParams } from "react-router-dom";
import { Button, HStack,SimpleGrid, Box, Text } from "@chakra-ui/react";
import Nav from "../components/Navbar";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { LOAD_DATA, DEL_SONG} from "../GraphQl/Queries";
import { BiMusic} from 'react-icons/bi'
import bgpic from '../components/z.gif';

const Home = () => {
  //window.location.reload(false)
  const {id} = useParams();
  const [allSongs, setAllSongs] = useState();
  const [songsUser, setUserSongs] = useState();
  const { data: Songs } = useQuery(LOAD_DATA);
  const [deleteSong,{ data: delSong, error, loading, refetch }] = useLazyQuery(DEL_SONG);
 
  //const { data: userSongs, error:UserErr, loading:UserSongsLoading } = useQuery(USER_SONGS,{variables:{artistId:id}});
  const handleDelete = (id) =>{
    deleteSong({variables:{deleteSongId:id}})
    console.log(id);

  }
console.log(delSong)
 // console.log(allSongs);
 // console.log(songsUser)
 useEffect(()=>{
  console.log(delSong && delSong);
  if(delSong){
    const list = delSong.deleteSong;
    const remainingSongs = songsUser.filter((song)=>song.id !== list.id);
        console.log(remainingSongs);
        setUserSongs(remainingSongs) 
  } 

 },[delSong])
  useEffect(() => {
    console.log(Songs && Songs);
    if (Songs) {
      const list = Songs.users.songs
      if(id){
        const artistSongs = list.filter((song)=>song.artistId === id);
        console.log(artistSongs); 
        const otherSongs = list.filter((song)=>song.artistId !== id);
        console.log(otherSongs)
        setUserSongs(artistSongs);
        setAllSongs(otherSongs);
      }else{
        setAllSongs(Songs.users.songs)
      }
      //setAllSongs(Songs.users.songs);
    }
  }, [Songs]);
 // window.location.reload(false);
  return (
    <div>
      <Nav />

        <Box
        bgImage={bgpic}
        
        // bgImage="url('./pngegg.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
  bgSize="cover"
  width='100%'
  height='100%'
  bgAttachment= "fixed"
>
          <Text 
          fontSize={20}>
            Sampled is a site to post remixes of songs. Users will download the
            samples uploaded each week and post a remix containign at least 3 of
            the provided samples. Once uploaded, users will vote each week and
            the winning song will be added to our winners page
          </Text>
          {/* <SimpleGrid
            columns={{ sm: 2, md: 4 }}
            spacing="8"
            p="10"
            textAlign="center"
            rounded="lg"
            bg="transparent !important"
          >
            THIS WEEKS SAMPLES
            <Box boxShadow="xl" p="2" rounded="md" bg="blue.500">
              <h1> Sample 1 </h1>
            </Box>
            <Box boxShadow="xl" p="2" rounded="md" bg="blue.300">
              <h1> Sample 2 </h1>
            </Box>
            <Box boxShadow="xl" p="2" rounded="md" bg="blue.100">
              <h1> Sample 3 </h1>
            </Box>
            <Box boxShadow="xl" p="2" rounded="md" bg="cyan.200">
              <h1> Sample 4 </h1>
            </Box>
            <Box boxShadow="xl" p="2" rounded="md" bg="cyan.400">
              <h1> Sample 5 </h1>
            </Box>
            <Box bg="#fcbc73" color="000000"><h4> THIS WEEKS SAMPLES</h4> */}
<Box color="faf0e6"><h4> THIS WEEKS SAMPLES</h4></Box>
                     
        <HStack display="flex" alignItems="center" justifyContent="space-between">

                  <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
                      Button
                    </Button>
                    <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
                      Button
                    </Button>
                    <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
                      Button
                    </Button>
                    <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
                      Button
                    </Button>
                    <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
                      Button
                    </Button>
        </HStack>
        {/* </Box> */}
        
            
          {/* </SimpleGrid> */}

          <SimpleGrid
            // bgGradient={["linear(to-br, orange.300, red.500)"]}
            columns={{ sm: 2, md: 4 }}
            spacing="8"
            p="10"
            textAlign="center"
            rounded="lg"
          >
            THIS WEEKS SUBMISSIONS
            {songsUser &&
              songsUser.map((song) => {
                return (
                  <Box boxShadow="xl" p="6" rounded="md" bg="white"color={"black"}>
                    <h1>{song.submission} </h1>
                    <p>{song.submissionInfo}</p>
                    <button bg="red" onClick={()=>handleDelete(song.id)}>DELETE</button>
                  </Box>
                );
              })}
            {allSongs &&
              allSongs.map((song) => {
                return (
                  <Box boxShadow="xl" p="6" rounded="md" bg="white"color={"black"}>
                    <h1>{song.submission} </h1>
                    <p>{song.submissionInfo}</p>
                  </Box>
                );
              })}
          </SimpleGrid>
        </Box>
    </div>
  );
};

export default Home;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import {  Stack, Button, SimpleGrid,  Box, Text } from "@chakra-ui/react";
// import {Howl} from "howler";
// import sam1 from './sam1.mp3'
// import { BiMusic} from 'react-icons/bi'
// // import bgpic from './pngegg.png'
// // import bgpic from '../components/ss2.png';
// import bgpic from '../components/z.gif';
// import Nav from "../components/Navbar";
// import { useQuery, gql, useLazyQuery } from "@apollo/client";
// import { LOAD_DATA, DEL_SONG} from "../GraphQl/Queries";

//               const Home = () => {
//                 // const sound = new Howl ({
//                 //   src: {sam1},
//                 //   html5: true,
  
//     //window.location.reload(false)
//   const {id} = useParams();
//   const [allSongs, setAllSongs] = useState();
//   const [songsUser, setUserSongs] = useState();
//   const { data: Songs } = useQuery(LOAD_DATA);
//   const [deleteSong,{ data: delSong, error, loading, refetch }] = useLazyQuery(DEL_SONG);
 
//   //const { data: userSongs, error:UserErr, loading:UserSongsLoading } = useQuery(USER_SONGS,{variables:{artistId:id}});
//   const handleDelete = (id) =>{
//     deleteSong({variables:{deleteSongId:id}})
//     console.log(id);

//   }
// console.log(delSong)
//  // console.log(allSongs);
//  // console.log(songsUser)
//  useEffect(()=>{
//   console.log(delSong && delSong);
//   if(delSong){
//     const list = delSong.deleteSong;
//     const remainingSongs = songsUser.filter((song)=>song.id !== list.id);
//         console.log(remainingSongs);
//         setUserSongs(remainingSongs) 
//   } 

//  },[delSong])
//   useEffect(() => {
//     console.log(Songs && Songs);
//     if (Songs) {
//       const list = Songs.users.songs
//       if(id){
//         const artistSongs = list.filter((song)=>song.artistId === id);
//         console.log(artistSongs); 
//         const otherSongs = list.filter((song)=>song.artistId !== id);
//         console.log(otherSongs)
//         setUserSongs(artistSongs);
//         setAllSongs(otherSongs);
//       }else{
//         setAllSongs(Songs.users.songs)
//       }
//       //setAllSongs(Songs.users.songs);
//     }
//   }, [Songs]);
//  // window.location.reload(false);


//   return (
    
//       <div>
//         <Nav />
  
//           <Box
         
//         bgImage={bgpic}
        
//         // bgImage="url('./pngegg.png')"
//   bgPosition="center"
//   bgRepeat="no-repeat"
//   bgSize="cover"
//   width='100%'
//   height='100%'
//   bgAttachment= "fixed"
// >
//           <Text textAlign={[ 'left', 'center' ]} fontSize={20}>
//             Sampled is a  site to post remixes of songs.  Users will download the samples uploaded each week and post a remix containign at least 3 of the provided samples.  Once uploaded, users will vote each week and the winning song will be added to our winners page
//           </Text>


//           {/* <SimpleGrid
//                     columns={{ sm: 2, md: 4 }}
//                     spacing='8'
//                     p='10'
//                     textAlign='center'
//                     rounded='lg'
//                     bg='transparent !important'
//                     color="#fcbc73"
//                   >
//                     THIS WEEKS SAMPLES
//                     <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
//                     <div onClick={() => sound.play()} >
//                     <h1> PLAy</h1>
//                     </div>
//                     </Box>
//                     <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
//                     <div onClick={() => sound.pause()} >
//                     <h1> PAUSE</h1>
//                     </div>
//                     </Box>
//                     <Box boxShadow='xl' p='2' rounded='md' bg='blue.100'>
//                     <h1> Sample 3 </h1>
//                     </Box>
//                     <Box boxShadow='xl' p='2' rounded='md' bg='cyan.200'>
//                     <h1> Sample 4 </h1>
//                     </Box>
//                     <Box boxShadow='xl' p='2' rounded='md' bg='cyan.400'>
//                     <h1> Sample 5 </h1>
//                     </Box>
//                     </SimpleGrid> */}
//                     {/* <Stack direction='row' align='center'>
//                       THIS WEEKS SAMPLES
//                     <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
//                         Button
//                       </Button>
//                       <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
//                         Button
//                       </Button>
//                       <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
//                         Button
//                       </Button>
//                       <Button lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
//                         Button
//                       </Button>
//                       <Button  lefticon={BiMusic} color="#fcbc73" size='lg' variant='outline'>
//                         Button
//                       </Button>
//                   </Stack> */}

//         <SimpleGrid        
                     

//                     columns={{ sm: 2, md: 4 }}
//                     spacing='8'
//                     p='10'
//                     textAlign='center'
//                     rounded='lg'
//                  >
//                     <Box>THIS WEEKS SUBMISSIONS</Box>
//                     {songsUser &&
//               songsUser.map((song) => {
//                 return (
//                   <Box boxShadow="xl" p="6" rounded="md" bg="white"color={"black"}>
//                     <h1>{song.submission} </h1>
//                     <p>{song.submissionInfo}</p>
//                     <a href={`$(song.submissionInfo)`}>.{song.submissionInfo}</a>
//                     <button bg="red" onClick={()=>handleDelete(song.id)}>DELETE</button>
//                   </Box>
//                 );
//               })}
//             {allSongs &&
//               allSongs.map((song) => {
//                 return (
//                   <Box boxShadow="xl" p="6" rounded="md" bg="white"color={"black"}>
//                     <h1>{song.submission} </h1>
//                     <p>{song.submissionInfo}</p>
//                   </Box>
//                 );
//               })}
//           </SimpleGrid>
//         </Box>
//     </div>
//   );
// };
// export default Home;

//                                                           /* <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
//                                                           <h1> Submission 1 </h1>
//                                                           <h3> Artist </h3>
//                                                           <h3> Song </h3>

//                                                           </Box>
//                                                           <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
//                                                           <h1> Submission 1 </h1>
//                                                           <h3> Artist </h3>
//                                                           <h3> Song </h3>

//                                                           </Box>
//                                                           <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
//                                                           <h1> Submission 1 </h1>
//                                                           <h3> Artist </h3>
//                                                           <h3> Song </h3>

//                                                           </Box>
//                                                           <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
//                                                           <h1> Submission 1 </h1>
//                                                           <h3> Artist </h3>
//                                                           <h3> Song </h3>

//                                                           </Box>
//                                                           <Box border='1px' borderColor='gray.200' boxShadow='xl' p='6' rounded='md' bg='transparent'>
//                                                           <h1> Submission 1 </h1>
//                                                           <h3> Artist </h3>
//                                                           <h3> Song </h3>

//                                                           </Box>
//                                                           </SimpleGrid>
//                                               </Box>
//                                             </Link>
//                                           </div>
//                                         );
//                                       }; */

//                                       // export default Home;

                                      