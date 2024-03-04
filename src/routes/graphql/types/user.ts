import { 
    GraphQLObjectType, 
    GraphQLNonNull, 
    GraphQLString, 
    GraphQLFloat,  
    GraphQLInputObjectType,
    GraphQLList} from "graphql";
import { UUIDType } from "./uuid.js";
import { profile } from "./profile.js";
import { post } from "./post.js";

export const user = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: {type: UUIDType},
        name: {type: new GraphQLNonNull(GraphQLString)},
        balance: {type: new GraphQLNonNull(GraphQLFloat)},
        profile: {type: profile},
        posts: {type: new GraphQLList(post)},
        userSubscribedTo: {type: new GraphQLList(user)},
        subscribedToUser: {type: new GraphQLList(user)}
    })
});

export const subscribersOnAuthors = new GraphQLObjectType({
    name: "subscribersOnAuthors",
    fields: () => ({
        subscriber: { type: user },
        subscriberId: { type: UUIDType },
        author: { type: user },
        authorId: { type: UUIDType }
    })
});

export const createUserInput = new GraphQLInputObjectType({
    name: "createUserInput",
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        balance: {type: new GraphQLNonNull(GraphQLFloat)}
    }
});

export const patchUserInput = new GraphQLInputObjectType({
    name: "patchUserInput",
    fields: {
        id: {type: UUIDType},
        name: {type: new GraphQLNonNull(GraphQLString)},
        balance: {type: new GraphQLNonNull(GraphQLFloat)}
    }
});