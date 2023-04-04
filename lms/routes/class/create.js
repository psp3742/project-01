'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {

    const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(
        'INSET INTO public.classes (classId, title, professorName, subjectOutline, role) VALUES (2, Cloud, 이코드, we are gonna learn about Cloud, 1)'
    )
    reply.code(200).send(rows)
  } finally {
    client.release()
  }
  })
}