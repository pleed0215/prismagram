require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

import schema from "./schema";

import { PrismaClient } from "@prisma/client";
const PORT = process.env.PORT || 4000;

const prisma = new PrismaClient();
const server = new GraphQLServer({ schema, context: { prisma } });

server.express.use(logger("dev"));

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "pleed0215@bizmeka.com",
      firstName: "Bbang deok",
      lastName: "Lee",
      profile: {
        create: {
          bio: "Hello jjj!",
        },
      },
    },
  });

  await prisma.user.update({
    where: { email: "pleed0215@gmail.com" },
    data: { following: { connect: { email: "pleed0215@bizmeka.com" } } },
  });
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
      followedBy: true,
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

/*server.start({ port: PORT }, () =>
  console.log(`Server start with httP://127.0.0.1:${PORT}.`)
);*/
