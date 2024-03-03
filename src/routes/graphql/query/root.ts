import { GraphQLObjectType } from "graphql";
import { queriesMemberType } from "./member_type.js";
import { queriesPost } from "./post.js";
import { queriesProfile } from "./profile.js";
import { queriesUser } from "./user.js";

export const rootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
      ...queriesMemberType,
      ...queriesPost,
      ...queriesProfile,
      ...queriesUser
    }
});