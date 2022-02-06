import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';


import bgpic from '../components/z.gif';

  

const Login = () => {
    return (
      <Flex                 bgImage={bgpic}
        
      // bgImage="url('./pngegg.png')"
bgPosition="center"
bgRepeat="no-repeat"
bgSize="cover"
width='100vw'
height='100vh' width="full" align="center" justifyContent="center">
        <Box 

        p={8} color="pink" maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="*******" />
              </FormControl>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                Sign In
                </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    );
  }

  export default Login;
  