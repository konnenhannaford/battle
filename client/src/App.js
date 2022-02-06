import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
    import {
      ApolloClient,
      InMemoryCache,
      ApolloProvider,
      createHttpLink,
    } from '@apollo/client';
//     // import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from "@chakra-ui/react";
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Artists from './pages/Artists';
import Winners from './pages/Winners';
import Signup from './pages/Signup';
import Login from './pages/Login';
// what set conetxt does?
// https://www.apollographql.com/docs/react/api/link/apollo-link-context/
import Navbar from './components/Navbar';
// import Samples from './components/Samples';
// import Footer from './components/Footer';
import Artistprofile from './pages/Artistprofile';


// import logo from './vynil.png';
// import dj from './djk.png';

// import './index.css';

// HEADERS


              // import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
              // import { setContext } from '@apollo/client/link/context';

              const httpLink = createHttpLink({
                uri: 'http://localhost:3001/graphql',
              });

              const authLink = setContext((_, { headers }) => {
                // get the authentication token from local storage if it exists
                const token = localStorage.getItem('id_token');
                                // should this be id_token?
                // return the headers to the context so httpLink can read them
                return {
                  headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : "",
                  }
                }
              });

              const client = new ApolloClient({
                link: authLink.concat(httpLink),
                cache: new InMemoryCache()
              });



function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
      <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/winners"><Winners /></Route>
            <Route exact path="/artists"><Artists /></Route>
            <Route exact path="/signup"><Signup /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/:id"><Home /></Route>
            <Route  path="/winners/:id"><Winners /></Route>
            <Route  path="/:id/artists"><Artists /></Route>
            <Route path="/artistprofile/:id"><Artistprofile /></Route>
          </Switch>
          {/* <Footer /> */}
      </Router>
</ApolloProvider>
</ChakraProvider>
  );




// {/* <div className="App">
//       <header className="App-header">
//         <p>SAMPLED</p>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//         <nav>
//             home 
//             artists
//             winners
//             login/Signup
//         </nav>
//         <button className='button'>

//         </button>
//       <img src={dj} className="dj-logo" alt="dj" />
//     </div>
//   ); */}



}

export default App;


