import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, Box, Heading, Center } from "@chakra-ui/react";

const Artistprofile = () => {
  return (
    <div>
      <RouterLink to="/Artists">
        <Box>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
            Your Profile
            </Heading>
          </Center>
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
        </RouterLink>
    </div>

  );
};

export default Artistprofile;