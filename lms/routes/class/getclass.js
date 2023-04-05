//const { requireServerPluginFromPath } = require("fastify-cli/util")

/*module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const client = await fastify.pg.connect()

    const {title, professorName} = request.query;
  
  try {
    if (title) {   
      const { rows } = await fastify.pg.query('SELECT * FROM classes WHERE title = $1', [title])
      reply.code(200).send(rows);
    }
    else if (professorName){
      const {rows} = await fastify.pg.query(`select * from classes WHERE professorName = $1`, [professorName])
      reply.code(200).send(rows)
      return;
    } else {
      const {rows} = await fastify.pg.query(`select * from classes`)
      reply.code(200).send(rows)
      return;
    } 
  
  } finally {
  client.release()
}
})

}*/

/*'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async(request,reply) => {
    try{
      const client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes`);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });


  fastify.get('/professorName/:professorName', async(request,reply) => {
    try{
      const client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes WHERE professorName = $1 RETURNING *`, [request.params.professorName]);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });

  fastify.get('/classId/:classId', async(request,reply) => {
    try{
      const client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes WHERE classId = $1 RETURNING *`, [request.params.classId]);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });

  fastify.get('/title/:title', async(request,reply) => {
    try{
      const client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes WHERE title = $1 RETURNING *`, [request.params.title]);
      client.release();
      reply.code(200).send(result.rows);
    } finally {
      client.release();
    }
  });
} */


'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async(request,reply) => {
    let client;
    try {
      client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes`);
      reply.code(200).send(result.rows);
    } catch (error) {
      throw error;
    } finally {
      if (client) client.release();
    }
  });


  fastify.get('/professorName/:professorName', async(request,reply) => {
    let client;
    try {
      client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes WHERE professorName = $1`, [request.params.professorName]);
      reply.code(200).send(result.rows);
    } catch (error) {
      throw error;
    } finally {
      if (client) client.release();
    }
  });

  fastify.get('/classId/:classId', async(request,reply) => {
    let client;
    try {
      client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes WHERE classId = $1`, [request.params.classId]);
      reply.code(200).send(result.rows);
    } catch (error) {
      throw error;
    } finally {
      if (client) client.release();
    }
  });

  fastify.get('/title/:title', async(request,reply) => {
    let client;
    try {
      client = await fastify.pg.connect();
      const result = await client.query(`SELECT * FROM public.classes WHERE title = $1`, [request.params.title]);
      reply.code(200).send(result.rows);
    } catch (error) {
      throw error;
    } finally {
      if (client) client.release();
    }
  });
}
