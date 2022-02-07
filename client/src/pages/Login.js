import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../GraphQl/Mutations';import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import bgpic from '../components/z.gif';

import Nav from "../components/Navbar";


const Login = () => {
     
  const [formData, setFormData] = useState({email:'',password:''});
  const [login, {data:loginInput, error: mutationErr }] = useMutation(LOGIN_MUTATION)
  const history = useHistory()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
   console.log(formData);
   login({variables:formData})
  //  setFormData({email:"", password:""})
  }
  useEffect(()=>{
    console.log(loginInput && loginInput)
    if(loginInput){
      const id = loginInput["login"].id;
      history.push(`/${id}`)
    }
  },[loginInput])

    return (
      <div>
      <Nav/>

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
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email"name="email"onChange={handleInputChange} placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password"name="password"onChange={handleInputChange} placeholder="*******" />
              </FormControl>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                Sign In
                </Button>
            </form>
          </Box>
        </Box>
      </Flex></div>
    );
  }

  export default Login;
  