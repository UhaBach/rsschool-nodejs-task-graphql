import { GraphQLNonNull } from "graphql";
import { patchPostInput, post, postInput } from "../types/post.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const mutationsPost = {
  CreatePost: {
    type: post,
      args: { 
        post: { type: new GraphQLNonNull(postInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        const post = await context.post.create({
          data: args.Post
        });
        return post;
      }
    },
    PatchPost: {
      type: post,
      args: { 
        post: { type: new GraphQLNonNull(patchPostInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        return await context.post.update({
          where: { id: args.post.id },
          data: args.post
        });
      }
    },
    DeletePost: {
      type: post,
      args: {
        id: {
          type: UUIDType
        }
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        return await context.post.delete({
          where: {
            id: args.id
          }
        });
      }
    },
}