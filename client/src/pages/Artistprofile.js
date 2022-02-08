import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Nav from "../components/Navbar";
import {
  Icon,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Center,
  Flex
} from "@chakra-ui/react";
import {
  RiSpotifyLine,
  RiSoundcloudLine,
  RiYoutubeLine,
  RiAppleLine,
  RiInformationLine,
} from "react-icons/ri";
import {
  MdOutlineMailOutline
} from "react-icons/md";

import {
  GrGroup,
  GrMusic
} from "react-icons/gr";


import { useQuery, gql } from "@apollo/client";
import { GET_USER } from "../GraphQl/Queries";
import { useMutation } from '@apollo/client'
import { CREATE_SONG_MUTATION, UPDATE_PROFILE } from '../GraphQl/Mutations';
import bgpic from '../components/z.gif';

import '../components/logo.css';

const Artistprofile = () => {

  const {id} = useParams()
 console.log(id)
  const {refetch, data, error, loading } = useQuery(GET_USER, {
    variables: { id:id },
  });
  const [addSong,{data:SongAdded}] = useMutation(CREATE_SONG_MUTATION)
  const [updateProfile, {data:Profile}] = useMutation(UPDATE_PROFILE);
  const [userData, setUserData] = useState();
  console.log(userData);
  const history = useHistory();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
     await updateProfile({variables:{...userData, id}})
  }
  const [songData, setSongData] = useState({submission:"",submissionInfo:""});
  //console.log(userData);
  const handleSongChange = (event) => {
    const { name, value } = event.target;
    setSongData({ ...songData, [name]: value });
  };
  const handleSongSubmit = async (event) =>{   
    event.preventDefault(); 
    console.log(songData);
   await addSong({variables:{...songData,artistId:id}})
  }
  useEffect(()=>{
    console.log(Profile && Profile)
    if(Profile){
     //localStorage.setItem("artistProfile",JSON.stringify(Profile))
      history.push(`/${id}`)
     // history.replace(redirectPath);
    }
  },[Profile])
  useEffect(()=>{
    console.log(SongAdded)
    if(SongAdded){
      //localStorage.setItem("AddedSong",JSON.stringify(SongAdded))
      console.log(SongAdded)
      history.push(`/${id}`)
    }
  },[SongAdded])
  useEffect(() => {
    if (data) {
      console.log(data);
      const artist = data.user.artist;
      console.log(artist);
      setUserData(artist);
    }
  }, [data]);


  useEffect(() => {
    refetch();
  }, [])
  
  return (
 
      // <Flex 
      //           bgImage={bgpic}
      //           bgPosition="center"
      //           bgRepeat="no-repeat"
      //           bgSize="cover"
      //           width='100%'
      //           height='100%'
      //           bgAttachment= "fixed"
      // width="full" align="center" justifyContent="center">   

      <div>
      <Nav/>
<Flex    display="inline" width="full" align="center" justifyContent="center">
        <Box>
          {/* <Center> */}
            <Heading  className="blurb" textAlign="center" color="#faf0e6">
              Your Profile
            </Heading>
          {/* </Center> */}
        </Box>
        <Box  align="center" justifyContent="center" maxWidth="500px" my={4} textAlign="left" boxShadow="xl" p="6" rounded="md" bg="transparent">
          <form onSubmit={handleFormSubmit}>
          <FormControl>
            <FormLabel>
              <h3 >
                {" "}
                <Icon as={MdOutlineMailOutline} />
                email{" "}
              </h3>
            </FormLabel>
            <Input
              type="email"
              name="email"
              defaultValue={userData && userData.email}
              placeholder="describe yourself"
              onChange={handleInputChange}
            />     
      <FormLabel>
              <h3>
                {" "}
                <Icon as={GrGroup} />Artist Name:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.artist_name}
              placeholder="describe yourself"
              onChange={handleInputChange}
              name="artist_name"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiInformationLine} />Artist info:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.artist_info}
              placeholder="describe yourself"
              onChange={handleInputChange}
               name="artist_info"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiSpotifyLine} />Spotify:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.spotify}
              placeholder="provide your spotify link"
              onChange={handleInputChange}
              name="spotify"
            />
            <FormLabel>
              {" "}
              <h3>
                {" "}
                <Icon as={RiYoutubeLine} />Youtube:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.youtube}
              placeholder="provide your youtube link"
              onChange={handleInputChange}
              name="youtube"
            />
            <FormLabel>
              {" "}
              <h3>
                {" "}
                <Icon as={RiSoundcloudLine} />Soundcloud:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.soundcloud}
              placeholder="provide your soundcloud link"
              onChange={handleInputChange}
              name="soundcloud"
            />
            <FormLabel>
              <h3>
                {" "}
                <Icon as={RiAppleLine} />Apple:{" "}
              </h3>
            </FormLabel>
            <Input
              type="text"
              defaultValue={userData &&userData.apple}
              placeholder="provide your apple link"
              onChange={handleInputChange}
               name="apple"
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
          </form>
        </Box>
        <Box boxShadow='xl' p='6' rounded='md' bg='white'>
            <form onSubmit={handleSongSubmit}>
              <FormControl>
                <FormLabel><h3> <Icon as={GrMusic} /> ARTIST - SONG NAME: </h3></FormLabel>
                <Input type="text"name="submission"onChange={handleSongChange}
                value={songData.submission} placeholder="artist and song name" />
             
              <FormLabel><h3> <Icon as={GrMusic} /> SONG UPLOAD: </h3></FormLabel>
                <Input type="text"name="submissionInfo"onChange={handleSongChange}
                value={songData.submissionInfo} placeholder="song link url" />
              </FormControl>
              <Button onClick={() => refetch()} type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
            Add your song
            </Button>
            </form>
          </Box>
          </Flex>
          </div>
  );
};

export default Artistprofile;