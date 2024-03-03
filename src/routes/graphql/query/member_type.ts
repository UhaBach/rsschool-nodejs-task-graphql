import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { MemberType } from "../types/member_type.js";
import { PrismaClient } from "@prisma/client";


export const queriesMemberType = {
    MemberTypes: {
        type: new GraphQLList(MemberType),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.memberType.findMany();
        }
    },
    MemberTypeById: {
        type: MemberType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: async (_obj, args, context: PrismaClient) => { 
            return await context.memberType.findUnique({
                where: {
                    id: args.id
                }
            });
        }
    },
}