import { createServer } from "@graphql-yoga/node";
import { join } from "path";
import { readFileSync } from "fs";
import prisma from "../../lib/prisma";
import type { PrismaClient } from "@prisma/client";
import { Resolvers } from "../../types";
import { NextApiRequest, NextApiResponse } from "next";

export async function createContext(): Promise<GraphQLContext> {
  return { prisma };
}

export type GraphQLContext = {
  prisma: PrismaClient;
};

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    userMessages: async (_, __, { prisma }) => {
      const messages = await prisma.userMessage.findMany();
      return messages;
    },
  },
  Mutation: {
    addUserMessage: async (_, { input }, { prisma }) => {
      const userMessage = await prisma.userMessage.create({
        data: {
          email: input!.email,
          name: input!.name,
          message: input!.message,
        },
      });
      return userMessage;
    },
  },
};

const server = createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  endpoint: "/api",
  schema: {
    typeDefs,
    resolvers,
  },
  context: createContext(),
});

export default server;
