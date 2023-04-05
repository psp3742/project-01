'use strict'
module.exports = async function (fastify, opts) {
  fastify.delete('/', async function (request, reply) {

    const client = await fastify.pg.connect()
  try {
    tokenValidator: async (token) => {
      let result;
      if (token === 1) {
           result = 1; 
      }
      if (token === 2) {
           result = 2;
      }
    }

    if(!result){
        throw {statusCode: 403, message: '토큰x'};
    }
    if(title == undefined){
        throw {satatus: 401, message: '강의명 오류'};
    }   

    const { rows } = await fastify.pg.query(`DELETE FROM registration WHERE userId=${userId} AND classId=${classId}`);
    reply.code(200).send(rows)

  } finally {
  client.release()
}
})

}
 
