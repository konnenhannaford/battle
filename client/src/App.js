import React from 'react';
// import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
//     import {
//       ApolloClient,
//       InMemoryCache,
//       ApolloProvider,
//       createHttpLink,
//     } from '@apollo/client';
//     // import { setContext } from '@apollo/client/link/context';
// import { ChakraProvider } from "@chakra-ui/react";
// import Artists from './pages/Artists';
// import Winners from './pages/Winners';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// what set conetxt does?
// https://www.apollographql.com/docs/react/api/link/apollo-link-context/
// import Navbar from './components/Navbar';


import logo from './vynil.png';
import './App.css';

// HEADERS


              // import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
              // import { setContext } from '@apollo/client/link/context';

              // const httpLink = createHttpLink({
              //   uri: '/graphql',
              // });

              // const authLink = setContext((_, { headers }) => {
              //   // get the authentication token from local storage if it exists
              //   const token = localStorage.getItem('token');
              //   // return the headers to the context so httpLink can read them
              //   return {
              //     headers: {
              //       ...headers,
              //       authorization: token ? `Bearer ${token}` : "",
              //     }
              //   }
              // });

              // const client = new ApolloClient({
              //   link: authLink.concat(httpLink),
              //   cache: new InMemoryCache()
              // });



function App() {
  return (
//     <ChakraProvider>
//       <ApolloProvider client={client}>
//       <Router>
//           <Navbar />
//           <Switch>
//             <Route exact path='/' component={SearchBooks} />
//             <Route exact path='/saved' component={SavedBooks} />
//             <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//           </Switch>
//       </Router>
//     </ ApolloProvider>
//   );
// }

// export default App;

<div className="App">
      <header className="App-header">
        blah blah blah
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;