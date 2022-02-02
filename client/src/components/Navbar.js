import React from "react";
import Auth from "../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import { Tabs, TabList, Tab, Image, Spacer, Box, Heading } from "@chakra-ui/react";
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
          <Image 
            px={1}
            src={dj}
            alt="fb"
          ></Image>
          <Heading color="#1a535c" m={4} p={4}>
            sampled
          </Heading>
          <Spacer />
          <Tabs color="red" variant="unstyled" pt={8}>
          <TabList>
                <Tab>
                  <RouterLink to="/">Hdddome</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/artists">Artists</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/winners">Winners</RouterLink>
                </Tab>
              <Tab>
                <RouterLink to="/dashboard">Profile</RouterLink>
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
        <Box mt={0} py={8} bgColor="#B57295"
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

          <Spacer />
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
                  <RouterLink to="/login/signup">Login/Sign Up</RouterLink>
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