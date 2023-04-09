'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/:classId/:title/:professorname/:subjectoutLine/:role', async function (request, reply) {

    const client = await fastify.pg.connect();
    
    const awk = request.headers.authorization;
    //console.log(awk);

    const substring = awk.split(' ');
    //console.log(substring);

    const token = substring[1];
    console.log(token);
    let result;

    if(token === '1'){
      throw { statusCode: 403, message: '강의자가 아닙니다.' };      
    } else if(token === '2') {
      result = 2;
    } else {
      throw { statusCode: 403, message: '토큰x' };
    }

  client.query(`
    SELECT *
    FROM users u
    INNER JOIN classes c ON u.userid = c.professorid`, 
    )
  

  if(samerows < 0){
    throw { statusCode: 403, message: '수강자와 강의자가 다릅니다' };
    }
    
  const { rows } = await client.query(`
    INSERT INTO public.classes(classid, title, professorName, subjectoutline, role, userid, professorid) VALUES ($1, $2, $3, $4, $5, $6, $7`,
    [request.params.classId, request.params.title, request.params.professorname, request.params.subjectoutLine, request.params.role, request.params.userId, request.params.professorId]);
    reply.code(200).send('추가되었습니다');

    client.release();
  
  })
}