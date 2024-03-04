import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { memberType, MemberTypeId } from "../types/member_type.js";
import { PrismaClient } from "@prisma/client";


export const queriesMemberType = {
    memberTypes: {
        type: new GraphQLList(memberType),
        resolve: async (_obj, _args, context: PrismaClient) => { 
            return await context.memberType.findMany();
        }
    },
    memberType: {
        type: memberType,
        args: {
            id: {
                type: new GraphQLNonNull(MemberTypeId)
            }
        },
        resolve: async (_obj, args, context: PrismaClient, info) => { 
            return await context.memberType.findUnique({
                where: {
                    //id: info.variableValues.memberTypeId
                    id: args.id
                }
            });
        }
    },
}