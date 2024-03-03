import { Type } from '@fastify/type-provider-typebox';
import { GraphQLSchema } from 'graphql';
import { rootQuery } from './query/root.js';
import { rootTypes } from './types/root.js';
import { rootMutation } from './mutation/root.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};

export const schemaGQL = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
  types: rootTypes
});