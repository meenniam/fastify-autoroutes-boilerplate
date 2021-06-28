import { FastifyInstance } from 'fastify';
import { Resource } from 'fastify-autoroutes';
import { getProfile } from './_assets/hello.service';
import { HelloRequest, helloSchema } from './_assets/hello.schema';

export default (fastifyInstance: FastifyInstance) =>
  <Resource>{
    get: {
      handler: async () => 'Hello, Route!!'
    },
    post: {
      schema: helloSchema,
      handler: async (request: HelloRequest) => {
        const { name } = request.body;
        if (!name) {
          throw fastifyInstance.httpErrors.notFound();
        }
        const profile = getProfile(name);
        return profile;
      }
    }
  };
