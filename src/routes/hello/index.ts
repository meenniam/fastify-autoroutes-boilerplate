import { FastifyInstance } from 'fastify';
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
      handler: async (request: HelloRequest) => {
        const { name } = request.body;
        const profile = getProfile(name);
        return instance.responseFormat(profile);
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
