import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";

export const PostInput = new GraphQLInputObjectType({
    name: "PostInput",
    fields: {
      title: {type: new GraphQLNonNull(GraphQLString)},
      content: {type: new GraphQLNonNull(GraphQLString)},
      authorId: {type: UUIDType}
    }
});
  
export const Post = new GraphQLObjectType({
    name: "Post",
    fields: {
        id: {type: UUIDType},
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        authorId: {type: UUIDType}
    }
});
  
export const PatchPostInput = new GraphQLInputObjectType({
    name: "PatchPostInput",
    fields: {
        id: {type: UUIDType},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
    }
});