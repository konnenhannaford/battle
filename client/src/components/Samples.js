import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import {
  Image,
  Box,
//   Heading,
//   Text,
  Wrap,
//   Flex,
  Center,
  Link,
} from "@chakra-ui/react";

function Samples() {
  return (
    <Box mt={8} py={8} bgColor="#1a535c">
      <Center>
        <Box display="flex" p={8} color="white">
          <Wrap justify="center">
            <Link px={4}>About</Link>
            <Link px={4}>Swap</Link>
            <Link px={4}>Dashboard</Link>
            <Link px={4}>Privacy Policy</Link>
            <Link px={4}>FAQ</Link>
            <Link px={4}>Contact</Link>
            <Link px={4}>Terms &amp; Conditions</Link>
            <Link px={4}>Donate</Link>
          </Wrap>
        </Box>
      </Center>
      <Center>
        <Box display="flex" mb={4}>
          <Image
            px={4}
            src="images/f_logo_RGB-White_72.png"
            alt="facebook logo"
          ></Image>
          <Image
            px={4}
            src="images/2021-Twitter-logo---white.png"
            alt="twitter logo"
          ></Image>
          <Image
            px={4}
            src="images/instagram-glyph-logo_May2016.png"
            alt="instagram logo"
          ></Image>
        </Box>
      </Center>
    </Box>
  );
}

export default Samples;


