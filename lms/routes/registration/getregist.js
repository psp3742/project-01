'use strict'
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    const client = await fastify.pg.connect()
  try {
    const {title} = request.body;
    const {authorization} = request.headers;
    const tokenkey = {
        3: 3
    }
    const role = tokenkey[authorization];

    if(!role){
        throw {statusCode: 403, message: '토큰x'};
    }
    if(title == undefined){
        throw {satatus: 401, message: '강의명 오류'};
    }   

    const { rows } = await fastify.pg.query(`SELECT * FROM registration `);
    reply.code(200).send(rows)

  } finally {
  client.release()
}
})

}
 
