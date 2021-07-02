import { FastifyInstance, FastifyReply } from 'fastify';
import { Resource } from 'fastify-autoroutes';
import { HelloRequest } from './_assets/hello.schema';

export default (instance: FastifyInstance) =>
  <Resource>{
    get: {
      handler: async (request: HelloRequest, reply: FastifyReply) => {
        try {
          return instance.responseFormat(reply, request.params.helloId, 201);
        } catch (error) {
          if (error instanceof Error) {
            return instance.httpErrors.forbidden(error.message);
          }
        }
      }
    }
  };
