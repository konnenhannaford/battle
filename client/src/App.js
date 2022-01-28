// import logo from './bgpic.jpeg';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Mediaplayer from './components/Mediaplayer';
import Signup from './components/Signup';
import Winners from './components/Winners';

// import mpc from './mpc.png';
import './App.css';

import React from "react";
import {BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'


function App() {
  return (
    //     <ChakraProvider>
    <Router>
      <Navbar />
      <Routes>

        {/* <header className="App-header">
          <img src={mpc} className="App-logo" alt="logo" />
        </header> */}
        <Route path="Home" element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Mediaplayer" element={<Mediaplayer/>}/> 
        <Route path="Signup" element={<Signup/>}/> 
        <Route path="Winners" element={<Winners/>}/> 
        <Footer/>
      </Routes>
    </Router>
  );
}

// export default App;

// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component={SearchBooks} />
//           <Route exact path='/saved' component={SavedBooks} />
//           <img src={mpc} className="App-logo" alt="logo" />
//           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//         </Switch>
//       </>
//     </Router>
//   );
// }
// import { ChakraProvider } from '@chakra-ui/react'

// function App({ Component }) {
//   // 2. Use at the root of your app
//   return (
//     <ChakraProvider>
//       <Component />
//       Hi
//      <img src={mpc} className="App-logo" alt="logo" />
//     </ChakraProvider>
//   )
// }

export default App;
