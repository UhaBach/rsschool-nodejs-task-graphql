import { GraphQLObjectType } from "graphql";
import { mutationsPost } from "./post.js";
import { mutationsProfile } from "./profile.js";
import { mutationsUser } from "./user.js";

export const rootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...mutationsPost,
      ...mutationsProfile,
      ...mutationsUser
    }
})