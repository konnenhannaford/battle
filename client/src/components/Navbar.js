import React from "react";
import Auth from "../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import {
 Tabs, TabList, Tab, Image, Box, Heading } from "@chakra-ui/react";
import dj from './vynil.png';
import '../App.css';

function Nav() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box m={{ base: 2, sm: 4, md: 6, lg: 8 }}
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="pink"
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

          <Tabs color="#fcbc73" variant="unstyled" pt={8}>
              <TabList>
                <Tab>
                  <RouterLink to="/">Home</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/artists">Artists</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/winners">Winners</RouterLink>
                </Tab>
                <Tab>
                <RouterLink to="/artistprofile">Artist Profile</RouterLink>
              </Tab>
              <Tab>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </header>
    );
  } else {
    return (
      <header>
        <Box mt={0} py={8} bgColor="transparent"
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
                  <RouterLink to="/">Home</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/artists">Artists</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/winners">Winners</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/signup">Sign Up</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/login">Login</RouterLink>
                </Tab>
                <Tab>
                <RouterLink to="/artistprofile">Artist Profile</RouterLink>
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