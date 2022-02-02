import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Center } from "@chakra-ui/react";

const Login = () => {
  return (
    <div>
      <RouterLink to="/Winners">
        <Box>
          <Image
            src="../components/vynil.png"
            
          ></Image>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
            artist
            </Heading>
          </Center>
          <Text px={8} pb={4}>
            test
          </Text>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Login;

// INPUTS
      // import { Input } from '@chakra-ui/react'
      // <Input placeholder='extra small size' size='xs' />

// PASSWORD
      // function PasswordInput() {
      //   const [show, setShow] = React.useState(false)
      //   const handleClick = () => setShow(!show)
      
      //   return (
      //     <InputGroup size='md'>
      //       <Input
      //         pr='4.5rem'
      //         type={show ? 'text' : 'password'}
      //         placeholder='Enter password'
      //       />
      //       <InputRightElement width='4.5rem'>
      //         <Button h='1.75rem' size='sm' onClick={handleClick}>
      //           {show ? 'Hide' : 'Show'}
      //         </Button>
      //       </InputRightElement>
      //     </InputGroup>
      //   )
      // }