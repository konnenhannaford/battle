import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import {
  Image,
  Box,
//   Heading,
//   Text,
//   Wrap,
//   Flex,
  Center,
//   Link,
} from "@chakra-ui/react";
import dj from './vynil.png';

function Footer() {
  return (
    <Box mt={8} py={8} bgColor="black">
      <Center>
        <Box display="flex" mb={4}>
          <Image
            height = {10}
            src={dj}
            alt="fb"
          ></Image>
               {/* <img src={dj} className="dj-logo" alt="dj" /> */}
        </Box>
      </Center>
    </Box>
  );
}

export default Footer;

// import dj from './djk.png';
//       <img src={dj} className="dj-logo" alt="dj" />


