import { GraphQLNonNull } from "graphql";
import { PatchPostInput, Post, PostInput } from "../types/post.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const mutationsPost = {
  CreatePost: {
    type: Post,
      args: { 
        Post: { type: new GraphQLNonNull(PostInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        const post = await context.post.create({
          data: args.Post
        });
        return post;
      }
    },
    PatchPost: {
      type: Post,
      args: { 
        Post: { type: new GraphQLNonNull(PatchPostInput)}
      },
      resolve: async (_obj, args, context: PrismaClient) => { 
        return await context.post.update({
          where: { id: args.Post.id },
          data: args.Post
        });
      }
    },
    DeletePost: {
      type: Post,
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