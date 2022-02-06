

// import React, { useState } from 'react';
// import { Input, Flex, Box, Heading, FormControl, FormLabel, Button, Alert } from '@chakra-ui/react';
// // import { ADD_ARTIST } from "../utils/mutations";
// // import Auth from '../utils/auth';
// import {useHistory} from "react-router-dom";

// import {useMutation } from '@apollo/client';
// import { CREATE_ARTIST_MUTATION } from '../GraphQl/Mutations';

// const Signup = () => {
//   // set initial form state
//   const [userFormData, setUserFormData] = useState({ artistName: '', email: '', password: '',artistInfo:'',apple:"",soundcloud:"",youtube:"",spotify:"" });
//   const history = useHistory ()
//     // set state for form validation
//   // const [addArtist] = useMutation(ADD_ARTIST);
//   const [showAlert, setShowAlert] = useState(false);
//   const [addArtist, { error: mutationErr }] = useMutation(CREATE_ARTIST_MUTATION)

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(userFormData)
//     await addArtist({variables:userFormData})

//     history.push("/");

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       // const response = await addArtist (userFormData);

//       // if (!response.ok) {
//       //   throw new Error('something went wrong!');
//       // }

//       // const { token, user } = await response.json();
//       // console.log(user);
//       // Auth.login(token);
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       artistName: '',
//       email: '',
//       password: '',
//       artistInfo:'',
//       spotify:'',
//       soundcloud:'',
//       youtube:'',
//       apple:''
//     });
//   };
  
//         return (
//       <Flex width="full" align="center" justifyContent="center">
//         <Box p={8} color="pink" maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
//           <Box textAlign="center">
//             <Heading>Signup</Heading>
//           </Box>
//           <Box my={4} textAlign="left">
//             <form onSubmit={handleFormSubmit}>
//               <FormControl noValidate>
//               <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//                 Something went wrong with your signup!
//               </Alert>
//                 <FormLabel htmlFor='email'>Email</FormLabel>
//                 <Input 
//                 type="email" placeholder="test@test.com"             
//                 name='email'
//                 onChange={handleInputChange}
//                 value={userFormData.email}
//                 required
//               />
//                 <FormLabel htmlFor='password'>password</FormLabel>
//                 <Input 
//                 type="text" placeholder="test@test.com"             
//                 name='password'
//                 onChange={handleInputChange}
//                 value={userFormData.password}
//                 required
//                 />
//                 <FormLabel htmlFor='artist-name'>artist name</FormLabel>
//                 <Input 
//                 type="text" placeholder="artist-name"             
//                 name='artistName'
//                 onChange={handleInputChange}
//                 value={userFormData.artistName}
//                 required
//               />

//               <FormLabel htmlFor='password'>* Artist Info:</FormLabel>
//                 <Input 
//                 type="text" placeholder="artist-info"   
//                 name='artistInfo'          
//                 onChange={handleInputChange}
//                 value={userFormData.artistInfo}
//                 required
//               />

//           <FormLabel> Apple: </FormLabel>
//               <Input 
//               name="apple"
//               type="text" placeholder="apple"
//               onChange={handleInputChange}
//               value={userFormData.apple}
//                />
//             <FormLabel> Spotify </FormLabel>
//               <Input 
//               name="spotify"
//               type="text" placeholder="spotify"
//               onChange={handleInputChange}
//               value={userFormData.spotify}
//                />
//           <FormLabel> Youtube </FormLabel>
//               <Input 
//               name="youtube"
//               type="text" placeholder="Youtube"
//               onChange={handleInputChange}
//               value={userFormData.youtube}
//                />
//           <FormLabel> Soundcloud: </FormLabel>
//               <Input 
//               name="soundcloud"
//               type="text" placeholder="soundcloud"
//               onChange={handleInputChange}
//               value={userFormData.soundcloud}
//                />




//               </FormControl>
//               <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
//                 Sign Up
//                 </Button>
//             </form>
//           </Box>
//         </Box>
//       </Flex>
//     );
//   }
    
//   export default Signup;




import React, { useEffect, useState } from 'react';
import { Input, Flex, Box, Heading, FormControl, FormLabel, Button, Alert } from '@chakra-ui/react';
import { useMutation } from '@apollo/client'
import { CREATE_ARTIST_MUTATION } from '../GraphQl/Mutations';
import Auth from '../utils/auth';
import {useHistory} from "react-router-dom";
import Nav from "../components/Navbar";


const Signup = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  // set initial form state
  const [userFormData, setUserFormData] = useState({ artistName: '', email: '', password: '',artistInfo:'',apple:"",soundcloud:"",youtube:"",spotify:"" });
  const history = useHistory ()
    // set state for form validation
  const [showAlert, setShowAlert] = useState(false);
  const [addArtist, {data:artistInfo, error: mutationErr }] = useMutation(CREATE_ARTIST_MUTATION)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    console.log(userFormData)
    await addArtist({variables:userFormData})
    console.log(artistInfo && artistInfo)

     // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
    
  /*
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    */} catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      artistName: '',
      email: '',
      password: '',
      artistInfo:'',
      spotify:'',
      soundcloud:'',
      youtube:'',
      apple:''
    });
  };
  useEffect(()=>{
    console.log(artistInfo && artistInfo)
    if(artistInfo){
      const id = artistInfo["addArtist"].id;
      history.push(`/${id}`)
    }
  },[artistInfo])
        return (
          <div>
          <Nav/>


      <Flex width="full" align="center" justifyContent="center">

        <Box p={8} color="pink" maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>Signup</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleFormSubmit}>
              <FormControl noValidate>
              <Alert dismissible="true" onClose={() => setShowAlert(false)} show={showAlert.toString()} variant='danger'>
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
                
                        <FormLabel htmlFor='password'>password</FormLabel>
                <Input 
                // type="text" placeholder="test@test.com"             
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
                type={show ? 'text' : 'password'}

              /> 
              <FormLabel>* Artist Name:</FormLabel>
                <Input 
                type="text" placeholder="artist-name"             
                onChange={handleInputChange}
                name="artistName"
                value={userFormData.artistName}
                required
              />
              <FormLabel> * Artist Info: </FormLabel>
              <Input 
              type="text" placeholder="artist-info"
              onChange={handleInputChange}
              value={userFormData.artistInfo}
               name="artistInfo"
               />
          <FormLabel> Apple: </FormLabel>
              <Input 
              name="apple"
              type="text" placeholder="apple"
              onChange={handleInputChange}
              value={userFormData.apple}
               />
            <FormLabel> Spotify </FormLabel>
              <Input 
              name="spotify"
              type="text" placeholder="spotify"
              onChange={handleInputChange}
              value={userFormData.spotify}
               />
          <FormLabel> Youtube </FormLabel>
              <Input 
              name="youtube"
              type="text" placeholder="Youtube"
              onChange={handleInputChange}
              value={userFormData.youtube}
               />
          <FormLabel> Soundcloud: </FormLabel>
              <Input 
              name="soundcloud"
              type="text" placeholder="soundcloud"
              onChange={handleInputChange}
              value={userFormData.soundcloud}
               />




              </FormControl>
              <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                Sign In
                </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      </div>
    );
  }
    
  export default Signup;