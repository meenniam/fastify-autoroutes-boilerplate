import { FastifyInstance, FastifyReply } from 'fastify';
import { Resource } from 'fastify-autoroutes';
import { getProfile } from './_assets/hello.service';
import { HelloRequest, helloSchema } from './_assets/hello.schema';

export default (instance: FastifyInstance) =>
  <Resource>{
    get: {
      handler: async () => 'Hello, Route!!'
    },
    post: {
      schema: helloSchema,
      handler: async (request: HelloRequest, reply: FastifyReply) => {
        const { name } = request.body;
        const profile = getProfile(name);
        return instance.responseFormat(reply, profile, 201);
      }
    },
    put: {
      handler: async () => {
        try {
          throw new Error('my Error');
        } catch (error) {
          if (error instanceof Error) {
            return instance.httpErrors.forbidden(error.message);
          }
        }
      }
    }
  };
