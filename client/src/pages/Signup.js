



                  //   {/* This is needed for the validation functionality above */}
                  //   <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
                  //     {/* show alert if server response is bad */}
                  //     <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                  //       Something went wrong with your signup!
                  //     </Alert>

                  //     <FormControl>
                  //       <FormLabel htmlFor='username'>Artist Name</FormLabel>
                  //       <Input
                  //         type='text'
                  //         placeholder='Your Artist Name'
                  //         name='artist'
                  //         onChange={handleInputChange}
                  //         value={userFormData.username}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Artist Name is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <FormControl>
                  //       <FormLabel htmlFor='email'>Email</FormLabel>
                  //       <Input
                  //         type='email'
                  //         placeholder='Your email address'
                  //         name='email'
                  //         onChange={handleInputChange}
                  //         value={userFormData.email}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Email is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <FormControl>
                  //       <FormLabel htmlFor='password'>Password</FormLabel>
                  //       <Input
                  //         type='password'
                  //         placeholder='Your password'
                  //         name='password'
                  //         onChange={handleInputChange}
                  //         value={userFormData.password}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Password is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <FormControl>
                  //       <FormLabel htmlFor='artist info'>Artist info</FormLabel>
                  //       <Input
                  //         type='password'
                  //         placeholder='Your password'
                  //         name='password'
                  //         onChange={handleInputChange}
                  //         value={userFormData.password}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Password is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <FormControl>
                  //       <FormLabel htmlFor='password'>Password</FormLabel>
                  //       <Input
                  //         type='password'
                  //         placeholder='Your password'
                  //         name='password'
                  //         onChange={handleInputChange}
                  //         value={userFormData.password}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Password is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <FormControl>
                  //       <FormLabel htmlFor='password'>Password</FormLabel>
                  //       <Input
                  //         type='password'
                  //         placeholder='Your password'
                  //         name='password'
                  //         onChange={handleInputChange}
                  //         value={userFormData.password}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Password is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <FormControl>
                  //       <FormLabel htmlFor='password'>Password</FormLabel>
                  //       <Input
                  //         type='password'
                  //         placeholder='Your password'
                  //         name='password'
                  //         onChange={handleInputChange}
                  //         value={userFormData.password}
                  //         required
                  //       />
                  //       <FormControl.Feedback type='invalid'>Password is required!</FormControl.Feedback>
                  //     </FormControl>

                  //     <Button
                  //       disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                  //       type='submit'
                  //       variant='success'>
                  //       Submit
                  //     </Button>
                  //   </FormControl>
                  // </>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/react';

import { useMutation } from '@apollo/client';

import { ADD_ARTIST } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
    // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_ARTIST);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  const isError = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });
      console.log(data);
      Auth.login(data.addUser.token);

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
    return (
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} color="pink" maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>Signup</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
              <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
              </Alert>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input 
                type="email" placeholder="test@test.com"             
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
                        <FormLabel htmlFor='username'>username</FormLabel>
                <Input 
                type="text" placeholder="username"             
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
                        <FormLabel htmlFor='password'>password</FormLabel>
                <Input 
                type="text" placeholder="test@test.com"             
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              {!isError ? (
              <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
              ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
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
  
 
  export default Signup;


