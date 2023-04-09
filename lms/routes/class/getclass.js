'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    try {
      const client = await fastify.pg.connect();
      const result = await client.query('SELECT * FROM public.classes');
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });
  
  fastify.get('/professorName/:professorName', async (request, reply) => {
    try {
      const client = await fastify.pg.connect();
      const result = await client.query('SELECT * FROM public.classes WHERE professorName = $1', [request.params.professorName]);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });
  
  fastify.get('/classId/:classId', async (request, reply) => {
    try {
      const client = await fastify.pg.connect();
      const result = await client.query('SELECT * FROM public.classes WHERE classId = $1', [request.params.classId]);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });
  
  fastify.get('/title/:title', async (request, reply) => {
    try {
      const client = await fastify.pg.connect();
      const result = await client.query('SELECT * FROM public.classes WHERE title = $1', [request.params.title]);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });
}
