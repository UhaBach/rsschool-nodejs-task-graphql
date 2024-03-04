import { GraphQLNonNull } from "graphql";
import { createProfileInput, patchProfileInput, profile } from "../types/profile.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const mutationsProfile = {
    CreateProfile: {
      type: profile,
        args: { 
          profile: { type: new GraphQLNonNull(createProfileInput)}
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
          const profile = await context.profile.create({
            data: args.profile
          });
          return profile;
        }
      },
      PatchProfile: {
        type: profile,
        args: { 
          Profile: { type: new GraphQLNonNull(patchProfileInput)}
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
          return await context.profile.update({
            where: { id: args.profile.id },
            data: args.profile
          });
        }
      },
      DeleteProfile: {
        type: profile,
        args: {
          id: {
            type: UUIDType
          }
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
          return await context.profile.delete({
            where: {
              id: args.id
            }
          });
        }
    },
}