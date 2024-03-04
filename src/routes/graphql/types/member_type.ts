import { GraphQLEnumType, GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const memberType = new GraphQLObjectType({
    name: "memberType",
    fields: () =>  ({
      id: {type: new GraphQLNonNull(MemberTypeId)},
      discount: {type: new GraphQLNonNull(GraphQLFloat)},
      postsLimitPerMonth: {type: new GraphQLNonNull(GraphQLInt)}
    })
});

export const MemberTypeId = new GraphQLEnumType({
  name: "MemberTypeId",
  values: {
    basic: {value: "basic"},
    business: {value: "business"}
  }
});