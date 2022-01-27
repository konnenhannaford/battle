// import logo from './bgpic.jpeg';



import mpc from './mpc.png';
import './App.css';

// function App() {
//   return (
//     //     <ChakraProvider>
//     <div className="App">
//       <header className="App-header">
//         <img src={mpc} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

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
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component />
      Hi
     <img src={mpc} className="App-logo" alt="logo" />
    </ChakraProvider>
  )
}

export default App;
