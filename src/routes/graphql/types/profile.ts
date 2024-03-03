import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";

export const Profile = new GraphQLObjectType({
    name: "Profile",
    fields: {
        id: {type: UUIDType},
        isMale: {type: new GraphQLNonNull(GraphQLBoolean)},
        yearOfBirth: {type: new GraphQLNonNull(GraphQLInt)},
        userId: {type: UUIDType},
        memberTypeId: {type: new GraphQLNonNull(GraphQLString)}
    }
});

export const CreateProfileInput = new GraphQLInputObjectType({
    name: "CreateProfileInput",
    fields: {
        isMale: {type: new GraphQLNonNull(GraphQLBoolean)},
        yearOfBirth: {type: new GraphQLNonNull(GraphQLInt)},
        userId: {type: UUIDType},
        memberTypeId: {type: new GraphQLNonNull(GraphQLString)}
    }
});

export const PatchProfileInput = new GraphQLInputObjectType({
    name: "PatchProfileInput",
    fields: {
        id: {type: UUIDType},
        isMale: {type: GraphQLBoolean},
        yearOfBirth: {type: GraphQLInt},
        memberTypeId: {type: GraphQLString}
    }
});