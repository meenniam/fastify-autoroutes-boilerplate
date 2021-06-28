import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import fastifyPrintRoutes from 'fastify-print-routes';
import fastifySensible from 'fastify-sensible';
import fastifyAutoroutes from 'fastify-autoroutes';

const isDevelopment = process.env.NODE_ENV === 'development';

export const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: isDevelopment,
  ignoreTrailingSlash: true
});

server.register(fastifySensible);

server.register(fastifyPrintRoutes);

server.register(fastifyAutoroutes, {
  dir: './routes'
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
