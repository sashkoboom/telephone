import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
  gql
} from '@apollo/client';

export const typeDefs = gql`
    type Query {
      query: String!
    }

    type Responce {
      result: String!
    }
`;

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
  typeDefs,
  resolvers: {},
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />  
    </ApolloProvider>
  </React.StrictMode>
);

