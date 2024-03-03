import { GraphQLNonNull } from "graphql";
import { CreateProfileInput, PatchProfileInput, Profile } from "../types/profile.js";
import { PrismaClient } from "@prisma/client";
import { UUIDType } from "../types/uuid.js";

export const profileMutations = {
    CreateProfile: {
      type: Profile,
        args: { 
          Profile: { type: new GraphQLNonNull(CreateProfileInput)}
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
          const profile = await context.profile.create({
            data: args.Profile
          });
          return profile;
        }
      },
      PatchProfile: {
        type: Profile,
        args: { 
          Profile: { type: new GraphQLNonNull(PatchProfileInput)}
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
          return await context.profile.update({
            where: { id: args.Profile.id },
            data: args.Profile
          });
        }
      },
      DeleteProfile: {
        type: Profile,
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