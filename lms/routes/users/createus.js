'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/:userId/:role/:userName/:email', async function (request, reply) {

    const client = await fastify.pg.connect()
    try {
      const { rows } = await client.query(
        `INSERT INTO public.users (userid, role, userName, email) VALUES ($1, $2, $3, $4)`, 
        [request.params.userId, request.params.role, request.params.userName, request.params.email]); 
        reply.code(200).send(rows)
      
    } finally { 
      client.release()
    }
  })
}