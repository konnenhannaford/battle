// import React, { useEffect, useState } from "react";
// import {   Link, useParams } from "react-router-dom";
// import { Button, HStack,SimpleGrid, Box, Text } from "@chakra-ui/react";
// import Nav from "../components/Navbar";
// import { useQuery, gql, useLazyQuery } from "@apollo/client";
// import { LOAD_DATA, DEL_SONG} from "../GraphQl/Queries";
// import { BiMusic} from 'react-icons/bi'
// import bgpic from '../components/z.gif';
import '../components/logo.css';



import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Title, Center, Stack, Button, SimpleGrid,  Box, Text } from "@chakra-ui/react";
import {Howl} from "howler";
// import sam1 from '././sam1.mp3'
import { BiPlayCircle, BiPauseCircle} from 'react-icons/bi'
// import bgpic from './pngegg.png'
// import bgpic from '../components/ss2.png';
import bgpic from '../components/z.gif';
import Nav from "../components/Navbar";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { LOAD_DATA, DEL_SONG} from "../GraphQl/Queries";

              const Home = () => {
                const sound1 = new Howl ({
                  src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
                  html5: true,
                })
                const sound2 = new Howl ({
                  src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"],
                  html5: true,
                })
                const sound3 = new Howl ({
                  src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"],
                  html5: true,
                })
                const sound4= new Howl ({
                  src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"],
                  html5: true,
                })
                const sound5 = new Howl ({
                  src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"],
                  html5: true,
                })
                
  
    //window.location.reload(false)
  const {id} = useParams();
  const [allSongs, setAllSongs] = useState();
  const [songsUser, setUserSongs] = useState();
  const {refetch, data: Songs } = useQuery(LOAD_DATA);
  const [deleteSong,{ data: delSong, error, loading }] = useLazyQuery(DEL_SONG);
 
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

 useEffect(() => {
  refetch();
}, [])


  return (
    
      <div>
        <Nav />
  <Center>
          <Box mt = {10} ml = "20%" mr="20%"
         
  //       bgImage={bgpic}
        
  //       // bgImage="url('./pngegg.png')"
  // bgPosition="center"
  // bgRepeat="no-repeat"
  // bgSize="cover"
  // width='100%'
  // height='100%'
  // bgAttachment= "fixed"
>
          <Text  color="#faf0e6"  className="blurb" textAlign={ 'center' } fontSize={30}>
            Sampled is a site to post remixes of songs.  Users will download the samples uploaded each week and post a remix containing at least 3 of the provided samples.  
            Once uploaded, users will vote each week and the winning song will be crowned champions
          </Text>
<Box mt={20}>
          <Text textAlign={ 'center' } >THIS WEEKS SAMPLES</Text>
          <SimpleGrid
                    columns={{ sm: 2, md: 5 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                    bg='transparent !important'
                    color="#fcbc73"
                  >
                    
                    <Box  justify="center" align="centre" boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    {/* <div onClick={() => sound.play()} > */}
                    <a href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"> SAMPLE 1 </a>
                    <BiPlayCircle onClick={() => sound1.play()} align="centre"/>< BiPauseCircle onClick={() => sound1.pause()}/>
                    {/* </div> */}
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    {/* <div onClick={() => sound.pause()} > */}
                    <a href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"> SAMPLE 2 </a>
                    <BiPlayCircle onClick={() => sound2.play()} align="centre"/>< BiPauseCircle onClick={() => sound2.pause()}/>
                    {/* </div> */}
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    <a href="ttps://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"> SAMPLE 3 </a>
                    <BiPlayCircle onClick={() => sound3.play()} align="centre"/>< BiPauseCircle onClick={() => sound3.pause()}/>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    <a href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"> SAMPLE 4 </a>
                    <BiPlayCircle onClick={() => sound4.play()} align="centre"/>< BiPauseCircle onClick={() => sound4.pause()}/>
                    </Box>
                    <Box boxShadow='xl' p='2' rounded='md' bg='blue.500'>
                    <a href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"> SAMPLE 5 </a>
                    <BiPlayCircle onClick={() => sound5.play()} align="centre"/>< BiPauseCircle onClick={() => sound5.pause()}/>
                    </Box>
                    </SimpleGrid>
                    </Box>


<Box mt={20}>
          <Text textAlign={ 'center' } >THIS WEEKS SUBMISSIONS</Text>
 <SimpleGrid        
                     

                    columns={{ sm: 1, md: 2 }}
                    spacing='8'
                    p='10'
                    textAlign='center'
                    rounded='lg'
                 >
                    {songsUser &&
              songsUser.map((song) => {
                return (
                  <Box boxShadow="xl" p="6" rounded="md" bgColor="pink.200" color={"black"}>
                    <h1>{song.submission} </h1>
                    <a>{song.submissionInfo}</a>
                    <a href={`https://${song.submissionInfo}`}>.{song.submissionInfo}</a>
                    <button bg="red" onClick={()=>handleDelete(song.id)}>DELETE</button>
                  </Box>
                );
              })}
            {allSongs &&
              allSongs.map((song) => {
                return (
                  <Box boxShadow="xl"           align="center"
                  p="6" rounded="md" bg="white" color={"black"}>
                    <h1>{song.submission} </h1>
                    <a href={`https://${song.submissionInfo}`}>{song.submissionInfo}</a>
                  </Box>
                );
              })}
          </SimpleGrid>
</Box>

        </Box>
        </Center>
    </div>
  );
};
export default Home;

                        
                                      