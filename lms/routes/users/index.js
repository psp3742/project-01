'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('./createus'))
  fastify.register(require('./update'))

fastify.get('/users', async function (request, reply) {

    const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(
      'SELECT * FROM public.users'
    )
    reply.code(200).send(rows)
  } finally {
    client.release()
  }
  })
}


  