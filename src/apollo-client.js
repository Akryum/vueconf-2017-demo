import { ApolloClient, createNetworkInterface }
  from 'apollo-client'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://nnnwvmq07.lp.gql.zone/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
})

export default apolloClient
