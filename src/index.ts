import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import fastifyPrintRoutes from 'fastify-print-routes';
import fastifySensible from 'fastify-sensible';
import fastifyAutoroutes from 'fastify-autoroutes';
import fastifyCors from 'fastify-cors';
import fastifyHelmet from 'fastify-helmet';
import * as dotenv from 'dotenv';

dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';

declare module 'fastify' {
  interface IResponseReturn {
    data: any;
    code: number;
  }
  export interface FastifyInstance {
    // eslint-disable-next-line
    responseFormat: (data: any, code?: number) => IResponseReturn;
  }
}

export const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: isDevelopment,
  ignoreTrailingSlash: true
});

server.register(fastifySensible);

server.register(fastifyPrintRoutes);

server.register(fastifyCors);

server.register(fastifyHelmet);

server.register(
  async (instance: FastifyInstance) => {
    instance.register(fastifyAutoroutes, {
      dir: './routes'
    });
  },
  { prefix: '/v1' }
);

server.decorate('responseFormat', function (data: any, code: number = 200) {
  return { data, code };
});

server.listen(8080, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
