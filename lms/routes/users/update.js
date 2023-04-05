/*'use strict'
module.exports = async function (fastify, opts) {
  fastify.put('/users', async function (request, reply) {

    const client = await fastify.pg.connect()
  try {
    const {email} =request.body;
    const {authorization} = request.headers;
    const tokenkey = {
        kimcoding: 1,
        ecode: 2
    }
    const userId = tokenkey[authorization];

    if(!userId){
        throw {statusCode: 403, message: '토큰x'};
    }
    if(email == undefined){
        throw {satatus: 401, message: '이메일명 오류'};
    }   
    const { rows } = await fastify.pg.query('INSERT INTO users(email) VALUES ($1)', [email]);
    reply.code(200).send(rows)

  } finally {
  client.release()
}
})

}*/

'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'PUT',
    url: '/users/:email',
    handler: async function (request, reply) {
      const client = await fastify.pg.connect()

      try {
        const { email } = request.params;
        const { authorization } = request.headers;
        const { role } = request.body;
        const tokenkey = {
          kimcoding: 1,
          ecode: 2
        };
        const userId = tokenkey[authorization];

        if (!userId) {
          throw { statusCode: 403, message: '토큰x' };
        }

        const { rows } = await fastify.pg.query(`UPDATE public.users SET role = $1 WHERE email = $2`,
        [role, email])
        reply.code(200).send(rows);
      } finally {
        client.release();
      }
    }
  })

  fastify.route({
    method: 'POST',
    url: '/users',
    handler: async function (request, reply) {
      const client = await fastify.pg.connect()

      try {
        const { email } = request.body;
        const { authorization } = request.headers;
        const tokenkey = {
          3: 3
        };
        const role = tokenkey[authorization];

        if (!role) {
          throw { statusCode: 403, message: '토큰x' };
        }

        const { rows } = await fastify.pg.query('INSERT INTO users(email) VALUES ($1)', [email]);
        reply.code(200).send(rows);
      } finally {
        client.release();
      }
    }
  })

  fastify.route({
    method: 'DELETE',
    url: '/users/:email',
    handler: async function (request, reply) {
      const client = await fastify.pg.connect()

      try {
        const { email } = request.params;
        const { authorization } = request.headers;
        const tokenkey = {
          3: 3
        };
        const role = tokenkey[authorization];

        if (!role) {
          throw { statusCode: 403, message: '토큰x' };
        }

        const { rows } = await client.query(
          `DELETE email FROM users WHERE email = $1`,
          [email]
        );

        reply.code(200).send(rows);
      } finally {
        client.release();
      }
    }
  })
}