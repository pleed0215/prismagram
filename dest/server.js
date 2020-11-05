"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var graphql_yoga_1 = require("graphql-yoga");
var morgan_1 = __importDefault(require("morgan"));
var schema_1 = __importDefault(require("./schema"));
var PORT = process.env.PORT || 4000;
var server = new graphql_yoga_1.GraphQLServer({ schema: schema_1.default });
server.express.use(morgan_1.default("dev"));
server.start({ port: PORT }, function () {
    return console.log("Server start with httP://127.0.0.1:" + PORT + ".");
});
