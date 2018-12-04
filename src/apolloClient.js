import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-fxjhwetioh.now.sh/"
});

export default client;
