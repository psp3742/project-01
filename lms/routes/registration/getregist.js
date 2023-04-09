'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/userId/:userId', async function (request, reply) {

    const client = await fastify.pg.connect();
    
    const awk = request.headers.authorization;
    //console.log(awk);

    const substring = awk.split(' ');
    //console.log(substring);

    const token = substring[1];
    //console.log(token);
    let result;

    if(token === '1'){
      result = 1;     
    } else if(token === '2') {
      throw { statusCode: 403, message: '수강자가 아닙니다.' };
    } else {
      throw { statusCode: 403, message: '토큰x' };
    }
   
    const { rows } = await client.query(`SELECT * FROM registration WHERE(userid = $1)`, [request.params.userId]);
    reply.code(200).send(rows);

    client.release();

    
  })
}