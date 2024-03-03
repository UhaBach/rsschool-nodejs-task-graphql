import { 
    GraphQLObjectType, 
    GraphQLNonNull, 
    GraphQLString, 
    GraphQLFloat,  
    GraphQLInputObjectType} from "graphql";
import { UUIDType } from "./uuid.js";

export const User = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {type: UUIDType},
        name: {type: new GraphQLNonNull(GraphQLString)},
        balance: {type: new GraphQLNonNull(GraphQLFloat)}
    }
});

export const CreateUserInput = new GraphQLInputObjectType({
    name: "CreateUserInput",
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        balance: {type: new GraphQLNonNull(GraphQLFloat)}
    }
});

export const PatchUserInput = new GraphQLInputObjectType({
    name: "PatchUserInput",
    fields: {
        id: {type: UUIDType},
        name: {type: new GraphQLNonNull(GraphQLString)},
        balance: {type: new GraphQLNonNull(GraphQLFloat)}
    }
});