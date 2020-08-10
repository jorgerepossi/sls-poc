import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_API_URL });

const authLink = new ApolloLink((operation, forward) => {

  operation.setContext({
    headers: {
      'x-api-key': 'APIKEY'
    }
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default client;