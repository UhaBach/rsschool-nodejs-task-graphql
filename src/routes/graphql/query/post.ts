import { GraphQLList } from "graphql";
import { post } from "../types/post.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const queriesPost = {
    posts: {
        type: new GraphQLList(post),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.post.findMany();
        }
    },
    post: {
        type: post,
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