import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, schemaGQL } from './schemas.js';
import { graphql } from "graphql";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      // const source = "{ " + req.body.query + " }";
      const response = await graphql({schema: schemaGQL, source: /*source*/ req.body.query, 
        contextValue: fastify.prisma});
      return response;
    },
  });
};

export default plugin;