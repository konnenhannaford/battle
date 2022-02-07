import React, { useEffect } from "react";
import Auth from "../utils/auth";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  // Center,
  Spacer,
  Tooltip,
  // keyframes,
  // Link,
  // HStack, 
  // Button, 
  // SimpleGrid,  
  // Text, 
  // useTooltip, 
  // IconButton, 
  // MenuIcon
Icon, Tabs, TabList, Tab, Image, Box, Heading } from "@chakra-ui/react";
import dj from './vynil.png';
// import navmp4 from './nav2.mp4';
// import { GiGuitar } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri'
import { FaMedal} from 'react-icons/fa'
import { AiOutlineHome} from 'react-icons/ai'
import { BiLogInCircle, BiLogOutCircle} from 'react-icons/bi'
import { HiUserGroup} from 'react-icons/hi'
import { TiUserAddOutline} from 'react-icons/ti'
// import bgpic from './z.gif';
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
        // m={{ base: 2, sm: 4, md: 6, lg: 8 }}
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="transparent"
          
        >
                               <Heading color="#faf0e6"   className="blurb" m={5} p={2}>
        sampled<span color="yellow.900">...</span>
                  
          </Heading> 
                   <Image className="logo"
            // px={4}
            h="100"
            src={dj}
            alt="sampled logo"
          ></Image>
          <Spacer />

          <Tabs align="center" justify="center" color="white" variant="unstyled" pt={8}>
              <TabList>
                <Tab>
                  <RouterLink to={`/${id}`}> <Tooltip label='Home'><span><AiOutlineHome /></span></Tooltip></RouterLink>
                </Tab>
                <Tab>
                <RouterLink to={`/artists/${id}`}> <Tooltip label='Artists'><span><HiUserGroup /></span></Tooltip></RouterLink>

                  {/* <RouterLink to={`/artists/${id}`}><Icon as={HiUserGroup} /></RouterLink> */}
                </Tab>
                <Tab>
                <RouterLink to={`/artistprofile/${id}`}> <Tooltip label='Artist Profile'><span><RiAccountCircleLine /></span></Tooltip></RouterLink>
                  {/* <RouterLink to={`/artistprofile/${id}`}> <Icon as={RiAccountCircleLine} /></RouterLink> */}
                </Tab>
                {/* <Tab>
                  {/* <RouterLink to={`/`}  onClick={()) => Auth.logout()> <Tooltip label='Logout'><span><BiLogOutCircle /></span></Tooltip></RouterLink> */}
                  {/* <RouterLink to={`/`}  onClick={() => Auth.logout()></RouterLink> */}
                 {/* <Icon as={BiLogOutCircle} /> */}
                 <Tab>
                 <RouterLink to={`/`}  > <Tooltip label='Logout'><span><BiLogOutCircle /></span></Tooltip></RouterLink>
                 </Tab>
                  {/* <RouterLink to={`/artistprofile/${id}`}> <Icon as={RiAccountCircleLine} /></RouterLink> */}
                  {/* onClick={() => Auth.logout()} */}
                {/* </Tab> */} 
            </TabList>
          </Tabs>
        </Box>
      </header>
    );
  } else {
    return (
      <header>
        <Box mt={0} py={8} 
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          // bgColor="#040603"
          bgColor="transparent"
//                   bgImage={bgpic}
        
//   bgPosition="center"
//   bgRepeat="no-repeat"
//   bgSize="cover"
//   width='100%'
//   height='100%'
//   bgAttachment= "fixed"
// >
        >
                                        {/* <Image className="app-logo"
                                          // px={4}
                                          height = {40}
                                          src={dj}
                                          alt="fb"
                                        ></Image> */}
        {/* <video className="app-logo"
            // px={4}
            height = {40}
            src={navmp4}
            alt="fb"
            autoPlay
            loop
            itemType="video/mp4"
          ></video> */}

    
                    <Heading  fontSize="6xl" className="writtenlogo" color="#faf0e6" m={5} p={2}>
            sampled...
          </Heading>
          <Image className="logo"
            // px={4}
            h="100"
            src={dj}
            alt="sampled logo"
          ></Image>
          <Spacer />

          <Box justify="center">
            <Tabs             h="100"
color="#faf0e6" pt={8}>
              <TabList>
                <Tab>
                <RouterLink to={`/`}> <Tooltip label='Home'><span><AiOutlineHome /></span></Tooltip></RouterLink>
                </Tab>
                <Tab>
                <RouterLink to={`/artists`}> <Tooltip label='Artists'><span><HiUserGroup /></span></Tooltip></RouterLink>
                </Tab>
                <Tab>
                <RouterLink to={`/signup`}> <Tooltip label='Signup'><span><TiUserAddOutline /></span></Tooltip></RouterLink>
                </Tab>
                <Tab>
                <RouterLink to={`/login`}> <Tooltip label='Login'><span><BiLogInCircle h={100} /></span></Tooltip></RouterLink>
                </Tab>
              </TabList>
            </Tabs>
          </Box>
        </Box>
      </header>
    );
  }
}

export default Nav;


      /* <section class="showcase">
<header>
  <h2 class="logo">Travel</h2>
  <div class="toggle"></div>
</header>
<video  src={dj} muted loop autoplay></video>
<div class="overlay"></div>
</div> */




// .showcase
// {
//   position: absolute;
//   right: 0;
//   width: 100%;
//   min-height: 100vh;
//   padding: 100px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #111;
//   transition: 0.5s;
//   z-index: 2;
// }

// .showcase video
// {
//   position: absolute;
//   object-fit: cover;
//   opacity: 0.8;
// }
// .overlay
// {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #03a9f4;
//   mix-blend-mode: overlay;
// }



// export default Nav;

//                           // </header>

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
