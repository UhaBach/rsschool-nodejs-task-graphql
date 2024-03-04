import { GraphQLList } from "graphql";
import { profile } from "../types/profile.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const queriesProfile = {
    profiles: {
        type: new GraphQLList(profile),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.profile.findMany();
        }
    },
    profile: {
        type: profile,
        args: {
            id: {
                type: UUIDType
            }
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
            return await context.profile.findUnique({
                where: {
                    id: args.id
                }
            });
        }
    }
}