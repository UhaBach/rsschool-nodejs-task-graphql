import { GraphQLNonNull } from "graphql";
import { CreateUserInput, PatchUserInput, User } from "../types/user.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const mutationsUser = {
  CreateUser: {
    type: User,
      args: { 
        User: { type: new GraphQLNonNull(CreateUserInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        const user = await context.user.create({
          data: args.User
        });
        return user;
      }
    },
    PatchUser: {
      type: User,
      args: { 
        User: { type: new GraphQLNonNull(PatchUserInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        return await context.user.update({
          where: { id: args.User.id },
          data: args.User
        });
      }
    },
    DeleteUser: {
      type: User,
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