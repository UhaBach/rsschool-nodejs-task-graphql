import { GraphQLList } from "graphql";
import { User } from "../types/user.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const queriesUser = {
    Users: {
        type: new GraphQLList(User),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.user.findMany();
        }
    },
    UserById: {
        type: User,
        args: {
            id: {
                type: UUIDType
            }
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
            return await context.user.findUnique({
                where: {
                    id: args.id
                }
            });
        }
    }
}