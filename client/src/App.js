import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from 'apollo-boost';
  // or like this?
    // import React from 'react'
    // import ReactDOM from 'react-dom'
    // import { ApolloClient } from 'apollo-client'
    // import { createHttpLink } from 'apollo-link-http'
    // import { InMemoryCache } from 'apollo-cache-inmemory'
    // import { ApolloProvider } from 'react-apollo'
    // https://flaviocopes.com/apollo/
// import Artists from './pages/Artists';
// import Winners from './pages/Winners';
// import ArtistProfile from './pages/ArtistProfile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// what set conetxt does?
// https://www.apollographql.com/docs/react/api/link/apollo-link-context/
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';

// COOOKIES
      const link = createHttpLink({
        uri: '/graphql',
      // which one ?
      // https://www.apollographql.com/docs/react/networking/authentication/
        credentials: 'same-origin'
        // credentials: 'include'
      });
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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ ApolloProvider>
  );
}

export default App;
