import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import { user } from "./user.js";

export const postInput = new GraphQLInputObjectType({
    name: "postInput",
    fields: {
      title: {type: new GraphQLNonNull(GraphQLString)},
      content: {type: new GraphQLNonNull(GraphQLString)},
      authorId: {type: UUIDType}
    }
});
  
export const post = new GraphQLObjectType({
    name: "post",
    fields: {
        id: {type: UUIDType},
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        authorId: {type: UUIDType},
        author: {type: user}
    }
});
  
export const patchPostInput = new GraphQLInputObjectType({
    name: "patchPostInput",
    fields: {
        id: {type: UUIDType},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
    }
});