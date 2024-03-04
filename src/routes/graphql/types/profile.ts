import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import { memberType } from "./member_type.js";

export const profile = new GraphQLObjectType({
    name: "profile",
    fields: {
        id: {type: UUIDType},
        isMale: {type: new GraphQLNonNull(GraphQLBoolean)},
        yearOfBirth: {type: new GraphQLNonNull(GraphQLInt)},
        userId: {type: UUIDType},
        memberTypeId: {type: new GraphQLNonNull(GraphQLString)},
        memberType: {type: memberType}
    }
});

export const createProfileInput = new GraphQLInputObjectType({
    name: "createProfileInput",
    fields: {
        isMale: {type: new GraphQLNonNull(GraphQLBoolean)},
        yearOfBirth: {type: new GraphQLNonNull(GraphQLInt)},
        userId: {type: UUIDType},
        memberTypeId: {type: new GraphQLNonNull(GraphQLString)}
    }
});

export const patchProfileInput = new GraphQLInputObjectType({
    name: "catchProfileInput",
    fields: {
        id: {type: UUIDType},
        isMale: {type: GraphQLBoolean},
        yearOfBirth: {type: GraphQLInt},
        memberTypeId: {type: GraphQLString}
    }
});