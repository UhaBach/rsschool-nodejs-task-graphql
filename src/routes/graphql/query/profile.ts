import { GraphQLList } from "graphql";
import { Profile } from "../types/profile.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const queriesProfile = {
    Profiles: {
        type: new GraphQLList(Profile),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.profile.findMany();
        }
    },
    ProfileById: {
        type: Profile,
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