import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello: String!   
    }
`;

const resolvers = {
  hello: () => "Hi",
};

const server = new GraphQLServer({ typeDefs, resolvers });
