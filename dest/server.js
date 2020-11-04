"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var typeDefs = "\n    type Query {\n        hello: String!   \n    }\n";
var resolvers = {
    hello: function () { return "Hi"; },
};
var server = new graphql_yoga_1.GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
