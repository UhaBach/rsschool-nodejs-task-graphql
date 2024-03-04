import { GraphQLNonNull } from "graphql";
import { createUserInput, patchUserInput, user } from "../types/user.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const mutationsUser = {
  createUser: {
    type: user,
      args: { 
        User: { type: new GraphQLNonNull(createUserInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        const user = await context.user.create({
          data: args.User
        });
        return user;
      }
    },
    patchUser: {
      type: user,
      args: { 
        User: { type: new GraphQLNonNull(patchUserInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        return await context.user.update({
          where: { id: args.User.id },
          data: args.User
        });
      }
    },
    deleteUser: {
      type: user,
      args: {
        id: {
          type: UUIDType
        }
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        return await context.user.delete({
          where: {
            id: args.id
          }
        });
      }
    },
}