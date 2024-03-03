import { GraphQLList } from "graphql";
import { Post } from "../types/post.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const queriesPost = {
    Posts: {
        type: new GraphQLList(Post),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.post.findMany();
        }
    },
    PostById: {
        type: Post,
        args: {
            id: {
                type: UUIDType
            }
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
            return await context.post.findUnique({
                where: {
                    id: args.id
                }
            });
        }
    }
}