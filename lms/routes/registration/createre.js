'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
  let client = undefined;
  try {
    const {title} =request.body;
    const {authorization} = request.headers;
    const tokenkey = {
    3: 3
    };
    const role = tokenkey[authorization];

    if(!role){
      throw {statusCode: 403, message: '토큰x'};
    }
    if(title == undefined){
      throw {satatus: 401, message: '강의명 오류'};
    }
    client = await fastify.pg.connect()

    const { rows } = await fastify.pg.query(`INSERT INTO registration VALUES (classid = ${classId})`);
    reply.code(200).send(rows)
    return;
  } catch (e) {
    reply.code(500).send({message: e.massage});
  } finally {
    if (client) 
      client.release()
  }
})


}
