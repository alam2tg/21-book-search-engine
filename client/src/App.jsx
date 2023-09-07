// import apollo - create middleware functionality
// constructs our main GraphQL api endpoint
// construct requestmiddleware that will attach the JWT to every request as 'auth' header
  // get the authentication token from local storage if it exists

// Set up onst client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  // cache: new InMemoryCache() 

import Navbar from './components/Navbar'
import './App.css'
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from "@apollo/client/link/context";
import { Outlet } from 'react-router-dom';


const httpLink = createHttpLink({ uri: 'graphql' })

const authLink = setContext((_, { headers }) =>{
  const token = localstorage.getItem('id_token'); //ref typeDef line 30, type Auth

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Navbar />
      <main>
        <div className="container flex-column justify-flex-start min-80-vh">
          <Outlet />
        </div>
      </main>
    </ApolloProvider>

  );
}

export default App;
