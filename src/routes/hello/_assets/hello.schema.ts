import { Static, Type } from '@sinclair/typebox';
import { FastifyRequest } from 'fastify';

export const HelloTypes = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
  age: Type.Optional(Type.Number())
});

export type HelloBodyType = Static<typeof HelloTypes>;

export type HelloRequest = FastifyRequest<{
  Body: HelloBodyType;
}>;

// schema

export const helloSchema = {
  body: HelloTypes,
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            age: { type: 'number' }
          }
        },
        code: { type: 'number' }
      }
    }
  }
};
