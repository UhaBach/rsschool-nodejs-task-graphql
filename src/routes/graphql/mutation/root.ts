import { GraphQLObjectType } from "graphql";
import { postMutations } from "./post.js";
import { profileMutations } from "./profile.js";

export const rootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...postMutations,
      ...profileMutations
    }
})