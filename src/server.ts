require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

import schema from "./schema";

import { PrismaClient } from "@prisma/client";
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

server.start({ port: PORT }, () =>
  console.log(`Server start with httP://127.0.0.1:${PORT}.`)
);
