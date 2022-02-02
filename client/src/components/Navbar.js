import React from "react";
import Auth from "../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import { Tabs, TabList, Tab, Image, Spacer, Box } from "@chakra-ui/react";

function Nav() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="black"
        >
          <Image
            h="100"
            src="../vynil.png"
            alt="sampled logo"
          ></Image>
          <Spacer />
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
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="black"
        >
          <Image
            h="100"
            src="vynil.png"
            alt="sampled logo"
          ></Image>
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