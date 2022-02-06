import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import { RiInstagramLine, RiFacebookCircleLine } from 'react-icons/ri'
  import {
  // Image,
  Box,
//   Heading,
//   Text,
//   Wrap,
//   Flex,
  Center,
  // Spacer,

  Icon
//   Link,
} from "@chakra-ui/react";
// import dj from './vynil.png';

function Footer() {
  return (
    <Box
     mt={1} p={1} 
     bgColor="black"
    position="fixed"
    bottom= {0}
    left= {0}
    width= {"100%"}
>
      <Center>
        <Box display="flex" mb={0}>

      <Icon as={RiFacebookCircleLine}
                     color='gray.50'
                     mb={10}
                     mt={10} />
                     

    {/* <Image
            height = {100}
            src={dj}
            alt="fb"
          ></Image> */}
          


      <Icon as={RiInstagramLine} 
                     color='gray.50'
                     mb={10}
                     mt={10} />

        </Box>
      </Center>
    </Box>
  );
}

export default Footer;

// import dj from './djk.png';
//       <img src={dj} className="dj-logo" alt="dj" />


