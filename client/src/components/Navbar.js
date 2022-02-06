// import React from "react";
// import Auth from "../utils/auth";
// import { Link as RouterLink } from "react-router-dom";
// import {
// Icon, Tabs, TabList, Tab, Image, Box, Heading } from "@chakra-ui/react";
import dj from './vynil.png';
// import navmp4 from './nav.mp4';
// // import { GiGuitar } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri'
import { FaMedal} from 'react-icons/fa'
import { AiOutlineHome} from 'react-icons/ai'
// import { BiLogInCircle, BiLogOutCircle} from 'react-icons/bi'
import { BiMusic, BiLogInCircle} from 'react-icons/bi'
import { HiUserGroup} from 'react-icons/hi'
import { TiUserAddOutline} from 'react-icons/ti'

                          // import {Howl} from "howler";
                          // import sam1 from './sam1.mp3'

// function Nav() {
//   if (Auth.loggedIn()) {
//     return (
//       <header>
//         <Box m={{ base: 2, sm: 4, md: 6, lg: 8 }}
//           display={{ base: "block", md: "flex", lg: "flex" }}
//           align="center"
//           p={4}
//           bgColor="gray.800"
//         >
//                    <Image className="app-logo"
//             // px={4}
//             height = {40}
//             src={dj}
//             alt="fb"
//             animation= 'infinite 20s linear'
//           ></Image>
//                     <Heading fonts='Menlo, monospace' color="yellow.300" m={5} p={2}>
//             sampled..
//           </Heading>

//           <Tabs justify="space-between" color="white" variant="unstyled" pt={8}>
//               <TabList>
//               <Tab>
//                   <RouterLink to="/"> <Icon as={AiOutlineHome} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/artists"><Icon as={HiUserGroup} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/winners"><Icon as={FaMedal} /></RouterLink>
//                 </Tab>
//               <Tab>
//                 <a href="/" onClick={() => Auth.logout()}>
//                   Logout
//                 </a>
//                 <Icon as={BiLogOutCircle} />
         
//               </Tab>
//             </TabList>
//           </Tabs>
//         </Box>
//       </header>
//     );
//   } else {
//     return (
//       <header>
//         <Box 
//               //  m={{ base: 2, sm: 4, md: 6, lg: 8 }}
//               //   display={{ base: "block", md: "flex", lg: "flex" }}
//                 // p={4}
      
//         // mt={0} 
//         // py={8} 
//         // p={4}
//   // display="flex" mb={4}
//           // align="center"
        
//         >
//                                         {/* <Image className="app-logo"
//                                           // px={4}
//                                           height = {40}
//                                           src={dj}
//                                           alt="fb"
//                                         ></Image> */}
//                 <Heading  z-index={-1}bg="pink.50" m={5} p={2}>
//             sampled..
          
//           </Heading> 
//            {/* <video 
//             // px={4}
//             height = {40}
//             src={navmp4}
//             alt="fb"
//             autoPlay
//             loop
//             itemType="video/mp4"
//             playsInline
//             z-index={1}
//           />

//           <Box justify="center" z-index={2}> */}


//           <Spacer />
//             <Tabs color="#fcbc73" variant="unstyled" pt={8}>
//               <TabList>
//                 <Tab>
//                   <RouterLink to="/"> <Icon as={AiOutlineHome} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/artists"><Icon as={HiUserGroup} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/winners"><Icon as={FaMedal} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/signup"><Icon as={TiUserAddOutline} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/login"> <Icon as={BiLogInCircle} /></RouterLink>
//                 </Tab>
//                 <Tab>
//                   <RouterLink to="/artistprofile"> <Icon as={RiAccountCircleLine} /></RouterLink>
//                 </Tab>
              
//               </TabList>
//             </Tabs>
//           </Box>
//         {/* </Box> */}
//       </header>
//     );
//   }
// }

// export default Nav;


//       /* <section class="showcase">
// <header>
//   <h2 class="logo">Travel</h2>
//   <div class="toggle"></div>
// </header>
// <video  src={dj} muted loop autoplay></video>
// <div class="overlay"></div>
// </div> */




// // .showcase
// // {
// //   position: absolute;
// //   right: 0;
// //   width: 100%;
// //   min-height: 100vh;
// //   padding: 100px;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   background: #111;
// //   transition: 0.5s;
// //   z-index: 2;
// // }
// // .showcase.active
// // {
// //   right: 300px;
// // }

// // .showcase video
// // {
// //   position: absolute;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   object-fit: cover;
// //   opacity: 0.8;
// // }
// // .overlay
// // {
// //   position: absolute;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background: #03a9f4;
// //   mix-blend-mode: overlay;
// // }
// import {Howl} from "howler";
// import sam1 from './sam1.mp3'


import React from "react";
import Auth from "./../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  Image,
  Center,
  Spacer,
  Box,
  Heading,
  keyframes,
  Icon,
  HStack, Button, SimpleGrid,  Text
} from "@chakra-ui/react";
import './logo.css';



function Nav()

 {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box
        
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="#f7fff7"
        >
          <Image className='logo'
          // animation={spin}
            h="100"
            src="./images/swapzie-logo-200.png"
            alt="swapzie logo"
          ></Image>
          <Spacer />
          <Center>
            <Tabs color="#1a535c" variant="unstyled" pt={8}>
              <TabList>
                <Tab>
                  <RouterLink to="/about">About</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/swap">Swap</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/dashboard">Dashboard</RouterLink>
                </Tab>
                <Tab>
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
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
            alt="swapzie logo"
            h="100"
          ></Image>
       

                  <Spacer />

          <Center>
            <Box>
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
    <Tab>
      <RouterLink to="/artistprofile"> <Icon as={RiAccountCircleLine} /></RouterLink>
    </Tab>              
  </TabList>
</Tabs>

            </Box>
          </Center>
          </Box>
          <Box>   
            <Box bg="#fcbc73" color="000000"><h4> THIS WEEKS SAMPLES</h4>
        
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
                  </Box>
                  {/* <Button onClick={() => sound.play()} type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                Sign In
                </Button> */}
        </Box>
      </header>
    );
  }
}

export default Nav;