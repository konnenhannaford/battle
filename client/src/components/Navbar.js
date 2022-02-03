import React from "react";
import Auth from "../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import {
Icon, Tabs, TabList, Tab, Image, Box, Heading } from "@chakra-ui/react";
import dj from './vynil.png';
// import { GiGuitar } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri'
import { FaMedal} from 'react-icons/fa'
import { AiOutlineHome} from 'react-icons/ai'
import { BiLogInCircle, BiLogOutCircle} from 'react-icons/bi'
import { HiUserGroup} from 'react-icons/hi'
import { TiUserAddOutline} from 'react-icons/ti'



function Nav() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box m={{ base: 2, sm: 4, md: 6, lg: 8 }}
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="gray.800"
        >
                   <Image className="app-logo"
            // px={4}
            height = {40}
            src={dj}
            alt="fb"
            animation= 'infinite 20s linear'
          ></Image>
                    <Heading fonts='Menlo, monospace' color="yellow.300" m={5} p={2}>
            sampled..
          </Heading>

          <Tabs justify="space-between" color="white" variant="unstyled" pt={8}>
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
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
                <Icon as={BiLogOutCircle} />

              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </header>
    );
  } else {
    return (
      <header>
        <Box mt={0} py={8} bgColor="black"
          // display="flex" mb={4}
          align="center"
          p={4}
        >
          <Image className="app-logo"
            // px={4}
            height = {40}
            src={dj}
            alt="fb"
          ></Image>
                    <Heading color="#fcbc73" m={5} p={2}>
            sampled..
          </Heading>

          {/* <Spacer /> */}
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
                <Tab>
                  <RouterLink to="/artistprofile"> <Icon as={RiAccountCircleLine} /></RouterLink>
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


