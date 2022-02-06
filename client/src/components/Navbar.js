import dj from './vynil.png';
// import navmp4 from './nav.mp4';
import { RiAccountCircleLine } from 'react-icons/ri'
import { FaMedal} from 'react-icons/fa'
import { AiOutlineHome} from 'react-icons/ai'
import { BiMusic, BiLogInCircle, BiLogOutCircle} from 'react-icons/bi'
import { HiUserGroup} from 'react-icons/hi'
import { TiUserAddOutline} from 'react-icons/ti'

// import {Howl} from "howler";
// import sam1 from './sam1.mp3'


import React, { useEffect } from "react";
import Auth from "./../utils/auth";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  Image,
  Center,
  Spacer,
  Box,
  Heading,
  Tooltip,
  keyframes,
  Icon,
  HStack, Button, SimpleGrid,  Text, useTooltip
} from "@chakra-ui/react";
import './logo.css';



function Nav() {

const {id} = useParams();
useEffect(()=>{
  console.log(id)
},[2])
console.log(id)
if (id) {
  return (

      <header>
        <Box
        
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="
          #040603"

        >
                     <Heading color="#faf0e6" m={5} p={2}>
        sampled..
                  
          </Heading> 

          <Image className='logo'
          // animation={spin}
          src={dj}
          alt="sampled logo"
          h="100"
          ></Image>
          <Spacer />
          <Center>
            {/* <Tabs color="#1a535c" variant="unstyled" pt={8}> */}
            <Tabs color="#fcbc73" variant="unstyled" pt={8}>

            <TabList>
              <Tab>
                <RouterLink to={`/${id}`}> Home <Icon as={AiOutlineHome} /></RouterLink>
                <useTooltip Tooltip label='Hover me'>
                  <span>
                  <Icon as={AiOutlineHome} />
                  </span>
                </useTooltip>
              </Tab>
              <Tab>
                <RouterLink  to={`${id}/artists`}>Artists <Icon as={HiUserGroup} /></RouterLink>
              </Tab>
              <Tab>
                <RouterLink  to={`/winners/${id}`}> Winners <Icon as={FaMedal} /></RouterLink>
              </Tab>
              <Tab>
                <RouterLink  to={`/artistprofile/${id}`}> Artist Profile <Icon as={RiAccountCircleLine} /></RouterLink>
              </Tab>              
              <Tab>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
                <Icon as={BiLogOutCircle} />
         
              </Tab>

            </TabList>
            </Tabs>
          </Center>
        </Box>
      </header>
    );
  } else {
    return (
      
      <header>
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="#000000"
        >
           <Heading  color="#fcbc73" m={5} p={2}>
        sampled..
                  
          </Heading> 
          <Image 
            // animation={animation}
            src={dj}
            alt="sampled logo"
            h="100"
          ></Image>
       

                  <Spacer />

          <Center>
            <Box justify="center">
                <Tabs color="#fcbc73" variant="unstyled" pt={8}>
                    <TabList>
                        <Tab>
                          <RouterLink to="/"> <Icon as={AiOutlineHome} /></RouterLink>
                        </Tab>
                        <Tab>
                          <RouterLink to="/artists"><Icon as={HiUserGroup} /></RouterLink>
                        </Tab>
                        <Tab>
                          <RouterLink to="/winners"><Icon as={FaMedal} /></RouterLink>
                        </Tab>
                        <Tab>
                          <RouterLink to="/signup"><Icon as={TiUserAddOutline} /></RouterLink>
                        </Tab>
                        <Tab>
                          <RouterLink to="/login"> <Icon as={BiLogInCircle} /></RouterLink>
                        </Tab>
                        {/* <Tab>
                          <RouterLink to="/artistprofile"> <Icon as={RiAccountCircleLine} /></RouterLink>
                        </Tab>               */}
                    </TabList>
                </Tabs>
            </Box>
          </Center>
          </Box>
          </header>
    
        //   <Box>   

        //           {/* <Button onClick={() => sound.play()} type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
        //         Sign In
        //         </Button> */}
        // </Box>
    );
  }
}

export default Nav;

// </header>

// <Box bg="#fcbc73" color="000000"><h4> THIS WEEKS SAMPLES</h4>
        
// <HStack display="flex" alignItems="center" justifyContent="space-between">

//           <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
//               Button
//             </Button>
//             <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
//               Button
//             </Button>
//             <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
//               Button
//             </Button>
//             <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
//               Button
//             </Button>
//             <Button lefticon={BiMusic} color="#000000" size='sm' variant='outline'>
//               Button
//             </Button>
//         </HStack>
//         </Box>
